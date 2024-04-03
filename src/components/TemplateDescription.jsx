import styles from './TemplateDescription.module.css';

function TemplateDescription(props)
{
    return (<>
        <p className={styles.text}>{props.description}</p>
</>);
}

export default TemplateDescription;