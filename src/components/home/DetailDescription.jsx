import styles from './DetailDescription.module.css';

function DetailDescription(props)
{
    return(<div>
        <p className={styles.text}>
        {props.description}
        </p>
    </div>);
}

export default DetailDescription;