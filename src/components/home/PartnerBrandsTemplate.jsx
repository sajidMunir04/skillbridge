import BrandDetail from "./BrandDetail";
import styles from './PartnerBrandsTemplate.module.css';
import { motion } from "framer-motion"

function PartnerBrandsTemplate()
{
    return(<motion.div className={styles.container} initial={{ scaleX: 0}} whileInView={{scaleX: 1}}>
        <div>
            <BrandDetail imageLink={'/images/Logo(1).png'}/>
        </div>
        <div>
            <BrandDetail imageLink={'/images/Logo(2).png'}/>
        </div>   
        <div>
            <BrandDetail imageLink={'/images/Logo(3).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(4).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(5).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(6).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(7).png'}/>
        </div>   
    </motion.div>);
}

export default PartnerBrandsTemplate;