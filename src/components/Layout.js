import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-[#333] px-14 xl:px-12 lg:px-12 md:px-8 sm:px-6 py-8 sm:py-9 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
