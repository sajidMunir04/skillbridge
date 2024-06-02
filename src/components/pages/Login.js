import LoginPage from "../account/LoginPage";
import FooterSection from "../shared/FooterTemplate";
import HeaderTemplate from "../shared/HeaderTemplate";
import SaleLinkTemplate from "../shared/SaleLinkTemplate";


function Login() {
    return (<>
    <SaleLinkTemplate linkText="Free Courses 🌟 Sale Ends Soon, Get It Now  &#8594;"/>
    <HeaderTemplate/>
    <LoginPage/>
    <FooterSection/>
    </>);
}

export default Login;