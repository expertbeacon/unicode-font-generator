/** @type {import('next').NextConfig} */
import nextIntlPlugin from "next-intl/plugin";
const withNextIntl = nextIntlPlugin("./src/i18n.ts");

const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
};

export default withNextIntl(nextConfig);
