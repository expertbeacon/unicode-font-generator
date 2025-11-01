# Technical Design: PSEO Infrastructure

## Context

Font Generator currently has basic SEO (metadata, robots.txt) but lacks the infrastructure needed for programmatic SEO at scale. This design introduces comprehensive SEO capabilities while maintaining Edge Runtime compatibility and fast performance.

**Constraints:**
- Must work with Edge Runtime (no Node.js APIs)
- Must maintain <2s TTFB globally
- Must support 14 locales consistently
- Must pass WCAG AA accessibility standards
- Must maintain current build times (<5 minutes)

**Stakeholders:**
- SEO/Growth team (maximize organic traffic)
- Engineering team (maintain performance)
- Content team (easier content management)
- End users (better discovery and navigation)

## Goals / Non-Goals

### Goals
1. ✅ Generate comprehensive XML sitemap with all pages and locales
2. ✅ Implement Schema.org structured data for rich snippets
3. ✅ Add complete metadata (canonical, hreflang, OG, Twitter Cards)
4. ✅ Enable programmatic content generation (font pages, use-cases)
5. ✅ Build internal linking architecture for SEO juice distribution
6. ✅ Add analytics tracking for optimization
7. ✅ Maintain or improve Core Web Vitals scores
8. ✅ Pass Lighthouse SEO audit (95+/100)

### Non-Goals
- ❌ Blog/CMS system (future phase)
- ❌ User-generated content
- ❌ API for third-party integrations
- ❌ Server-side rendering (stick with SSG/ISR)
- ❌ Changing existing URL structure
- ❌ Adding authentication/accounts

## Decisions

### 1. Sitemap Architecture: Multi-Locale Single Sitemap

**Decision**: Use single sitemap with locale-specific URLs and hreflang annotations

**Alternatives Considered:**
- **Option A**: Separate sitemaps per locale
  - ❌ Complex to maintain
  - ❌ Harder to keep in sync
  - ❌ More HTTP requests
- **Option B**: Sitemap index with sub-sitemaps
  - ✅ Good for very large sites
  - ❌ Overkill for current scale (~200 pages)
  - ❌ More complexity
- **Option C**: Single sitemap with all locales (CHOSEN)
  - ✅ Simple to maintain
  - ✅ One source of truth
  - ✅ Easy to validate
  - ✅ Supports hreflang annotations
  - ⚠️ May need to split if >50,000 URLs

