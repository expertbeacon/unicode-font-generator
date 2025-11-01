# Sitemap Generation Specification

## ADDED Requirements

### Requirement: Dynamic XML Sitemap

The system SHALL generate a comprehensive XML sitemap including all pages across all supported locales.

#### Scenario: Sitemap generation

- **WHEN** accessing `/[locale]/sitemap.xml`
- **THEN** system SHALL return a valid XML sitemap
- **AND** sitemap SHALL include entries for all public pages
- **AND** sitemap SHALL comply with sitemap protocol 0.9

#### Scenario: Multi-locale sitemap

- **WHEN** generating sitemap entries
- **THEN** each page SHALL have entries for all 14 supported locales
- **AND** each entry SHALL include proper hreflang alternate links
- **AND** x-default SHALL point to the English (en) version

#### Scenario: Homepage entries

- **WHEN** sitemap includes homepage entries
- **THEN** homepage SHALL have priority of 1.0
- **AND** homepage SHALL have changefreq of "weekly"
- **AND** homepage SHALL be included for all locales

### Requirement: Page Categorization

The system SHALL assign appropriate priority and change frequency to different page types.

#### Scenario: Style category pages

- **WHEN** sitemap includes style category pages
- **THEN** style pages SHALL have priority of 0.8
- **AND** style pages SHALL have changefreq of "weekly"
- **AND** all style categories SHALL be included (bold-text, italic, fancy, etc.)

#### Scenario: Topic pages

- **WHEN** sitemap includes topic pages
- **THEN** topic pages SHALL have priority of 0.7
- **AND** topic pages SHALL have changefreq of "monthly"
- **AND** all topics SHALL be included (facebook, twitter, whatsapp, handwriting)

#### Scenario: Font detail pages

- **WHEN** sitemap includes font detail pages
- **THEN** font pages SHALL have priority of 0.6
- **AND** font pages SHALL have changefreq of "monthly"
- **AND** all font variations SHALL be included

### Requirement: Sitemap Metadata

The system SHALL include proper metadata for each sitemap entry.

#### Scenario: Last modification date

- **WHEN** generating sitemap entries
- **THEN** each entry SHALL include lastModified timestamp
- **AND** timestamp SHALL be in ISO 8601 format
- **AND** timestamp SHALL reflect actual content update time (or build time)

#### Scenario: Alternate languages

- **WHEN** generating sitemap entries
- **THEN** each entry SHALL include alternate language links
- **AND** alternates SHALL reference the same content in other locales
- **AND** alternates SHALL use proper locale codes (en, es, de_DE, etc.)

### Requirement: Sitemap Validation

The system SHALL ensure generated sitemaps are valid and compliant.

#### Scenario: XML validation

- **WHEN** sitemap is generated
- **THEN** XML SHALL be well-formed
- **AND** XML SHALL validate against sitemap XSD schema
- **AND** XML SHALL include proper namespace declarations

#### Scenario: URL validation

- **WHEN** sitemap includes URLs
- **THEN** all URLs SHALL be absolute (include domain)
- **AND** all URLs SHALL be properly URL-encoded
- **AND** all URLs SHALL be accessible (no 404s)

#### Scenario: Size limits

- **WHEN** sitemap is generated
- **THEN** sitemap file size SHALL be < 50MB
- **AND** sitemap SHALL contain < 50,000 URLs
- **AND** if limits are exceeded, system SHALL use sitemap index

### Requirement: Sitemap Performance

The system SHALL generate sitemaps efficiently without impacting page load performance.

#### Scenario: Edge caching

- **WHEN** sitemap is requested
- **THEN** sitemap SHALL be cached at the edge
- **AND** cache SHALL be valid for 24 hours
- **AND** cache SHALL be automatically regenerated on builds

#### Scenario: Generation performance

- **WHEN** sitemap is generated at build time
- **THEN** generation SHALL complete in < 5 seconds
- **AND** generation SHALL not block other build processes
- **AND** generation SHALL use minimal memory

### Requirement: Sitemap Discoverability

The system SHALL ensure search engines can easily discover the sitemap.

#### Scenario: Robots.txt reference

- **WHEN** accessing /robots.txt
- **THEN** robots.txt SHALL include sitemap location
- **AND** sitemap URL SHALL be absolute
- **AND** sitemap SHALL be referenced for all locales if needed

#### Scenario: Search Console submission

- **WHEN** sitemap is deployed
- **THEN** sitemap SHALL be submitted to Google Search Console
- **AND** sitemap SHALL be submitted to Bing Webmaster Tools
- **AND** sitemap errors SHALL be monitored and fixed

### Requirement: Sitemap Updates

The system SHALL keep sitemap up-to-date with content changes.

#### Scenario: Automatic regeneration

- **WHEN** content is updated and deployed
- **THEN** sitemap SHALL be automatically regenerated
- **AND** lastModified dates SHALL reflect new update time
- **AND** search engines SHALL be notified of updates

#### Scenario: Manual regeneration

- **WHEN** sitemap needs immediate update
- **THEN** build process SHALL regenerate sitemap
- **AND** new sitemap SHALL be deployed automatically
- **AND** sitemap SHALL be accessible within 1 minute
