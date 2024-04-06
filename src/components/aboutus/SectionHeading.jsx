import styles from './SectionHeading.module.css';


function SectionHeading(props)
{
    return(<div className={styles.container}>
        <h2 className={styles.heading}>{props.heading}</h2>
        <p className={styles.description}>{props.text}</p>
        <p className={styles.description}>{props.textTwo}</p>
    </div>);
}

export default SectionHeading;