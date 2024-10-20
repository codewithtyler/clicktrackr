"use client";

import config from "@/config";

// Use this button if support is only available on specific routes.
// The config.js has onlyShowOnRoutes set to ["/"], so support options will only be available on the home page.
// This button will open the support email in the user's default email client.
const ButtonSupport = () => {
  const handleClick = () => {
    if (config.mailgun?.supportEmail) {
      // open default email client in new window with "need help with ${config.appName}" as subject
      window.open(
        `mailto:${config.mailgun.supportEmail}?subject=Need help with ${config.appName}`,
        "_blank"
      );
    }
  };

  return (
    <button
      className="btn btn-sm"
      onClick={handleClick}
      data-tooltip-id="tooltip"
      data-tooltip-content="Talk to support"
      title="Chat with support"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      Support
    </button>
  );
};

export default ButtonSupport;
