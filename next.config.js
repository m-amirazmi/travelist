const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/customer/login",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/customer/register",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
