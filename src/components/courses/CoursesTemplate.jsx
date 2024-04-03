import CourseDetail from "../home/CourseDetail";
import DetailDescription from "../home/DetailDescription";
import DetailHeading from "../home/DetailHeading";
import ExternalLinkButton from "../buttons/ExternalLinkButton";
import styles from './CoursesTemplate.module.css';
import TemplateHeading from "../TemplateHeading";
import TemplateDescription from "../TemplateDescription";
import LayoutHeader from "../home/LayoutHeader";
function CoursesTemplate()
{
    return (<div className={styles.container}>
        <div className={styles.containerHeader}>
            <LayoutHeader heading="Our Courses" description="Lorem ipsum dolor sit amet consectetur. 
                Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. 
            Ac cum eget habitasse in velit fringilla feugiat senectus in." buttonText="View All"/>
        </div>
        <div className={styles.contentSection}>
            <CourseDetail heading="Web Design Fundamentals" description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to 
            create visually appealing and user-friendly websites." courseSkillLevel="Beginner" courseDuration="4 weeks" courseInstructor="John Smith" imageLink={"/Images/Image.png"}/>
            <CourseDetail heading="Web Design Fundamentals" description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to 
            create visually appealing and user-friendly websites." courseSkillLevel="Beginner" courseDuration="4 weeks" courseInstructor="John Smith" imageLink={"/Images/Image(6).png"}/>
            <CourseDetail heading="Web Design Fundamentals" description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to 
            create visually appealing and user-friendly websites." courseSkillLevel="Beginner" courseDuration="4 weeks" courseInstructor="John Smith" imageLink={"/Images/Image(1).png"}/>
            <CourseDetail heading="Web Design Fundamentals" description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to 
            create visually appealing and user-friendly websites." courseSkillLevel="Beginner" courseDuration="4 weeks" courseInstructor="John Smith" imageLink={"/Images/Image(5).png"}/>
            <CourseDetail heading="Web Design Fundamentals" description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to 
            create visually appealing and user-friendly websites." courseSkillLevel="Beginner" courseDuration="4 weeks" courseInstructor="John Smith" imageLink={"/Images/Image(3).png"}/>
            <CourseDetail heading="Web Design Fundamentals" description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to 
            create visually appealing and user-friendly websites." courseSkillLevel="Beginner" courseDuration="4 weeks" courseInstructor="John Smith" imageLink={"/Images/Image(4).png"}/>
        </div>
    </div>);
}


export default CoursesTemplate;