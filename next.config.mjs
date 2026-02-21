import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
  },
};

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");
export default withNextIntl(nextConfig);
