import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    (toast) => {
      const newToast = { ...toast, id: crypto.randomUUID() };
      const nextToasts = [...toasts, newToast];
      setToasts(nextToasts);
    },
    [toasts]
  );

  const handleDismissToast = React.useCallback(
    (idToRemove) => {
      const nextToasts = toasts.filter((t) => t.id !== idToRemove);
      setToasts(nextToasts);
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, handleDismissToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
