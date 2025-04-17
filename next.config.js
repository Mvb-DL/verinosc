/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",    
        port: "",                 
        pathname: "/**",          
      },
    ],
  },
};

module.exports = nextConfig;
