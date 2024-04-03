import MainIntroduction from '../home/MainIntroduction';
import VideoIntroduction from '../home/VideoIntroduction';
import FooterSection from '../shared/FooterTemplate';
import BenefitsTemplate from '../home/BenefitsTemplate';
import CoursesTemplate from '../courses/CoursesTemplate';
import TestimonialsTemplate from '../customers/TestimonialsTemplate';
import FAQTemplate from '../home/FAQTemplate';
import SaleLinkTemplate from '../shared/SaleLinkTemplate';
import HeaderTemplate from '../shared/HeaderTemplate';
import PartnerBrandsTemplate from '../home/PartnerBrandsTemplate';
import PricingTemplate from '../pricing/PricingTemplate';

function Home() {
  return (
    <>
      <SaleLinkTemplate linkText="Free Courses 🌟 Sale Ends Soon, Get It Now  &#8594;"/>
      <HeaderTemplate/>
      <MainIntroduction/>
      <PartnerBrandsTemplate/>
      <VideoIntroduction/>
      <BenefitsTemplate/>
      <CoursesTemplate/>
      <PricingTemplate/>
      <TestimonialsTemplate/>
      <FAQTemplate/>
      <FooterSection/>
    </>
  );
}

export default Home;