**Implementation:**
```typescript
// src/app/[locale]/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.fontgenerator.dev';
  const locales = appConfig.i18n.locales;
  const urls: MetadataRoute.Sitemap = [];

  // For each page type, generate entries for all locales
  for (const locale of locales) {
    // Homepage
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${baseUrl}/${l}`])
        )
      }
    });

    // Style pages
    for (const style of styleKeys) {
      urls.push({
        url: `${baseUrl}/${locale}/${style}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}/${style}`])
          )
        }
      });
    }
  }

  return urls;
}
```

### 2. Structured Data: JSON-LD Format

**Decision**: Use JSON-LD in <script type="application/ld+json"> tags

**Alternatives Considered:**
- **Option A**: Microdata (inline HTML attributes)
  - ❌ Harder to maintain
  - ❌ Clutters HTML
  - ❌ Harder to validate
- **Option B**: RDFa
  - ❌ Less common
  - ❌ More verbose
  - ❌ Google recommends JSON-LD
- **Option C**: JSON-LD (CHOSEN)
  - ✅ Google's recommended format
  - ✅ Easy to validate
  - ✅ Separate from HTML
  - ✅ Can be generated server-side
  - ✅ TypeScript type-safe

**Implementation:**
```typescript
// src/components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Usage in layout.tsx
<JsonLd data={{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.fontgenerator.dev",
  "name": "Font Generator",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.fontgenerator.dev/en?text={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}} />
```

### 3. Metadata Management: Centralized Functions

**Decision**: Extend existing `src/metadata.ts` with comprehensive metadata functions

**Alternatives Considered:**
- **Option A**: Per-page inline metadata
  - ❌ Duplicated code
  - ❌ Inconsistent implementation
  - ❌ Hard to update globally
- **Option B**: Separate metadata package
  - ❌ Over-engineering
  - ❌ Additional dependency
- **Option C**: Centralized metadata functions (CHOSEN)
  - ✅ Single source of truth
  - ✅ Easy to maintain
  - ✅ Consistent across pages
  - ✅ Type-safe with TypeScript

**Implementation:**
```typescript
// src/metadata.ts
export async function generatePageMetadata({
  locale,
  pagePath,
  title,
  description,
  images,
}: MetadataParams): Promise<Metadata> {
  const baseUrl = 'https://www.fontgenerator.dev';
  const canonicalUrl = `${baseUrl}/${locale}${pagePath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        appConfig.i18n.locales.map(l => [l, `${baseUrl}/${l}${pagePath}`])
      )
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: appConfig.appName,
      locale,
      type: 'website',
      images: images || [`${baseUrl}/og-image.png`]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images || [`${baseUrl}/twitter-image.png`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    }
  };
}
```

### 4. Programmatic Pages: Static Generation with generateStaticParams

**Decision**: Use Next.js `generateStaticParams` for font and use-case pages

**Alternatives Considered:**
- **Option A**: Server-Side Rendering (SSR)
  - ❌ Slower TTFB
  - ❌ Costs on Cloudflare
  - ❌ Not needed for static content
- **Option B**: Incremental Static Regeneration (ISR)
  - ✅ Good for frequently updating content
  - ❌ Overkill for fonts (rarely change)
  - ❌ More complex caching
- **Option C**: Static Generation (SSG) (CHOSEN)
  - ✅ Fastest performance
  - ✅ No runtime cost
  - ✅ Perfect for static content
  - ✅ Edge-cached automatically
  - ⚠️ Rebuild needed for changes

**Implementation:**
```typescript
// src/app/[locale]/(frontend)/fonts/[fontKey]/page.tsx
export async function generateStaticParams() {
  const params = [];

  for (const locale of appConfig.i18n.locales) {
    for (const fontKey of fontKeys) {
      params.push({ locale, fontKey });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, fontKey } = params;
  const t = await getTranslations({ locale });
  const fontName = getFontDisplayName(fontKey);

  return generatePageMetadata({
    locale,
    pagePath: `/fonts/${fontKey}`,
    title: t('fonts.meta.title', { fontName }),
    description: t('fonts.meta.description', { fontName }),
  });
}
```

### 5. Internal Linking: Hub-and-Spoke Model

**Decision**: Homepage as hub, categories as spokes, details as leaves

**Alternatives Considered:**
- **Option A**: Flat structure (all pages equal)
  - ❌ Weak SEO hierarchy
  - ❌ Poor user navigation
- **Option B**: Deep nested hierarchy
  - ❌ Too many clicks to content
  - ❌ Dilutes page authority
- **Option C**: Hub-and-spoke (CHOSEN)
  - ✅ Clear SEO hierarchy
  - ✅ Short path to content (2-3 clicks)
  - ✅ Distributes page authority
  - ✅ Easy to navigate

**Structure:**
```
Homepage (Priority: 1.0)
├── Style Categories (Priority: 0.8)
│   ├── Bold Text
│   │   ├── Serif Bold (Priority: 0.6)
│   │   ├── Sans Bold (Priority: 0.6)
│   │   └── ...
│   ├── Italic Text
│   └── ...
├── Topics (Priority: 0.7)
│   ├── Facebook Fonts
│   ├── Instagram Fonts
│   └── ...
└── Use Cases (Priority: 0.7)
    ├── Bio Text
    ├── Post Captions
    └── ...
```

## Risks / Trade-offs

### Risk 1: Build Time Increase

**Risk**: Generating 500+ pages (14 locales × 40 fonts) may slow builds

**Likelihood**: Medium
**Impact**: Medium (slower deployments)

**Mitigation:**
- Use parallel generation where possible
- Optimize font transformation logic
- Consider ISR for less important pages
- Monitor build times and optimize

**Rollback Plan:**
- Reduce number of programmatic pages
- Use client-side rendering for some pages

### Risk 2: Duplicate Content Penalties

**Risk**: Multiple locales with similar content may trigger duplicate content flags

**Likelihood**: Low (with proper implementation)
**Impact**: High (ranking penalties)

**Mitigation:**
- Proper canonical URLs
- Correct hreflang implementation
- Unique content per locale
- Monitor Search Console for issues

**Rollback Plan:**
- Add noindex to certain locales
- Consolidate to fewer languages

### Risk 3: Crawl Budget Waste

**Risk**: Too many low-value pages consuming crawl budget

**Likelihood**: Low
**Impact**: Medium (slower indexing)

**Mitigation:**
- Strategic robots meta tags
- Sitemap priority optimization
- Monitor Search Console crawl stats
- Use internal linking to guide crawlers

**Rollback Plan:**
- Add noindex to low-value pages
- Reduce sitemap size

### Risk 4: Performance Degradation

**Risk**: More metadata/structured data may slow page load

**Likelihood**: Very Low
**Impact**: High (SEO harm)

**Mitigation:**
- Keep structured data minimal
- Compress metadata
- Use Edge caching
- Monitor Core Web Vitals

**Rollback Plan:**
- Remove less important structured data
- Optimize metadata generation

## Migration Plan

### Phase 1: Infrastructure (Week 1)

**Day 1-2: Setup**
- Create SEO utility files
- Set up TypeScript types
- Create configuration files

**Day 3-4: Sitemap**
- Implement sitemap generation
- Test across all locales
- Validate XML structure

**Day 5-7: Structured Data & Metadata**
- Implement JSON-LD component
- Add structured data to pages
- Enhance metadata functions
- Test with validation tools

### Phase 2: Content (Week 2)

**Day 8-10: Font Pages**
- Create font detail page template
- Implement generateStaticParams
- Add metadata functions
- Test rendering

**Day 11-13: Use-Case Pages**
- Create use-case page template
- Add content configuration
- Implement routing
- Test rendering

**Day 14: Internal Linking**
- Update homepage
- Add related sections
- Implement breadcrumbs
- Test navigation

### Phase 3: Validation & Deploy (Week 3)

**Day 15-17: Testing**
- Run Lighthouse audits
- Validate structured data
- Test Open Graph
- Check all locales
- QA on staging

**Day 18-19: Analytics Setup**
- Implement tracking
- Test events
- Set up Search Console
- Submit sitemap

**Day 20-21: Deploy & Monitor**
- Deploy to production
- Monitor indexing
- Track analytics
- Fix any issues

### Rollback Strategy

**If issues found in production:**

1. **Immediate (< 1 hour):**
   - Revert deployment
   - Rollback to previous version

2. **Quick Fix (< 24 hours):**
   - Fix specific issue
   - Deploy hotfix
   - Monitor

3. **Major Issues:**
   - Disable new features via feature flags
   - Investigate root cause
   - Plan proper fix

## Open Questions

1. **Q: Should we generate pages for all 40+ fonts across 14 locales?**
   - A: Start with top 20 fonts by popularity, expand after validation

2. **Q: How to handle Open Graph images - generate or static?**
   - A: Start with static per-category images, consider dynamic generation later

3. **Q: What priority levels for different page types?**
   - A: Homepage (1.0), Categories (0.8), Topics (0.7), Details (0.6)

4. **Q: Should we add FAQ schema to all pages?**
   - A: Only where FAQ content exists naturally

5. **Q: How often to update sitemap?**
   - A: On every build (automated), manual ping to Search Console on major changes

## Success Metrics

### Technical Metrics
- ✅ Lighthouse SEO score: 95+/100
- ✅ Sitemap validated without errors
- ✅ All structured data passes Google Rich Results Test
- ✅ Core Web Vitals remain "Good" (all green)
- ✅ Build time < 7 minutes

### SEO Metrics (30 days post-launch)
- 📈 Indexed pages: +100 pages minimum
- 📈 Organic traffic: +20% increase
- 📈 Impressions: +50% increase
- 📈 Average position: Improve by 5 positions
- 📈 Click-through rate: +0.5% increase

### User Metrics
- 👥 Time on site: +15% increase
- 👥 Pages per session: +0.5 increase
- 👥 Bounce rate: -5% decrease
- 👥 Return visitor rate: +10% increase

## References

- [Google Search Central - Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Schema.org Documentation](https://schema.org/docs/documents.html)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Core Web Vitals](https://web.dev/vitals/)
