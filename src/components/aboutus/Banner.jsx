import DetailDescription from "../home/DetailDescription";
import ExternalLinkButtonColored from "../buttons/ExternalLinkButtonColored";
import styles from './Banner.module.css';

function Banner()
{
    return (<div className={styles.container}>
        <div className={styles.backgroundContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={process.env.PUBLIC_URL + '/images/aboutus/shape-17.png'} alt='an image'/>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.contentSection}>
                <h2 className={styles.heading}><span className={styles.orangeText}>Together</span>, let's shape the future of digital innovation</h2>
                <DetailDescription description="Join us on this exciting learning journey and unlock your potential in design and development."/>
            </div>
            <div className={styles.buttonSection}>
                <div className={styles.buttonContainer}>
                    <ExternalLinkButtonColored buttonText="Join Now"/>
                </div>
            </div>
        </div>
    </div>);
}

export default Banner;