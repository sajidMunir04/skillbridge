import { useState } from 'react';
import ExternalLinkButton from '../buttons/ExternalLinkButton';
import styles from './HeaderTemplate.module.css';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { motion } from "framer-motion";
import ExternalLinkButtonColored from '../buttons/ExternalLinkButtonColored';

function HeaderTemplate()
{
    const isMobile = useMediaQuery({
        query: '(max-width: 900px)'
      })

    const [barStatus,setBarStatus] = useState(false);

    function navBarToggle() {
        setBarStatus(!barStatus);
    }
    const combinedClassNames = classNames({
        [styles.container]: true,
        [styles.enlargedColumn]: barStatus,
      });
    
    return (
        <motion.div className={combinedClassNames} initial={{x: 100}} animate={{ x : 0}}>
            <div className={styles.logoContainer}>
                <a className={styles.navLink} href="/home"><img alt='informational' src={process.env.PUBLIC_URL+'/images/Logo.png'}/></a>
            </div>
            {(!isMobile || barStatus) && <div className={styles.navSection}>
                <nav>
                    <a className={styles.navLink} href="/">Home</a>
                    <a className={styles.navLink} href="/courses">Courses</a>
                    <a className={styles.navLink} href="/aboutus">About Us</a>
                    <a className={styles.navLink} href="/pricing">Pricing</a>
                    <a className={styles.navLink} href="/contact">Contact Us</a>
                </nav>
            </div>}
            <div className={styles.accountInteractionSection}>
                <ExternalLinkButton buttonText="Sign Up" link="/signup"/>
                <ExternalLinkButtonColored buttonText="Login" link="/login"/>
            </div>
            <div className={styles.navbarButton}>
                <img alt='informational' onClick={navBarToggle} src={process.env.PUBLIC_URL+'/images/common/menuBtn.svg'}/>
            </div>
        </motion.div>
    );
}


export default HeaderTemplate;