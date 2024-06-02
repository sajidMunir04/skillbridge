import React from "react";
import FormHeader from "./FormHeader";
import FormInputField from "./FormInputField";
import FormButton from "./FormButton";
import styles from "./SignUpForm.module.css";


export default function SignupForm() {
    return (<form className={styles.container}>
        <FormHeader heading={"Sign Up"} description={"Welcome back! Please log in to access your account."}/>
        <FormInputField label={"Full Name"} inputType={"text"} placeholder={"Enter your Name"}/>
        <FormInputField label={"Email"} inputType={"text"} placeholder={"Enter your Email"}/>
        <FormInputField label={"Password"} inputType={"text"} placeholder={"Enter your Password"}/>
        <label className={styles.checkBoxContainer}>
        <input className={styles.checkBox} type='checkbox'/>I agree with <span className={styles.underLineText}>Terms of Use</span> and <span className={styles.underLineText}>Privacy Policy</span>
        </label>
        <FormButton buttonText="Sign Up"/>
        <div className={styles.forgotLinkContainer}>
            <p>Already have an account? </p><a className={styles.link} href="#"> Login Here</a>
        </div>
    </form>);
}