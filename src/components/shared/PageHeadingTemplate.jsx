import styles from './PageHeadingTemplate.module.css';
import TemplateDescription from '../TemplateDescription';
import TemplateHeading from '../TemplateHeading';
import { motion } from "framer-motion"


function PageHeadingTemplate(props)
{
    return (<motion.div className={styles.container} initial={{ x: -200}} whileInView={{ x : 0}}>
    <div className={styles.leftSub}>
        <TemplateHeading heading={props.heading}/>
    </div>    
    <div className={styles.rightSub}>
        <TemplateDescription className={styles.textDetails} description={props.description}/>
    </div>        
    </motion.div>);
}

export default PageHeadingTemplate;