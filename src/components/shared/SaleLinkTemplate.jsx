
import styles from './SaleLinkTemplate.module.css';

function SaleLinkTemplate(props)
{
    return(<div className={styles.container}>
        <a className={styles.saleLink} href="#">{props.linkText}</a>
    </div>);
}

export default SaleLinkTemplate;