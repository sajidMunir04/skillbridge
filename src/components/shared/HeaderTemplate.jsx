import ExternalLinkButton from '../buttons/ExternalLinkButton';
import ExternalLinkButtonColored from '../buttons/ExternalLinkButtonColored';
import styles from './HeaderTemplate.module.css';

function HeaderTemplate()
{
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <a className={styles.navLink} href="#"><img src={process.env.PUBLIC_URL+'/images/Logo.png'}/></a>
            </div>
            <div className={styles.navSection}>
                <nav>
                    <a className={styles.navLink} href="/">Home</a>
                    <a className={styles.navLink} href="/courses">Courses</a>
                    <a className={styles.navLink} href="/aboutus">About Us</a>
                    <a className={styles.navLink} href="/pricing">Pricing</a>
                    <a className={styles.navLink} href="/contact">Contact Us</a>
                </nav>
            </div>
            <div className={styles.accountInteractionSection}>
                <ExternalLinkButton buttonText="Sign Up"/>
                <ExternalLinkButtonColored buttonText="Login"/>
            </div>
            <div className={styles.navbarButton}>
                <img src={process.env.PUBLIC_URL+'/images/Vector (Stroke2).png'}/>
            </div>
        </div>
    );
}


export default HeaderTemplate;