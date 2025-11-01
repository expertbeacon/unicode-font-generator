/**
 * JSON-LD Component
 * Renders Schema.org structured data in JSON-LD format
 */

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>;
}

export function JsonLd({ data }: JsonLdProps) {
  // If data is an array, render multiple scripts
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </>
    );
  }

  // Single schema
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Multiple JSON-LD schemas
 */
export function MultipleJsonLd({ schemas }: { schemas: Array<Record<string, any>> }) {
  return <JsonLd data={schemas} />;
}
