import styles from './VideoIntroduction.module.css';

function VideoIntroduction()
{
    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <img className={styles.videoImg} src={process.env.PUBLIC_URL+'/images/Container(2).png'}/>
            </div>
            <div className={styles.videoButtons}>
                <img className={styles.videoplayButton} src={process.env.PUBLIC_URL+'/images/Button.png'}/>
            </div>
        </div>
    );
}

export default VideoIntroduction;