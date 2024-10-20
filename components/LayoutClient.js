"use client";

import NextTopLoader from "nextjs-toploader";
import config from "@/config";

const ClientLayout = ({ children }) => {
  return (
    <>
      {/* Show a progress bar at the top when navigating between pages */}
      <NextTopLoader color={config.colors.main} showSpinner={false} />

      {/* Content inside app/page.js files */}
      {children}
    </>
  );
};

export default ClientLayout;
