import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "ClickTrackr",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "ClickTrackr is an intuitive tool for tracking, managing, and optimizing affiliate links to boost your revenue. Enhance your affiliate marketing efficiency with robust analytics and seamless integration.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "clicktrackr.io",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Used to determine what text to say i.e. /month vs /year vs USD - options are 'subscription' or 'payment'
    mode: 'subscription', 
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        isFeatured: false,
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Basic",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Essential features you need to get started",
        // The price you want to display, the one user will be charged on Stripe.
        price: 19,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 39,
        // The price you want to display for your annual pricing. If you want to charge a one time fee then leave this empty
        annualPrice: 199,
        // If you have an anhor price for the annual pricing, put it here. Otherwise, leave it empty
        annualPriceAnchor: 399, 
        features: [
          { name: "Up to 100 affiliate links" },
          { name: "Link Analytics & Reporting" },
          { name: "Single User Access" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Pro",
        description: "Perfect for owners of small & medium businesses",
        price: 39,
        priceAnchor: 59,
        annualPrice: 399,
        annualPriceAnchor: 599,
        features: [
          { name: "Everything in Essentials Plan" },
          { name: "Up to 500 affiliate links" },
          { name: "Up to 3 user accounts" },
          { name: "Single custom domain" },
          { name: "Email support" },
          // { name: "Custom Domains for Link Shortening" },
          // { name: "Integration with Major Affiliate Networks" },
        ],
      },
      {
        isFeatured: false,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1M5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Executive",
        description: "Advanced features for large teams and businesses",
        price: 69,
        priceAnchor: 89,
        annualPrice: 699,
        annualPriceAnchor: 899,
        features: [
          { name: "Everything in Pro Plan" },
          { name: "Unlimited affiliate links" },
          { name: "Unlimited user accounts" },
          { name: "Advanced reporting & analytics" },
          { name: "Single custom domain for link shortening"},
          { name: "Built-in affiliate program for your business" },
          { name: "Unlimited custom domains for affiliate tracking" },
          { name: "Priority support" }
        ],
      }
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marc@mg.shipfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["light"]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
