
import styles from "./FooterTemplate.module.css";

function FooterSection(){
    return(<div className={styles.container}>
        <div className={styles.brandInfoSection}>
            <div className={styles.brandLogo}>
            <img alt='an image' src={process.env.PUBLIC_URL+'/images/Logo.png'}/>
            </div>
           <div className={styles.contactInfo}>
           <div className={styles.contactInfoImage}>
            <img alt='an image' src={process.env.PUBLIC_URL+'/images/Subtract.png'}/>
           </div>
            <p  className={styles.contactInfoText}>hello@skillbridge.com</p>
           </div>
           <div className={styles.contactInfo}>
           <div className={styles.contactInfoImage}>
            <img alt='an image' src={process.env.PUBLIC_URL+'/images/Vector (Stroke).png'}/>
           </div>    
            <p className={styles.contactInfoText}>+91 91813 23 2309</p>
           </div>
           <div className={styles.contactInfo}>
           <div className={styles.contactInfoImage}>
            <img alt='an image' src={process.env.PUBLIC_URL+'/images/Subtract(1).png'}/>
           </div>
            <p className={styles.contactInfoText}>Somewhere in the World</p>
           </div>
        </div>
        <div className={styles.linksContainer}>
        <div className={styles.homeLinksSection}>
            <p className={styles.sectionHeading}>Home</p>
            <a className={styles.link} href="#">Benefits</a>
            <a className={styles.link} href="#">Our Courses</a>
            <a className={styles.link} href="#">Our Testimonials</a>
            <a className={styles.link} href="#">Our FAQ</a>
        </div>
        <div className={styles.aboutusLinkSection}>
            <p className={styles.sectionHeading}>About Us</p>
            <a className={styles.link} href="#">Company</a>
            <a className={styles.link} href="#">Achievements</a>
            <a className={styles.link} href="#">Our Goals</a>
        </div>
        </div>
        <div className={styles.socialProfilesSection}>
            <p className={styles.sectionHeading}>Social Profiles</p>
            <div className={styles.socialLinksContainer}>
            <a href="#"><img alt='an image' src={process.env.PUBLIC_URL + '/images/Button(4).png'}/></a>
            <a href="#"><img alt='an image' src={process.env.PUBLIC_URL + '/images/Button(6).png'}/></a>
            <a href="#"><img alt='an image' src={process.env.PUBLIC_URL + '/images/Button(7).png'}/></a>
            </div>
        </div>
    </div>);
}

export default FooterSection;