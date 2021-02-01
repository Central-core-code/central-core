module.exports = {
  env: {
    SITE_RECAPTCHA_KEY: "6Lcf3jcaAAAAAOYouTXhA1rf-xU0MRhhaMJajIoP",
    EMAILJS_SERVICE_KEY: "service_4kr5zji",
    EMAILJS_TEMPLATE_KEY: "template_pm34hfl",
    EMAILJS_USER_KEY: "user_iQVZK0yjOPgkdyw4uCOeX",
  },
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "pl",
  },
  target: "serverless",
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/variables.scss";`,
  },
};
