import styles from './PointCard.module.css';


function PointCard(props){
    return (<div className={styles.container}>
        <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={process.env.PUBLIC_URL + props.imgSrc} alt='informational info'/>
            </div>
        </div>
        <div className={styles.textSection}>
            <h3 className={styles.headingText}>
            {props.heading}
            </h3>
            <p className={styles.text}>
            {props.text}
            </p>
        </div>
    </div>);
}

export default PointCard;