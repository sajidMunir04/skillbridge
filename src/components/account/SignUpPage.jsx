import styles from "./LoginPage.module.css";
import SignUpForm from "./SignupForm";

export default function SignUpPage() {
    return (<div className={styles.container}>
        <SignUpForm/>
    </div>);
}