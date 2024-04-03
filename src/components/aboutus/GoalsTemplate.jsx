import PointCard from "./PointCard";
import SectionHeading from "./SectionHeading";
import styles from './GoalsTemplate.module.css';

function GoalsTemplate()
{
    return(<div className={styles.container}>
        <div className={styles.sectionHeading}>
            <SectionHeading/>
        </div>
        <div className={styles.content}>
            <PointCard/>
            <PointCard/>
            <PointCard/>
            <PointCard/>
        </div>
    </div>);
}

export default GoalsTemplate;