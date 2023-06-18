import React from "react";
import "./loading.module.scss";
import styles from "./ForgotPasswordForm.module.scss";
import { useAppStore } from "@/store/useAppStore";
type ForgotPasswordFormTypes = {};

export const ForgotPasswordForm: React.FC<ForgotPasswordFormTypes> = ({}) => {
  const { toggleForgotPwdModal, toggleLoginPage } = useAppStore((state) => ({
    toggleForgotPwdModal: state.toggleForgotPwdModal,
    toggleLoginPage: state.toggleLoginPage,
  }));
  const forgotEmailRef = React.useRef<HTMLInputElement>(null);
  const BtnRef = React.useRef<HTMLButtonElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className={styles.forgotPasswordForm}>
      <p
        className={styles.returnToLoginTextLink}
        onClick={() => {
          toggleForgotPwdModal(false);
        }}
      >
        Remember your Password?
      </p>
      <p className={styles.infoText}>
        Fill in your email below to request a new password. An email will be
        <br />
        sent to the address below containing a link to verify your email address
      </p>
      <div>
        <input
          ref={forgotEmailRef}
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className={styles.button}
          ref={BtnRef}
          type="submit"
          onClick={() => {
            //Check validation
            //Attach loading styles
            if (forgotEmailRef.current?.validity.valid && BtnRef.current) {
              BtnRef.current.className =
                BtnRef.current.className + " " + styles.button__loading;
            }

            //do some backend check to authenticate
            //if failed, show failure UI, ErrorNotification and Remove loading styles
            //Remove after sometime
          }}
        >
          <span className={styles.button__text}>Reset Password</span>
        </button>
      </div>

      <p>
        <a
          className={styles.registerAccountTextLink}
          onClick={() => {
            toggleForgotPwdModal(false);
            toggleLoginPage(false);
          }}
        >
          Don&apos;t have an account?
        </a>
      </p>
    </form>
  );
};
