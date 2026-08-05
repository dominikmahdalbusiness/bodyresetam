/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // až budeš mít fotky v Supabase Storage nebo jinde, doplň sem povolenou doménu
    ],
  },
};

module.exports = nextConfig;
