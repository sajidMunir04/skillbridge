import ExternalLinkButton from "../buttons/ExternalLinkButton";
import styles from "./CustomerTestimonial.module.css";


function CustomerTestimonial(props)
{
    return (<div className={styles.container}>
        <div className={styles.textContent}>
            <p>{props.reviewContent}</p>
        </div>
        <div className={styles.authorDetails}>
            <div className={styles.authorProfile}>
                <div className={styles.authorImageContainer}>
                    <img className={styles.authorImage} src={process.env.PUBLIC_URL+props.customerImage} alt='an image'/>
                </div>
                <p className={styles.authorName}>{props.customerName}</p>
            </div>
            <div className={styles.authorProfileLink}>
                <ExternalLinkButton buttonText="Read Full Story"/>
            </div>
        </div>
    </div>);
}

export default CustomerTestimonial;