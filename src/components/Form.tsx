"use client";
import { useAppStore } from "@/store/useAppStore";
import styles from "./form.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const Form: React.FC = ({}) => {
  const {
    toggleForgotPwdModal,
    isLoginPage,
    toggleLoginPage,
    setUser,
    toggleErrorNotification,
    toggleSuccessNotification,
    user,
  } = useAppStore((state) => ({
    toggleForgotPwdModal: state.toggleForgotPwdModal,
    isLoginPage: state.isLoginPage,
    toggleLoginPage: state.toggleLoginPage,
    setUser: state.setUser,
    toggleErrorNotification: state.toggleErrorNotification,
    toggleSuccessNotification: state.toggleSuccessNotification,
    user: state.user,
  }));
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const BtnRef = React.useRef<HTMLButtonElement>(null);

  const router = useRouter();

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

    if (emailRef.current && passwordRef.current) {
      const response = await fetch("/api/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      const data = await response.json();

      if (data.secureUserData) {
        toggleSuccessNotification(true, "Success! Redirecting...");
        setUser(data.secureUserData);

        if (data.secureUserData.emailVerified) {
          return router.push("/interactive-viewer");
        } else {
          const response = await fetch("/api/resendVerificationEmail", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: user }),
          });
          console.log(response.json());
          return router.push("/verify");
        }
      }

      const errormessage = data.error.code;
      toggleErrorNotification(true, errormessage);
      setTimeout(() => {
        toggleErrorNotification(false);
      }, 5000);
      toggleBtnLoading("off");
    }
  };

  const handleSignupSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const response = await fetch("/api/signup", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      const data = await response.json();

      if (data.secureUserData) {
        toggleSuccessNotification(true, "Success! Redirecting...");
        setUser(data.secureUserData);
        return router.push("/verify");
      }
      const errormessage = data.error.message;
      toggleErrorNotification(true, errormessage);
      setTimeout(() => {
        toggleErrorNotification(false);
      }, 5000);
      toggleBtnLoading("off");
    }
  };

  function toggleBtnLoading(option: string) {
    if (
      BtnRef.current &&
      emailRef.current?.validity.valid &&
      passwordRef.current?.validity.valid
    ) {
      if (option === "on") {
        BtnRef.current.classList.add(`${styles.button__loading}`);
      }
      if (option === "off") {
        BtnRef.current.classList.remove(`${styles.button__loading}`);
      }
    }
  }
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
        autoComplete="email"
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
          toggleBtnLoading("on");
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
