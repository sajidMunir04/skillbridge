import DetailDescription from "./DetailDescription";
import DetailHeading from "./DetailHeading";
import styles from "./CourseDetail.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

function CourseDetail(props)
{

    const [isAnimated,setAnimatedState] = useState(false);

    return (<motion.div className={styles.container}>
        <div className={styles.graphicSection}>
            <img className={styles.graphicSectionImage} src={process.env.PUBLIC_URL + props.imageLink} alt='informational'/>
        </div>
        <div className={styles.textSection}>
            <div className={styles.subTextSection}>
                <div className={styles.subTextLeftContainer}>
                    <p className={styles.leftText}>{props.courseDuration}</p>
                    <p className={styles.leftText}>{props.courseSkillLevel}</p>
                </div>
                <div className={styles.subTextRightContainer}>
                    <p className={styles.rightText}>By {props.courseInstructor}</p>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <DetailHeading heading={props.heading}/>
                <DetailDescription description={props.description}/>
            </div>
        </div>
        <div className={styles.externalLink}>
            <a className={styles.link} href="/home">Get It Now</a>
        </div>
    </motion.div>);
}

export default CourseDetail;