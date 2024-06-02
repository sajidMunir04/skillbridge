
import FooterSection from "../shared/FooterTemplate";
import HeaderTemplate from "../shared/HeaderTemplate";
import SignUpPage from "../account/SignUpPage";
import SaleLinkTemplate from "../shared/SaleLinkTemplate";


function SignUp() {
    return (<>
        <SaleLinkTemplate linkText="Free Courses 🌟 Sale Ends Soon, Get It Now  &#8594;"/>
        <HeaderTemplate/>
        <SignUpPage/>
        <FooterSection/>
    </>);
}

export default SignUp;  