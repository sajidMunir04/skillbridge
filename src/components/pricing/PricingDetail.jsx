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
            <ul className={styles.featuresList}>{props.featuresList.map(function(item,index) {
                return <li className={styles.features} key={item}>
                    <div className={styles.featuresCheckBox}><p className={styles.checkboxText}>{props.availableFeature === true ? '\u2713' : '\u00D7'}</p></div>
                    <div className={styles.featuresText}><p>{item}</p></div>
                </li>
            })}
            </ul>
        </div>
        <div className={styles.externalLink}>
            <a className={styles.link} href="#">Get Started</a>
        </div>
    </div>);
}

export default PricingDetail;