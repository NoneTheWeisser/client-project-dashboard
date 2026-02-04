// DemoModeWrapper.jsx
import React, { useEffect } from "react";
import useStore from "../../zustand/store";
import "./DemoModeWrapper.css";

export default function DemoModeWrapper({ children }) {
  const isDemo = useStore((state) => state.isDemo);

  useEffect(() => {
    console.log("DemoModeWrapper mounted, isDemo =", isDemo);
  }, [isDemo]);

  return (
    <div className={isDemo ? "demo-mode" : ""}>
      {isDemo && (
        <div className="demo-banner">
          You are in <strong>Demo Mode</strong>. Feel free to edit and submit. Nothing here is permanent.
        </div>
      )}
      {children}
    </div>
  );
}
