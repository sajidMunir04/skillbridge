import React from "react";
import FormHeader from "./FormHeader";
import FormInputField from "./FormInputField";
import FormButton from "./FormButton";
import styles from "./LoginForm.module.css";


function LoginForm() {
    return (<form className={styles.container}>
        <FormHeader heading={"Login"} description={"Welcome back! Please log in to access your account."}/>
        <FormInputField label={"Email"} inputType={"text"} placeholder={"Enter your Email"}/>
        <FormInputField label={"Password"} inputType={"text"} placeholder={"Enter your Password"}/>
        <div className={styles.forgotLinkContainer}>
            <a className={styles.link} href="/login">Forgot Password?</a>
        </div>
        <label className={styles.checkBoxContainer}>
            <input className={styles.checkBox} type='checkbox'/>Remember Me
        </label>
        <FormButton buttonText="Login"/>
    </form>);
}

export default LoginForm;