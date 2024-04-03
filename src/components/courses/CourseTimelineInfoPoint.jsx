import styles from './CourseTimelineInfoPoint.module.css';

function CourseTimelineInfoPoint()
{
    return(<div className={styles.container}>
        <h2 className={styles.headingText}>01</h2>
        <div className={styles.textContainer}>
            <p className={styles.text}>Introduction to HTML</p>
        </div>       
    </div>);
}

export default CourseTimelineInfoPoint;