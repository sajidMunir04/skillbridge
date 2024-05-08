import { useState } from 'react';
import styles from './VideoIntroduction.module.css';
import classNames from 'classnames';
import { motion } from "framer-motion"

function VideoIntroduction()
{
    const [isHovering,setHoverState] = useState(false);

    const combinedClassNames = classNames({
        [styles.videoplayButton]: true,
        [styles.enlargedColumn]: isHovering,
      });
    return (
        <motion.div className={styles.container} initial={{rotateY: 90}} whileInView={{rotateY: 0}}>
            <div className={styles.videoContainer}>
                <img className={styles.videoImg}  src={process.env.PUBLIC_URL+'/images/Container(2).png'} alt='informational'/>
            </div>
            <div className={styles.videoButtons} onMouseEnter={() => {setHoverState(true)}} 
            onMouseLeave={() => {setHoverState(false)}}>
                <img className={combinedClassNames} src={process.env.PUBLIC_URL+'/images/Button.png'} alt='informational'/>
            </div>
        </motion.div>
    );
}

export default VideoIntroduction;