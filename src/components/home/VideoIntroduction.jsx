import { useState } from 'react';
import styles from './VideoIntroduction.module.css';
import classNames from 'classnames';

function VideoIntroduction()
{
    const [isHovering,setHoverState] = useState(false);

    const combinedClassNames = classNames({
        [styles.videoplayButton]: true,
        [styles.enlargedColumn]: isHovering,
      });
    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <img className={styles.videoImg}  src={process.env.PUBLIC_URL+'/images/Container(2).png'} alt='informational'/>
            </div>
            <div className={styles.videoButtons} onMouseEnter={() => {setHoverState(true)}} 
            onMouseLeave={() => {setHoverState(false)}}>
                <img className={combinedClassNames} src={process.env.PUBLIC_URL+'/images/Button.png'} alt='informational'/>
            </div>
        </div>
    );
}

export default VideoIntroduction;