/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    EMAILJS_SERVICE_KEY: "service_4kr5zji",
    EMAILJS_TEMPLATE_KEY: "template_pm34hfl",
    EMAILJS_USER_KEY: "user_iQVZK0yjOPgkdyw4uCOeX",
  },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/variables.scss";`,
  },
};

module.exports = nextConfig;
