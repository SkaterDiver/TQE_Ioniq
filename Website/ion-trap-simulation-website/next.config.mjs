/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
    output: 'export',
  // Only enable this during development if needed
  // typescript: {
  //   ignoreBuildErrors: false,
  // },
}

export default nextConfig
