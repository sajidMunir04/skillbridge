import styles from './PageHeadingTemplate.module.css';
import TemplateDescription from '../TemplateDescription';
import TemplateHeading from '../TemplateHeading';


function PageHeadingTemplate(props)
{
    return (<div className={styles.container}>
    <div className={styles.leftSub}>
        <TemplateHeading heading={props.heading}/>
    </div>    
    <div className={styles.rightSub}>
        <TemplateDescription className={styles.textDetails} description={props.description}/>
    </div>        
    </div>);
}

export default PageHeadingTemplate;