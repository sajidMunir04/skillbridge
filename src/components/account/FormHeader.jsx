import React from "react";
import styles from "./FormHeader.module.css";

function FormHeader(props) {
    return (<div className={styles.container}>
        <h3 className={styles.headingText}>{props.heading}</h3>
        <p className={styles.descriptionText}>{props.description}</p>
    </div>);
}

export default FormHeader;