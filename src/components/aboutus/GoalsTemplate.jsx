import PointCard from "./PointCard";
import SectionHeading from "./SectionHeading";
import styles from './GoalsTemplate.module.css';

function GoalsTemplate()
{
    return(<div className={styles.container}>
        <div className={styles.sectionHeading}>
            <SectionHeading heading="Our Goals" text='At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.' textTwo='Through our carefully crafted courses, we aim to'/>
        </div>
        <div className={styles.content}>
            <PointCard imgSrc="/images/aboutus/Objects & Tools(3).png" heading="Provide Practical Skills" text="We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."/>
            <PointCard imgSrc="/images/aboutus/book.closed.fill.png" heading="Foster Creative Problem-Solving" text="We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."/>
            <PointCard imgSrc="/images/aboutus/Objects & Tools(4).png" heading="Promote Collaboration and Community" text="We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."/>
            <PointCard imgSrc="/images/aboutus/Objects & Tools(5).png" heading="Stay Ahead of the Curve" text="The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."/>
        </div>
    </div>);
}

export default GoalsTemplate;