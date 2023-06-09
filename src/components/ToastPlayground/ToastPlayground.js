import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider/ToastProvider";
import ToastShelf from "../ToastShelf";
import { useEscapeKey } from "../../hooks/useEscapeKey/useEscapeKey";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const { addToast, handleDismissAllToasts, handleDismissToast, toasts } =
    React.useContext(ToastContext);
  useEscapeKey(handleDismissAllToasts);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);

  function resetForm() {
    setMessage("");
    setVariant(DEFAULT_VARIANT);
  }

  function handleSubmitToast(e) {
    e.preventDefault();
    addToast({ message, variant });
    resetForm();
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf handleDismissToast={handleDismissToast} toasts={toasts} />

      <form onSubmit={handleSubmitToast}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((opt) => {
                return (
                  <label htmlFor={`variant-${opt}`} key={opt}>
                    <input
                      checked={variant === opt}
                      id={`variant-${opt}`}
                      name="variant"
                      onChange={(e) => setVariant(e.target.value)}
                      type="radio"
                      value={opt}
                    />
                    {opt}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
