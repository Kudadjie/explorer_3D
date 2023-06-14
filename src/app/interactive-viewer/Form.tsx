import styles from "./styles.module.scss";
import React, { useState } from "react";
export default function Form() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

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
      {isLoginPage && <a className={styles.forgotPassword}>Forgot password?</a>}
      <br />
      <button
        className={styles.signInBtn}
        type="submit"
        style={!isLoginPage ? { marginTop: "15px" } : undefined}
      >
        {isLoginPage ? "Login" : "Sign Up"}
      </button>

      {isLoginPage ? (
        <p className={styles.pageInfo}>
          Don&apos;t have an account yet?{" "}
          <a
            onClick={() => {
              setIsLoginPage(false);
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
              setIsLoginPage(true);
            }}
          >
            Login
          </a>
        </p>
      )}
    </form>
  );
}
