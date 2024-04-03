import BenefitDetail from "./BenefitDetail";
import ExternalLinkButton from "../buttons/ExternalLinkButton";
import TemplateDescription from "../TemplateDescription";
import TemplateHeading from "../TemplateHeading";
import styles from './BenefitsTemplate.module.css'
import LayoutHeader from "./LayoutHeader";
import { useMediaQuery } from 'react-responsive'
function BenefitsTemplate()
{
    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
      })
    return (<div className={styles.container}>
        <div className={styles.containerHeader}>
        <LayoutHeader heading="Benefits" description="Lorem ipsum dolor sit amet consectetur. 
                Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. 
            Ac cum eget habitasse in velit fringilla feugiat senectus in." buttonText="View More"/>
        </div>
        <div className={styles.content}>
            <BenefitDetail heading="Flexible Learning Schedule" 
            description="Fit your coursework around your existing commitments and obligations." indexValue={'01'}/>
            <BenefitDetail heading="Expert Instruction" 
            description="Learn from industry experts who have hands-on experience in design and development." indexValue={'02'}/>  
            <BenefitDetail heading="Diverse Course Offerings" 
            description="Explore a wide range of design and development courses covering various topics." indexValue={'03'}/>  
            <BenefitDetail heading="Updated Curriculum" 
            description="Access courses with up-to-date content reflecting the latest trends and industry practices." indexValue={'04'}/>  
            {!isMobile && <BenefitDetail heading="Practical Projects and Assignments" 
            description="Develop a portfolio showcasing your skills and abilities to 
            potential employers." indexValue={'05'}/>}
            {!isMobile && <BenefitDetail heading="Interactive Learning Environment" 
            description="Collaborate with fellow learners, exchanging ideas and feedback to 
            enhance your understanding." indexValue={'06'}/>}   
        </div>
    </div>);
}

export default BenefitsTemplate; 