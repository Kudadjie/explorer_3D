import styles from "./styles.module.scss"
import React, {useRef, useState} from "react";
import {boolean} from "zod";
export default function Form(){

    const [showPassword, setShowPassword] = useState(false)
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const usernameRef = React.useRef<HTMLInputElement>(null)

    function togglePasswordReveal(value: boolean){
        const type = passwordRef.current?.getAttribute("type") === "password" ? "text" : "password";
        passwordRef.current?.setAttribute("type", type);
        setShowPassword(value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
/*

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usernameRef.current?.value,
                password: passwordRef.current?.value,
            }),
        })

        const result = await response.json()
        console.log(result)*/
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username" className={styles.usernameLabel}>Username</label>
        <br/>
        <input className={styles.usernameInput} ref={usernameRef} id="username" type="text" name="username" required minLength={10}  maxLength={10} placeholder="Enter your username" />
        <br/>
        <label htmlFor="password" className={styles.passwordLabel}>Password</label>
        <br/>
        <div className={styles.passwordInputContainer}>
            <input className={styles.passwordInput} ref={passwordRef} id="password" type="password" name="password" required minLength={10} maxLength={10}  title="Password should be digits (0 to 9) or alphabets (a to z)." placeholder="Enter your password"/>
            <div className={styles.showPasswordContainer}>
                {showPassword && <i  className="fa-regular fa-eye fa-lg" style={{color: "#abadb0"}} onClick={()=>{
                    togglePasswordReveal(false)

                }}></i>}
                {!showPassword && <i className="fa-regular fa-eye-slash fa-lg" style={{color: "#abadb0"}} onClick={()=>{

                    togglePasswordReveal(true)
                }}></i>}
            </div>
        </div>
        <br/>
        <button className={styles.signInBtn} type="submit">Enter</button>
    </form>
}