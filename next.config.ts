import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instamart-media-assets.swiggy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media-assets.swiggy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dineout-media-assets.swiggy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "b.zmtcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dt4l9bx31tioh.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.restaurantguru.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};
export default nextConfig;
