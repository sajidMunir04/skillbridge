import styles from './TemplateHeading.module.css';

function TemplateHeading(props)
{
    return (< >
    <h2 className={styles.textMain}>{props.heading}</h2>
    </>);
}

export default TemplateHeading;