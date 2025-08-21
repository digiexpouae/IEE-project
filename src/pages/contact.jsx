
import heroimage from '../../public/assets/contact/desert.JPG'
import HeroSection from '@/common/Herosecttion'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import ContactInfo from './contact/section2'
import ContactSection from './contact/section3'
import Map from './contact/map'
const contact=()=>{
    return (
        <>
        <Header />
        <HeroSection text="Contact" heroImage={heroimage} className={'!object-[60%_100%]'} className2={'hidden'} />
        <ContactInfo />
        <ContactSection />
        <Map />
        <Footer />
        </>
    )
}
export default contact