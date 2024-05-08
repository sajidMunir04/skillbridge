import DetailDescription from "./DetailDescription";
import DetailHeading from "./DetailHeading";
import styles from './BenefitDetail.module.css';
import { motion } from "framer-motion";

function BenefitDetail(props)
{
    return (<motion.div className={styles.container} initial={{ scale : 0}} whileInView={{scale: 1}}>
        <div className={styles.countHeading}>
            <h2 className={styles.countText}>{props.indexValue}</h2>
        </div>
        <div className={styles.content}>
            <DetailHeading heading={props.heading}/>
            <DetailDescription description={props.description}/>
        </div>
        <div className={styles.externalLink}>
            <a href={props.detailLink}><img className={styles.externalLinkImage} alt='informational' src={process.env.PUBLIC_URL + '/images/course-detail-images/curvedArrow.svg'}/></a>
        </div>
    </motion.div>);
}

export default BenefitDetail;