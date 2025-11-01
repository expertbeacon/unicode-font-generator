# Project Context

## Purpose

Font Generator (fontgenerator.dev) is a multilingual web application that converts standard text into Unicode-based styled fonts. The application enables users to generate fancy, bold, italic, cursive, bubble, and various other text styles that can be copied and pasted across social media platforms, messaging apps, and other digital platforms.

**Primary Goal**: Maximize organic traffic through programmatic SEO (PSEO) while providing an excellent user experience for text transformation.

## Tech Stack

### Core Framework
- **Next.js 14.2.5** - React framework with App Router
- **TypeScript** - Type-safe development
- **Edge Runtime** - Fast global delivery via Cloudflare Pages

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **next-themes** - Dark mode support

### Internationalization
- **next-intl** - i18n routing and translations
- **14 Languages**: en, es, de_DE, fr, it, nl, pl, pt, sv, tr, ru, zh, ja, ko

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Deployment
- **Cloudflare Pages** - Edge hosting
- **Wrangler** - Deployment tooling
- **Docker** - Containerization support

### Analytics
- **Google Analytics** (GA_ID: G-GEKRPVPFPD)

## Project Conventions

### Code Style
- **Naming**: camelCase for variables/functions, PascalCase for components
- **File naming**: kebab-case for files, PascalCase for React components
- **Formatting**: Prettier + ESLint with Next.js recommended rules
- **Import order**: External packages → Internal modules → Components → Types

### Architecture Patterns

#### URL Structure
```
/{locale}/                          # Homepage (all fonts)
/{locale}/{style}                   # Style category pages
/{locale}/topic/{topic}             # Topic-specific pages
```

#### Font System
- **40+ Unicode font transformations** stored in `src/fonts.ts`
- **Font categories**: all, fancy, cool, small-text, bold-text, italic, bold-italic, sans-serif, serif, underline, bubble-text, square-text, cursive-font, alternating
- **Topics**: facebook, twitter, whatsapp, handwriting
- **Transform pipeline**: Normal text → Unicode mapping → Styled output

#### Content Management
- **Markdown-based content** in `public/content/components/`
- **Pre-generated JSON** in `public/data/generated/components-markdown.json`
- **Structure**: `{component}/{locale}.md` format

#### Metadata Strategy
- **Function-based metadata** in `src/metadata.ts`
- **Async generation** with next-intl translations
- **Per-page customization** for SEO optimization

### Testing Strategy
- **Manual testing** in development
- **Build validation** via `npm run build`
- **Edge runtime testing** via `npm run preview`
- **Pre-commit hooks** via Husky for data generation

### Git Workflow
- **Husky pre-commit hooks**
  - Auto-generate markdown data: `npm run generate-markdown-data`
  - Auto-generate transforms: `npm run generate-transforms`
  - Auto-add generated data to git

## Domain Context

### SEO & Content Strategy

#### Current State (Baseline)
- ✅ 14-language internationalization
- ✅ Basic metadata (title, description)
- ✅ robots.txt allowing all crawlers
- ✅ Clean URL structure
- ✅ Edge runtime (fast TTFB)
- ❌ **NO dynamic sitemap**
- ❌ **NO Schema.org structured data**
- ❌ **NO Open Graph images**
- ❌ **NO canonical URLs**
- ❌ **NO hreflang tags**
- ❌ **Limited internal linking**
- ❌ **No programmatic content generation**

#### Target Markets
- **Primary**: United States (English)
- **Secondary**: Europe (de_DE, fr, it, es, nl, pl, sv), Asia (zh, ja, ko), Other (pt, ru, tr)

#### User Intent Categories
1. **Utility Users**: Need specific text transformation for immediate use
2. **Social Media Users**: Looking for eye-catching text for posts/profiles
3. **Designers**: Seeking unique typography for creative projects
4. **Content Creators**: Need stylized text for branding

#### Keyword Strategy
- **Head terms**: "font generator", "text generator", "fancy text"
- **Body terms**: "bold text generator", "italic font generator", "cursive font"
- **Long-tail**: "facebook font generator", "instagram bio fonts", "whatsapp fancy text"
- **LSI keywords**: "unicode text", "copy paste fonts", "stylish text", "cool symbols"

### Core Business Metrics
- **Primary KPI**: Organic search traffic
- **Secondary KPIs**:
  - Time on page (engagement)
  - Copy/paste actions (conversion)
  - Return visitor rate
  - Pages per session (exploration)

## Important Constraints

### Technical Constraints
1. **Edge Runtime Only** - All routes must be edge-compatible
2. **No Node.js APIs** - Cannot use fs, path in runtime code
3. **Unicode Limitations** - Limited to Unicode character support
4. **Client-side State** - Font transformation happens client-side
5. **Static at Build** - Markdown content is pre-processed

### SEO Constraints
1. **WCAG AA Compliance** - Accessibility required (global standard)
2. **US Market Focus** - Primary English content target
3. **Real APIs Only** - No mock data in production
4. **Page Speed** - Must maintain fast Core Web Vitals

