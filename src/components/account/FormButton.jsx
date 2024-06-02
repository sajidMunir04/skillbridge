import styles from "./FormButton.module.css";

function FormButton(props) {
    return (<button type='submit' className={styles.button}>
        {props.buttonText}
    </button>);
}

export default FormButton;