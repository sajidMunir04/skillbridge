import CourseCard from "../courses/CourseCard";
import FooterSection from "../shared/FooterTemplate";
import HeaderTemplate from "../shared/HeaderTemplate";
import PageHeadingTemplate from "../shared/PageHeadingTemplate";


function Courses()
{
    return (<>
        <HeaderTemplate/>
        <PageHeadingTemplate heading="Online Courses on Design and Development"
            description="Welcome to our online course page, where you can enhance your skills in design and development. 
            Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
        />
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <FooterSection/>
    </>);
}

export default Courses;