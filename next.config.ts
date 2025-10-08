import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co",
      },
    ],
  },
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
