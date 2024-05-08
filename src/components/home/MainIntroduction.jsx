import ExternalLinkButton from '../buttons/ExternalLinkButton';
import ExternalLinkButtonColored from '../buttons/ExternalLinkButtonColored';
import styles from './MainIntroduction.module.css';
import { motion } from "framer-motion"

function MainIntroduction()
{
    return (<motion.div className={styles.container} initial={{ y: 300}} animate={{y: 0}}>  
        <div className={styles.containerMain}>
            <div className={styles.abstractImageContainer}>
            </div>
            <div className={styles.mainContentContainer}>
                <img className={styles.mainImage} src={process.env.PUBLIC_URL + '/images/Icon Container.png'} alt='informational'/>
                <h1 className={styles.mainText}><span className={styles.orangeColoredText}>Unlock</span> Your Creative Potential</h1>
            </div>
        </div>
        <h2 className={styles.subHeading}>with Online Design and Development Courses.</h2>
        <p className={styles.paragraph}>Learn from Industry Experts and Enhance Your Skills.</p>
        <div className={styles.linksContainer}>
            <ExternalLinkButtonColored buttonText="Explore Courses"/>
            <ExternalLinkButton bg="white" buttonText="View Pricing"/>
        </div>
    </motion.div>);
}

export default MainIntroduction;