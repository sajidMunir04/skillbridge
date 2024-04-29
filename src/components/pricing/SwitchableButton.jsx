import { useState } from "react";
import  styles from "./SwitchableButton.module.css";


function SwitchableButton(props)
{
    const [index, setIndex] = useState(0);

    function toggleOne(){
        setIndex(0);
        props.firstOnClick();
    }

    function toggleTwo(){
        setIndex(1);
        props.secondOnClick();
    }

    return (<div className={styles.container}>
        <p className={`${styles.button} ${index === 0 ? styles.selectButton : styles.unSelectedButton}`} onClick={toggleOne} href="#">{props.a}</p>
        <p className={`${styles.button} ${index === 1 ? styles.selectButton : styles.unSelectedButton}`} onClick={toggleTwo} href="#">{props.b}</p>       
    </div>);
}

export default SwitchableButton;