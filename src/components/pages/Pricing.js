import { useState } from "react";
import FAQTemplate from "../home/FAQTemplate";
import PricingDetail from "../pricing/PricingDetail";
import SwitchableButton from "../pricing/SwitchableButton";
import FooterSection from "../shared/FooterTemplate";
import HeaderTemplate from "../shared/HeaderTemplate";
import PageHeadingTemplate from "../shared/PageHeadingTemplate";
import styles from './Pricing.module.css';

function Pricing(){
    const [timePeriod,setTimePeriod] = useState('month');

    function setTimeAsMonth()
    {
        setTimePeriod('month');
    }

    function setTimeAsYear()
    {
        setTimePeriod('year');
    }

    return(<>
        <HeaderTemplate/>
        <PageHeadingTemplate heading="Our Pricings" description="Welcome to SkillBridge's Pricing Plan page, where we offer 
        two comprehensive options to cater to your needs: Free and Pro. We believe in providing 
        flexible and affordable pricing options for our services. Whether you're an individual 
        looking to enhance your skills or a business seeking professional development solutions, 
        we have a plan that suits you. Explore our pricing options below and choose the one that best 
        fits your requirements."/>
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <SwitchableButton a="Monthly" b="Yearly" firstOnClick={setTimeAsMonth} secondOnClick={setTimeAsYear} />
            </div>
            <div className={styles.contentContainer}>
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
        </div>
        <FAQTemplate/>
        <FooterSection/>
    </>);
}

export default Pricing;