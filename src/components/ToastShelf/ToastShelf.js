import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleDismissToast, toasts }) {
  console.log({ toasts });
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast {...toast} handleDismissToast={handleDismissToast} />
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
