import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscapeKeyDown(e) {
      if (e.key === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleEscapeKeyDown);

    return () => window.removeEventListener("keydown", handleEscapeKeyDown);
  }, [callback]);
}
