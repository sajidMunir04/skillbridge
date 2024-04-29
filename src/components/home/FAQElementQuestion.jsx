import { useState } from "react";
import styles from "./FAQElementQuestion.module.css";


function FAQElementQuestion(props)
{
    const [answerOpen,toggleAnswerOption] = useState(false);

    function onAnswerOpenClicked()
    {
        toggleAnswerOption(true);
    }

    function onAnswerCloseClicked()
    {
        toggleAnswerOption(false);
    }

    return (<div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.questionContainer}>
                <p>{props.questionText}</p>
            </div>
            <div className={styles.controlButtons}>
                <img onClick={onAnswerOpenClicked} alt='informational' className={styles.answerOpenButton} src={process.env.PUBLIC_URL + 'Images/Button(3).png'}/>
                {answerOpen && <img onClick={onAnswerCloseClicked} alt='informational' className={styles.answerCloseButton} src={process.env.PUBLIC_URL + 'Images/Button(2).png'}/>}
            </div>
        </div>
        {answerOpen && <div className={styles.answerContainer}>
            <p>{props.answerText}</p>
            <div className={styles.externalLink}>
                <a className={styles.link} href="/home">{props.linkText}</a>
                <div className={styles.arrowContainer}>
                    <p>&#8594;</p>
                </div>
            </div>
        </div>}
    </div>);
}

export default FAQElementQuestion;