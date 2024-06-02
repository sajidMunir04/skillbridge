import LoginForm from "./LoginForm";
import styles from "./LoginPage.module.css";


function LoginPage() {
    return (<div className={styles.container}>
        <LoginForm/>
    </div>);
}

export default LoginPage;