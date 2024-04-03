import styles from "./PricingDetail.module.css";

function PricingDetail(props)
{
    return (<div className={styles.container}>
        <div className={styles.planCategory}>
            <p>{props.planCategory}</p>
        </div>
        <div className={styles.planPrice}>
            <p><span className={styles.priceHighlighted}>{props.planPrice}</span>/{props.timeSpan}</p>
        </div>
        <div className={styles.detailsContainer}>  
            <p className={styles.featureHeadingText}>Available Features</p>
            <ul>{props.featuresList.map(function(item,index) {
                return <li className={styles.features} key={item}>{item}</li>
            })}
            </ul>
        </div>
        <div className={styles.externalLink}>
            <a className={styles.link} href="#">Get Started</a>
        </div>
    </div>);
}

export default PricingDetail;