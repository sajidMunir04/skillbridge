import SectionHeading from "./SectionHeading";
import styles from "./AchievementsTemplate.module.css";
import PointCard from "./PointCard";

function AchievementsTemplate()
{
    return(<div className={styles.container}>
        <div className={styles.sectionHeading}>
            <SectionHeading heading="Achievements" text="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"/>
        </div>
        <div className={styles.content}>
            <PointCard imgSrc="/images/aboutus/crown.fill.png" heading="Trusted by Thousands" text="We have successfully served thousands of students, helping 
            them unlock their potential and achieve their career goals."/>
            <PointCard imgSrc="/images/aboutus/Objects & Tools(1).png" heading="Award-Winning Courses" text="Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."/>
            <PointCard imgSrc="/images/aboutus/theatermasks.fill.png" heading="Positive Student Feedback" text="We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."/>
            <PointCard imgSrc="/images/aboutus/Objects & Tools(2).png" heading="Industry Partnerships" text="We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"/>
        </div>
    </div>);
}

export default AchievementsTemplate;