### Business Constraints
1. **Free Tool** - No monetization (ad-supported model possible)
2. **No User Accounts** - Stateless operation
3. **API Keys via .env** - No hardcoded credentials

## External Dependencies

### Runtime Services
- **None** - Fully self-contained application

### Build-time Dependencies
- **Google Fonts** - Via Next.js @next/third-parties
- **npm Registry** - Package dependencies

### Development Tools
- **Cloudflare Wrangler** - Deployment CLI
- **tsx** - TypeScript execution for scripts

### Analytics & Monitoring
- **Google Analytics** - Page views and user behavior
- **Cloudflare Analytics** - Performance metrics (implicit)

## Current File Structure

```
font-generator/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── [locale]/
│   │   │   ├── (frontend)/
│   │   │   │   ├── (home)/page.tsx         # Homepage
│   │   │   │   ├── [style]/page.tsx        # Style category pages
│   │   │   │   ├── topic/
│   │   │   │   │   ├── page.tsx            # Topic index
│   │   │   │   │   └── [topic]/page.tsx    # Topic detail
│   │   │   │   └── [...rest]/page.tsx      # 404 catch-all
│   │   │   └── layout.tsx
│   │   ├── api/                    # API routes
│   │   │   ├── ipinfo/route.ts
│   │   │   └── redirectcheck/route.ts
│   │   ├── favicon.ico
│   │   └── robots.ts
│   ├── components/
│   │   ├── frontend/               # Frontend page components
│   │   ├── shared/                 # Reusable UI components
│   │   └── ui/                     # shadcn/ui components
│   ├── lib/                        # Utility libraries
│   ├── fonts.ts                    # Unicode font mappings (40+ styles)
│   ├── transforms.ts               # Font transformation functions
│   ├── slugs.ts                    # URL slug definitions
│   ├── metadata.ts                 # SEO metadata generators
│   ├── config.ts                   # App configuration
│   ├── i18n.ts                     # i18n setup
│   └── middleware.ts               # Next.js middleware
├── public/
│   ├── content/components/         # Markdown content files
│   │   ├── home/
│   │   ├── style/
│   │   ├── topic/
│   │   └── empty/
│   ├── data/generated/
│   │   └── components-markdown.json # Pre-built content data
│   └── i18n/                       # Translation JSON files
├── openspec/                       # OpenSpec specifications
│   ├── AGENTS.md                   # OpenSpec workflow guide
│   └── project.md                  # This file
└── bin/                            # Build scripts
    ├── generateComponentsMarkdownData.ts
    └── transforms.ts
```

## Key Design Decisions

### Why Unicode Over Custom Fonts?
Unicode characters work universally across platforms without requiring font files. Users can copy/paste styled text anywhere (Instagram, Twitter, Discord, etc.) and it displays correctly.

### Why Edge Runtime?
- **Global performance**: Low latency worldwide via Cloudflare's edge network
- **Cost efficiency**: No origin server costs
- **Scalability**: Handles traffic spikes automatically
- **SEO benefit**: Fast TTFB improves Core Web Vitals

### Why Markdown for Content?
- **Easy editing**: Non-technical content updates
- **Version control**: Track changes in git
- **Build-time optimization**: Pre-rendered HTML for fast delivery
- **Multilingual support**: Separate files per locale

### Why Programmatic SEO Focus?
- **Scalable traffic**: Generate thousands of pages automatically
- **Long-tail keywords**: Capture niche search queries
- **Low competition**: Specific font combinations have less competition
- **Compounding growth**: More pages = more entry points = more traffic

## Success Criteria

### Phase 1: SEO Infrastructure (Current Focus)
- ✅ Dynamic XML sitemap with all pages
- ✅ Schema.org structured data (WebSite, BreadcrumbList, FAQPage)
- ✅ Open Graph images for social sharing
- ✅ Canonical URLs and hreflang tags
- ✅ Enhanced metadata (Twitter Cards, JSON-LD)

### Phase 2: Content Expansion
- Generate individual font style pages (e.g., `/bold-text/serif-bold`)
- Add use-case pages (e.g., `/instagram-bio-fonts`, `/tiktok-text-generator`)
- Create combination pages (e.g., `/bold-italic-fonts`)
- Add "how-to" guides and tutorials

### Phase 3: User Experience
- Save favorite fonts (localStorage)
- Quick copy buttons with visual feedback
- Font preview in real-time
- Mobile optimization improvements

### Phase 4: Analytics & Optimization
- Track most popular fonts
- A/B test layouts
- Performance monitoring
- Conversion rate optimization (copy events)

## Notes

- **Content strategy**: Focus on user intent (problem-solving) rather than keyword stuffing
- **Link building**: Natural backlinks from design blogs, social media tools lists
- **Competitive advantage**: Speed + breadth of fonts + multilingual = difficult to replicate
- **Future opportunity**: API for developers, browser extension, Figma plugin
