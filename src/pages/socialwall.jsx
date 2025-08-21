'use client'
import HeroSection from "@/common/Herosecttion"
import Header from "@/layout/header"
import Footer from "@/layout/footer"
import Section2 from "./Social/section2"
import heroImage from '../../public/assets/social/mosque2.jpg'
const SocialWall = () => {
    return(
        <>
        <Header />
        <HeroSection text="Social Wall" heroImage={heroImage}/>
        <Section2 />
        <Footer />
        </>
    )
}               
export default SocialWall