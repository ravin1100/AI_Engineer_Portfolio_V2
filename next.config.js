/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Generate static files for GitHub Pages
  images: {
    domains: ['localhost'],
    unoptimized: true, // Disable image optimization
  },
  experimental: {
    optimizeCss: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  trailingSlash: true, // Fix routing on GitHub Pages
  generateEtags: false,
  eslint: {
    ignoreDuringBuilds: true, // ✅ allow deployment even with lint warnings/errors
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/assets/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ]
  // },
}

module.exports = nextConfig;
