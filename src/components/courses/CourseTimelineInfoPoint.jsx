import styles from './CourseTimelineInfoPoint.module.css';

function CourseTimelineInfoPoint(props)
{
    return(<div className={styles.container}>
        <h2 className={styles.headingText}>{props.indexNumber}</h2>
        <div className={styles.textContainer}>
            <p className={styles.text}>{props.infoContent}</p>
        </div>       
    </div>);
}

export default CourseTimelineInfoPoint;