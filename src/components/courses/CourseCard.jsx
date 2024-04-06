import DetailHeading from "../home/DetailHeading";
import LayoutHeader from "../home/LayoutHeader";
import styles from './CourseCard.module.css';
import TemplateHeading from "../TemplateHeading";
import CourseSpecificsInfoCard from "./CourseSpecificsInfoCard";
import CourseTimelineInfoPoint from "./CourseTimelineInfoPoint";

function CourseCard(props)
{
    return(<div className={styles.container}>
        <div>
            <DetailHeading heading="Web Design Fundamentals"/>
            <LayoutHeader  description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. 
            Develop the skills to create visually appealing and user-friendly websites." buttonText="View More"/>
        </div>
        <div className={styles.imagesContainer}>
            <div className={styles.imageParent}>
                <img className={styles.image} src={process.env.PUBLIC_URL + '/images/course-detail-images/1.png'}/>
            </div>
            <div className={styles.imageParent}>
                <img className={styles.image} src={process.env.PUBLIC_URL + '/images/course-detail-images/1.png'}/>
            </div>
            <div className={styles.imageParent}>
                <img className={styles.image} src={process.env.PUBLIC_URL + '/images/course-detail-images/1.png'}/>
            </div>
        </div>
        <div>
            <CourseSpecificsInfoCard courseDuration="6 Weeks" courseSkillLevel="Beginner" courseInstructor="John Smith"/>
        </div>
        <div className={styles.curriculumContainer}>
            <div>
            <DetailHeading heading="Curriculum"/>
            </div>
            <div className={styles.infoPointsContainer}>  
                <div className={styles.infoPoint}>
                    <CourseTimelineInfoPoint indexNumber="01" infoContent="Introduction to HTML"/>
                </div> 
                <div className={styles.infoPoint}>
                    <CourseTimelineInfoPoint indexNumber="02" infoContent="Styling with CSS"/>
                </div>  
                <div className={styles.infoPoint}>
                    <CourseTimelineInfoPoint indexNumber="03" infoContent="Introduction to Responsive Design"/>
                </div>  
                <div className={styles.infoPoint}>
                    <CourseTimelineInfoPoint indexNumber="04" infoContent="Design principles for Web"/>
                </div>  
                <div className={styles.infoPoint}>
                    <CourseTimelineInfoPoint indexNumber="05" infoContent="Building a basic Website"/>
                </div>  
                            
            </div>
        </div>
    </div>);
}

export default CourseCard;