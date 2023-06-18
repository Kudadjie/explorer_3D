import React from "react";
import "./loading.module.scss";
import "./ForgotPasswordForm.scss";
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
    <form onSubmit={handleSubmit} className="forgotPasswordForm">
      <p
        className="returnToLoginTextLink"
        onClick={() => {
          toggleForgotPwdModal(false);
        }}
      >
        Remember your Password?
      </p>
      <p className="infoText">
        Fill in your email below to request a new password. An email will be
        <br />
        sent to the address below containing a link to verify your email address
      </p>
      <div>
        <input
          ref={forgotEmailRef}
          className="input"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="button resetBtn"
          ref={BtnRef}
          type="submit"
          onClick={() => {
            //Check validation
            //Attach loading styles
            console.log(forgotEmailRef.current?.validity);
            if (forgotEmailRef.current?.validity.valid && BtnRef.current) {
              BtnRef.current.className =
                BtnRef.current.className + " button--loading";
            }

            //do some backend check to authenticate
            //if failed, show failure UI, ErrorNotification and Remove loading styles
            //Remove after sometime
          }}
        >
          <span className="button__text">Reset Password</span>
        </button>
      </div>

      <p>
        <a
          className="registerAccountTextLink"
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
