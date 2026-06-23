/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "geist"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];

    const longCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      {
        source: "/_next/static/:path*",
        headers: [...securityHeaders, ...longCache],
      },
      {
        source: "/guides/:path*",
        headers: [...securityHeaders, ...longCache],
      },
      {
        source: "/:file(favicon.ico|icon.png|apple-touch-icon.png|og.png|favicon.svg)",
        headers: [...securityHeaders, ...longCache],
      },
      {
        // HTML/app routes: avoid CDN serving stale HTML that references old chunk hashes.
        source:
          "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-touch-icon.png|og.png|sitemap|llms|ai.json|robots.txt|guides/).*)",
        headers: [
          ...securityHeaders,
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

export default nextConfig;
