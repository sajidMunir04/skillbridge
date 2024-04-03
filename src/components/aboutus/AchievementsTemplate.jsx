import SectionHeading from "./SectionHeading";
import styles from "./AchievementsTemplate.module.css";
import PointCard from "./PointCard";

function AchievementsTemplate()
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

export default AchievementsTemplate;