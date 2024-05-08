import styles from './SaleLinkTemplate.module.css';
import { motion } from "framer-motion"

function SaleLinkTemplate(props)
{
    return(<motion.div className={styles.container} initial={{x: -100}} animate={{ x: 0 }}>
        <a className={styles.saleLink} href="/home">{props.linkText}</a>
    </motion.div>);
}

export default SaleLinkTemplate;