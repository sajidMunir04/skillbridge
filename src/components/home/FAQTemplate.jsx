import ExternalLinkButton from "../buttons/ExternalLinkButton";
import FAQElement from "./FAQElementQuestion";
import TemplateDescription from "../TemplateDescription";
import TemplateHeading from "../TemplateHeading";
import styles from "./FAQTemplate.module.css";

function FAQTemplate(){
    return (<div className={styles.container}>
        <div className={styles.containerLeft}>
            <TemplateHeading heading="Frequently Asked Questions"/>
            <TemplateDescription description="Still you have any questions? Contact our Team 
            via support@skillbridge.com"/>
            <div className={styles.externalLink}>
                <ExternalLinkButton buttonText="See All FAQ's"/>
            </div>
        </div>
        <div className={styles.containerRight}>
            <FAQElement questionText="Can I enroll in multiple courses at once?" answerText="Absolutely! You can enroll in multiple courses 
            simultaneously and access them at your convenience." linkText="Enrollment Process for Different Courses"/>
            <FAQElement questionText="What kind of support can I expect from instructors?" answerText="Absolutely! You can enroll in multiple courses 
            simultaneously and access them at your convenience." linkText="Enrollment Process for Different Courses"/>
            <FAQElement questionText="Are the courses self-paced or do they have specific start and end dates?" answerText="Absolutely! You can enroll in multiple courses 
            simultaneously and access them at your convenience." linkText="Enrollment Process for Different Courses"/>
            <FAQElement questionText="Are there any prerequisites for the courses?" answerText="Absolutely! You can enroll in multiple courses 
            simultaneously and access them at your convenience." linkText="Enrollment Process for Different Courses"/>
            <FAQElement questionText="Can I download the course materials for offline access?" answerText="Absolutely! You can enroll in multiple courses 
            simultaneously and access them at your convenience." linkText="Enrollment Process for Different Courses"/>
        </div>
    </div>);
}

export default FAQTemplate;