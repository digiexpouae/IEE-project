import Header from '../../layout/header'
import Section1 from './section1/section1'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'
const home=()=>{
    return(
        <div>
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4 />
        </div>
    )
}
export default home