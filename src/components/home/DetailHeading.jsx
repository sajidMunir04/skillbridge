import styles from './DetailHeading.module.css';

function DetailHeading(props)
{
    return (<div>
            <h2 className={styles.textMain}>
        {props.heading}
    </h2>
    </div>);
}

export default DetailHeading;