import styles from './CourseSpecificsInfoCard.module.css';


function CourseSpecificsInfoCard(props)
{
    return(<div className={styles.container}>
        <div className={styles.subTextLeftContainer}>
            <p className={styles.leftText}>{props.courseDuration}</p>
            <p className={styles.leftText}>{props.courseSkillLevel}</p>
        </div>
        <div className={styles.subTextRightContainer}>
            <p className={styles.rightText}>By {props.courseInstructor}</p>
        </div>
    </div>);
}

export default CourseSpecificsInfoCard;