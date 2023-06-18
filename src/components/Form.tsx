import { useAppStore } from "@/store/useAppStore";
import styles from "./form.module.scss";
import React, { useState } from "react";

type formTypes = {};
export const Form: React.FC<formTypes> = ({}) => {
  const { toggleForgotPwdModal, isLoginPage, toggleLoginPage } = useAppStore(
    (state) => ({
      toggleForgotPwdModal: state.toggleForgotPwdModal,
      isLoginPage: state.isLoginPage,
      toggleLoginPage: state.toggleLoginPage,
    })
  );
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const BtnRef = React.useRef<HTMLButtonElement>(null);

  function togglePasswordReveal(value: boolean) {
    const type =
      passwordRef.current?.getAttribute("type") === "password"
        ? "text"
        : "password";
    passwordRef.current?.setAttribute("type", type);
    setShowPassword(value);
  }

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /*

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            }),
        })

        const result = await response.json()
        console.log(result)*/
  };

  const handleSignupSubmit = () => {};

  return (
    <form
      className={styles.form}
      onSubmit={isLoginPage ? handleLoginSubmit : handleSignupSubmit}
    >
      <label htmlFor="email" className={styles.emailLabel}>
        Email
      </label>
      <br />
      <input
        className={styles.emailInput}
        ref={emailRef}
        id="email"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
      />
      <br />
      <label htmlFor="password" className={styles.passwordLabel}>
        Password
      </label>
      <br />
      <div className={styles.passwordInputContainer}>
        <input
          className={styles.passwordInput}
          ref={passwordRef}
          id="password"
          type="password"
          name="password"
          required
          title="Password should be digits (0 to 9) or alphabets (a to z)."
          placeholder="Enter your password"
        />
        <div
          className={styles.showPasswordContainer}
          style={!isLoginPage ? { top: "59.5%" } : undefined}
        >
          {showPassword && (
            <i
              className="fa-regular fa-eye fa-lg"
              style={{ color: "#abadb0" }}
              onClick={() => {
                togglePasswordReveal(false);
              }}
            ></i>
          )}
          {!showPassword && (
            <i
              className="fa-regular fa-eye-slash fa-lg"
              style={{ color: "#abadb0" }}
              onClick={() => {
                togglePasswordReveal(true);
              }}
            ></i>
          )}
        </div>
      </div>
      {isLoginPage && (
        <a
          className={styles.forgotPassword}
          onClick={() => {
            toggleForgotPwdModal(true);
          }}
        >
          Forgot password?
        </a>
      )}
      <br />
      <button
        className={styles.button}
        ref={BtnRef}
        type="submit"
        style={!isLoginPage ? { marginTop: "15px" } : undefined}
        onClick={() => {
          //Check validation
          //Attach loading styles
          if (
            BtnRef.current &&
            emailRef.current?.validity.valid &&
            passwordRef.current?.validity.valid
          ) {
            BtnRef.current.className =
              BtnRef.current.className + " " + styles.button__loading;
          }

          //do some backend check to authenticate
          //if failed, show failure UI, ErrorNotification and Remove loading styles
          //Remove after sometime

          // setTimeout(() => {
          //   if (BtnRef.current) {
          //     BtnRef.current.className = BtnRef.current.className.replace(
          //       new RegExp("(?:^|\\s)loading(?!\\S)"),
          //       ""
          //     );
          //   }
          // }, 5000);
        }}
      >
        <span className={styles.button__text}>
          {isLoginPage ? "Login" : "Sign Up"}
        </span>
      </button>

      {isLoginPage ? (
        <p className={styles.pageInfo}>
          Don&apos;t have an account yet?{" "}
          <a
            onClick={() => {
              toggleLoginPage(false);
            }}
          >
            Sign up
          </a>
        </p>
      ) : (
        <p className={styles.pageInfo}>
          Already have an account?{" "}
          <a
            onClick={() => {
              toggleLoginPage(true);
            }}
          >
            Login
          </a>
        </p>
      )}
    </form>
  );
};
