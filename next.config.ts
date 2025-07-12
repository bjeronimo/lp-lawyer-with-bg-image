import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['*.ngrok-free.app'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'bancario.igorsantos.adv.br',
        port: '3000',
        pathname: '/**',
        search: '',
      }
    ]
  },
};

export default nextConfig;
