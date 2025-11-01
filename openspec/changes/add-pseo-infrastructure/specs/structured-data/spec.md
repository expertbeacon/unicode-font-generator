# Structured Data Specification

## ADDED Requirements

### Requirement: JSON-LD Component

The system SHALL provide a reusable React component for rendering JSON-LD structured data.

#### Scenario: JSON-LD rendering

- **WHEN** structured data needs to be added to a page
- **THEN** JsonLd component SHALL accept schema object as props
- **AND** component SHALL render <script type="application/ld+json">
- **AND** component SHALL properly escape JSON content

#### Scenario: Multiple schema support

- **WHEN** multiple schemas are needed on a page
- **THEN** system SHALL support multiple JsonLd components
- **AND** each schema SHALL be in a separate <script> tag
- **AND** schemas SHALL not conflict with each other

### Requirement: WebSite Schema

The system SHALL implement WebSite schema with search functionality.

#### Scenario: WebSite schema on homepage

- **WHEN** user visits homepage
- **THEN** page SHALL include WebSite schema
- **AND** schema SHALL include @context, @type, name, url, and potentialAction
- **AND** potentialAction SHALL define SearchAction with target URL pattern

#### Scenario: Search action

- **WHEN** WebSite schema includes SearchAction
- **THEN** SearchAction SHALL have correct target URL with query parameter
- **AND** SearchAction SHALL specify query-input as required
- **AND** SearchAction SHALL use "search_term_string" as query parameter name

### Requirement: BreadcrumbList Schema

The system SHALL implement BreadcrumbList schema for navigation hierarchy.

#### Scenario: Breadcrumb schema on category pages

- **WHEN** user visits style category or topic page
- **THEN** page SHALL include BreadcrumbList schema
- **AND** schema SHALL list all breadcrumb items in order
- **AND** each item SHALL have position, name, and item URL

#### Scenario: Breadcrumb hierarchy

- **WHEN** BreadcrumbList is generated
- **THEN** position SHALL start at 1 (homepage)
- **AND** positions SHALL increment sequentially
- **AND** current page SHALL be the last item

### Requirement: FAQPage Schema

The system SHALL implement FAQPage schema where FAQ content exists.

#### Scenario: FAQ schema on content pages

- **WHEN** page includes FAQ section
- **THEN** page SHALL include FAQPage schema
- **AND** schema SHALL include mainEntity with all questions
- **AND** each question SHALL have @type Question, name, and acceptedAnswer

#### Scenario: FAQ answers

- **WHEN** FAQPage schema includes answers
- **THEN** each acceptedAnswer SHALL have @type Answer and text
- **AND** answer text SHALL be plain text (no HTML)
- **AND** answer text SHALL be concise and informative

### Requirement: WebApplication Schema

The system SHALL implement WebApplication schema to define the tool's functionality.

#### Scenario: WebApplication schema on tool pages

- **WHEN** user visits font generator tool page
- **THEN** page SHALL include WebApplication schema
- **AND** schema SHALL include name, url, applicationCategory, and offers
- **AND** applicationCategory SHALL be "UtilityApplication"

#### Scenario: Free application offer

- **WHEN** WebApplication schema defines offers
- **THEN** offers SHALL have @type Offer and price "0"
- **AND** priceCurrency SHALL be "USD"
- **AND** availability SHALL be "https://schema.org/InStock"

### Requirement: Organization Schema

The system SHALL implement Organization schema for brand identity.

#### Scenario: Organization schema in layout

- **WHEN** page is rendered
- **THEN** layout SHALL include Organization schema
- **AND** schema SHALL include name, url, logo, and sameAs
- **AND** sameAs SHALL list social media profiles

#### Scenario: Organization logo

- **WHEN** Organization schema includes logo
- **THEN** logo SHALL be ImageObject with URL, width, and height
- **AND** logo SHALL be in PNG or SVG format
- **AND** logo SHALL be accessible and properly sized

### Requirement: Schema Validation

The system SHALL ensure all structured data is valid and error-free.

#### Scenario: Schema.org compliance

- **WHEN** structured data is generated
- **THEN** all schemas SHALL comply with Schema.org specifications
- **AND** all required properties SHALL be included
- **AND** property values SHALL have correct types

#### Scenario: Google validation

- **WHEN** structured data is deployed
- **THEN** data SHALL pass Google Rich Results Test
- **AND** data SHALL have no errors or warnings
- **AND** data SHALL be eligible for rich results

### Requirement: Structured Data Performance

The system SHALL ensure structured data does not impact page performance.

#### Scenario: Data size

- **WHEN** structured data is added to page
- **THEN** total JSON-LD size SHALL be < 10KB per page
- **AND** data SHALL be minified (no extra whitespace)
- **AND** data SHALL not block rendering

#### Scenario: Server-side generation

- **WHEN** structured data is generated
- **THEN** generation SHALL happen server-side (not client-side)
- **AND** generation SHALL add < 5ms to server response time
- **AND** generation SHALL not impact Time to First Byte

### Requirement: Locale-Specific Structured Data

The system SHALL adapt structured data for different locales.

#### Scenario: Localized content

- **WHEN** structured data is generated for non-English locale
- **THEN** text content SHALL be translated to target locale
- **AND** URLs SHALL include locale prefix
- **AND** inLanguage property SHALL reflect page locale

#### Scenario: Multi-language support

- **WHEN** structured data includes language information
- **THEN** inLanguage SHALL use ISO 639-1 language codes
- **AND** content SHALL be appropriate for locale
- **AND** URLs SHALL match locale routing
