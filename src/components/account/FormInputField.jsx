import React from "react";
import styles from "./FormInputField.module.css";

function FormInputField(props) {
    return (<label className={styles.label}>{props.label}
        <input className={styles.input} type={props.inputType} placeholder={props.placeholder}/>
    </label>);
}

export default FormInputField;