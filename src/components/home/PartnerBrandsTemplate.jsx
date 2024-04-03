import BrandDetail from "./BrandDetail";
import styles from './PartnerBrandsTemplate.module.css';

function PartnerBrandsTemplate()
{
    return(<div className={styles.container}>
        <div>
            <BrandDetail imageLink={'/images/Logo(1).png'}/>
        </div>
        <div>
            <BrandDetail imageLink={'/images/Logo(2).png'}/>
        </div>   
        <div>
            <BrandDetail imageLink={'/images/Logo(3).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(4).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(5).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(6).png'}/>
        </div>   
        <div className={styles.hideableItem}>
            <BrandDetail imageLink={'/images/Logo(7).png'}/>
        </div>   
    </div>);
}

export default PartnerBrandsTemplate;