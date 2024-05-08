import TemplateDescription from "../TemplateDescription";
import TemplateHeading from "../TemplateHeading";
import styles from "./LayoutHeader.module.css";
import ExternalLinkButton from "../buttons/ExternalLinkButton";
import { motion } from "framer-motion"

function LayoutHeader(props)
{
    return(<motion.div initial={{ x : -200}} whileInView={{ x : 0}}>
            <TemplateHeading heading={props.heading}/>
            <div className={styles.containerDetails}>
                <TemplateDescription className={styles.textDetails} description={props.description}/>
            <div className={styles.externalLinkContainer}>
                <ExternalLinkButton buttonText={props.buttonText}/>
            </div>               
            </div>
            </motion.div>);
}

export default LayoutHeader;