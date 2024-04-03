import styles from './PointCard.module.css';


function PointCard(){
    return (<div className={styles.container}>
        <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={process.env.PUBLIC_URL + '/images/course-detail-images/Objects & Tools.png'}/>
            </div>
        </div>
        <div className={styles.textSection}>
            <h3 className={styles.headingText}>
            Trusted by Thousands
            </h3>
            <p className={styles.text}>
            We have successfully served thousands of students, helping them 
            unlock their potential and achieve their career goals.
            </p>
        </div>
    </div>);
}

export default PointCard;