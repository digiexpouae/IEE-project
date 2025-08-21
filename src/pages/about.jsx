import HeroSection from "../common/Herosecttion";
import SectionQ from "./About/sectionq"
import heroImage from './../../public/assets/About/s-2-1.png'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Section3 from'./Home/section2/section2';
const About = () => {
    return(
        <>
        <Header />
        <HeroSection  text="About US" heroImage={heroImage} />
        <SectionQ />
        <Section3 />
        <Footer />
        </>
    )
}   
export default About;