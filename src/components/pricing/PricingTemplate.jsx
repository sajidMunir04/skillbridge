import PricingDetail from "./PricingDetail";
import SwitchableButton from "./SwitchableButton";
import styles from "./PricingTemplate.module.css";
import { useState } from "react";
import TemplateHeading from "../TemplateHeading";
import TemplateDescription from "../TemplateDescription";

function PricingTemplate()
{
    const [timePeriod,setTimePeriod] = useState('month');

    function setTimeAsMonth()
    {
        setTimePeriod('month');
    }

    function setTimeAsYear()
    {
        setTimePeriod('year');
    }

    return (<div className={styles.container}>
        <div className={styles.sectionHeader}>
            <TemplateHeading heading="Our Pricing"/>
            <div className={styles.infoContent}>
                <div className={styles.descriptionText}>
                    <TemplateDescription  description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. 
                    Ac cum eget habitasse in velit fringilla feugiat senectus in."/>
                </div>
                <div className={styles.linksContainer}>
                    <SwitchableButton a="Monthly" b="Yearly" firstOnClick={setTimeAsMonth} secondOnClick={setTimeAsYear} />
                </div>
            </div>
        </div>
        <div className={styles.content}>
        <PricingDetail planCategory="Free Plan" planPrice="$0" timeSpan={timePeriod} featuresList={[
            'Access to selected free courses.','Limited course materials and resources.',
            'Basic community support.','No certification upon completion.','Ad-supported platform.',
            'Access to exclusive Pro Plan community forums.','Early access to new courses and updates.'
        ]}/>
        <PricingDetail planCategory="Pro Plan" planPrice="$79" timeSpan={timePeriod} featuresList={[
            'Access to selected free courses.','Limited course materials and resources.',
            'Basic community support.','No certification upon completion.','Ad-supported platform.',
            'Access to exclusive Pro Plan community forums.','Early access to new courses and updates.'
        ]}/>
        </div>
    </div>);
}

export default PricingTemplate;