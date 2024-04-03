import AchievementsTemplate from "../aboutus/AchievementsTemplate";
import GoalsTemplate from "../aboutus/GoalsTemplate";
import FooterSection from "../shared/FooterTemplate";
import HeaderTemplate from "../shared/HeaderTemplate";
import PageHeadingTemplate from "../shared/PageHeadingTemplate";

function AboutUs()
{
    return(<>
        <HeaderTemplate/>
        <PageHeadingTemplate heading="About Skillbridge" description="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and 
        knowledge needed to succeed in the ever-evolving digital landscape."/>
        <AchievementsTemplate/>
        <GoalsTemplate/>
        <FooterSection/>
    </>);
}

export default AboutUs;