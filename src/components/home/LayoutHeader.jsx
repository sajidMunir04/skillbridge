import TemplateDescription from "../TemplateDescription";
import TemplateHeading from "../TemplateHeading";
import styles from "./LayoutHeader.module.css";
import ExternalLinkButton from "../buttons/ExternalLinkButton";

function LayoutHeader(props)
{
    return(<>
            <TemplateHeading heading={props.heading}/>
            <div className={styles.containerDetails}>
                <TemplateDescription className={styles.textDetails} description={props.description}/>
            <div className={styles.externalLinkContainer}>
                <ExternalLinkButton buttonText={props.buttonText}/>
            </div>               
            </div>
    </>);
}

export default LayoutHeader;