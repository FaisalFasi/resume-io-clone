import React from "react";

const BGWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-center p-8">
      {children}
    </div>
  );
};

export default BGWrapper;
