import { useState } from 'react';
import ExternalLinkButton from '../buttons/ExternalLinkButton';
import ExternalLinkButtonColored from '../buttons/ExternalLinkButtonColored';
import styles from './HeaderTemplate.module.css';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

function HeaderTemplate()
{
    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
      })

    const [barStatus,setBarStatus] = useState(true);

    function navBarToggle() {
        setBarStatus(!barStatus);
    }
    const combinedClassNames = classNames({
        [styles.container]: true,
        [styles.enlargedColumn]: isMobile && barStatus,
      });
    return (
        <div className={combinedClassNames}>
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
                <ExternalLinkButton buttonText="Sign Up"/>
                <ExternalLinkButtonColored buttonText="Login"/>
            </div>
            <div className={styles.navbarButton}>
                <img alt='informational' onClick={navBarToggle} src={process.env.PUBLIC_URL+'/images/common/menuBtn.svg'}/>
            </div>
        </div>
    );
}


export default HeaderTemplate;