const config = {
  // REQUIRED
  appName: "ClickTrackr",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "ClickTrackr is an intuitive tool for tracking, managing, and optimizing affiliate links to boost your revenue. Enhance your affiliate marketing efficiency with robust analytics and seamless integration.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "tryclicktrackr.com",
  stripe: {
    // Used to determine what text to say i.e. /month vs /year vs USD
    mode: 'subscription',
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        isFeatured: false,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        name: "Essentials",
        description: "Designed for solo entrepreneurs",
        price: 19,
        priceAnchor: 39,
        annualPrice: 190,
        annualPriceAnchor: 228,
        features: [
          { name: "Up to 100 affiliate links" },
          { name: "Link Analytics & Reporting" },
          { name: "Single User Access" },
          { name: "Email Support" },
        ],
      },
      {
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_457",
        name: "Professional",
        description: "Tailored for small teams",
        price: 39,
        priceAnchor: 59,
        annualPrice: 390,
        annualPriceAnchor: 468,
        features: [
          { name: "Up to 300 affiliate links" },
          { name: "Everything in Essentials Plan" },
          { name: "Up to 3 user accounts" },
          { name: "Priority Email Support" },
        ],
      },
      {
        isFeatured: false,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_458",
        name: "Enterprise",
        description: "Designed for large teams",
        price: 69,
        priceAnchor: 89,
        annualPrice: 690,
        annualPriceAnchor: 828,
        features: [
          { name: "Unlimited affiliate links" },
          { name: "Everything in Professional Plan" },
          { name: "Unlimited user accounts" },
        ],
      },
    ],
  },
  aws: {
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    subdomain: "mg",
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    supportEmail: "marc@mg.shipfa.st",
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    theme: "dark",  // You can keep this or customize it in your Tailwind setup
    main: "#f37055",  // Replace with your custom primary color
  },
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
};

export default config;