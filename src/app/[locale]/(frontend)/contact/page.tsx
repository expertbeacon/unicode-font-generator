import { contactMetadata } from "@/metadata";
import { LocaleType } from "@/config";
import ContactClient from "./contact-client";

export const runtime = 'edge';

export { contactMetadata as generateMetadata };

export default function ContactPage({
  params
}: Readonly<{
  params: { locale: LocaleType };
}>) {
  return <ContactClient />;
}
