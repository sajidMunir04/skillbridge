import ExternalLinkButton from "../buttons/ExternalLinkButton";
import styles from "./CustomerTestimonial.module.css";
import { motion } from "framer-motion";


function CustomerTestimonial(props)
{
    return (<motion.div className={styles.container} initial={{scaleY: 0}} whileInView={{scaleY: 1}}>
        <div className={styles.textContent}>
            <p>{props.reviewContent}</p>
        </div>
        <div className={styles.authorDetails}>
            <div className={styles.authorProfile}>
                <div className={styles.authorImageContainer}>
                    <img className={styles.authorImage} src={process.env.PUBLIC_URL+props.customerImage} alt='informational'/>
                </div>
                <p className={styles.authorName}>{props.customerName}</p>
            </div>
            <div className={styles.authorProfileLink}>
                <ExternalLinkButton buttonText="Read Full Story"/>
            </div>
        </div>
    </motion.div>);
}

export default CustomerTestimonial;