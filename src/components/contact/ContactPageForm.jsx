import styles from './ContactPageForm.module.css';


function ContactPageForm()
{
    return(<div className={styles.container}>
        <form className={styles.formContainer}>
            <div className={styles.inputFieldsSection}>
                <div className={styles.inputFieldContainer}>
                    <label className={styles.inputLabel} htmlFor='firstName'>First Name</label>
                    <input className={styles.input} id='firstName' type='text' placeholder='Enter First Name'/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <label className={styles.inputLabel} htmlFor='lastName'>Last Name</label>
                    <input className={styles.input} id='lastName' type='text' placeholder='Enter Last Name'/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <label className={styles.inputLabel} htmlFor='emailAddress'>Email</label>
                    <input className={styles.input} id='emailAddress' type='email' placeholder='Enter your Email'/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <label className={styles.inputLabel} htmlFor='phoneNumber'>Phone</label>
                    <input className={styles.input} id='phoneNumber' type='phone' placeholder='Enter Phone Number'/>      
                </div>        
            </div>
            <div className={styles.subjectSection}>
                <label className={styles.inputLabel} htmlFor='infoSubject'>Subject</label>
                <input className={`${styles.subjectSectionInput} ${styles.input}`} id='infoSubject' type='text' placeholder='Enter your Subject'/> 
            </div>
            <div className={styles.messageSection}>
                <label className={styles.inputLabel} htmlFor='messageBox'>
                    Message
                </label>
                <textarea className={`${styles.input} ${styles.messageSectionInput}`} id='messageBox' placeholder='Enter your Message here...'></textarea>
            </div>
            <div className={styles.buttonSection}>
                <button className={styles.submitButton} type='submit'>Send Your Message</button>
            </div>
        </form>
        <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImageContainer}>
                    <img className={styles.contactInfoImage} src={process.env.PUBLIC_URL + '/images/contact/Icon(1).png'} alt='informational'/>
                </div>
                <div className={styles.contactInfoTextContainer}>
                    <p className={styles.contactInfoText}>support@skillbridge.com</p>
                </div>
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImageContainer}>
                    <img className={styles.contactInfoImage} src={process.env.PUBLIC_URL + '/images/contact/Icon(1).png'} alt='informational'/>
                </div>
                <div className={styles.contactInfoTextContainer}>
                    <p className={styles.contactInfoText}>support@skillbridge.com</p>
                </div>
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImageContainer}>
                    <img className={styles.contactInfoImage} src={process.env.PUBLIC_URL + '/images/contact/Icon(1).png'} alt='informational'/>
                </div>
                <div className={styles.contactInfoTextContainer}>
                    <p className={styles.contactInfoText}>support@skillbridge.com</p>
                </div>
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImageContainer}>
                    <img className={styles.contactInfoImage} src={process.env.PUBLIC_URL + '/images/contact/Icon(1).png'} alt='informational'/>
                </div>
                <div className={styles.contactInfoTextContainer}>
                    <p className={styles.contactInfoText}>support@skillbridge.com</p>
                </div>
            </div>
        </div>
    </div>);
}

export default ContactPageForm;