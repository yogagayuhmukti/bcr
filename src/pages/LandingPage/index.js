import {Header, Banner, OurServices, WhyUs, Testimonial, SewaMobilSekarangBox, Faq, Footer} from '../../component'
import "./index.css";

function LandingPage() {
    return (
        <>
        <div className='oneCard'>
        <Header />
        <Banner />
        </div>
        <OurServices />
        <WhyUs />
        <Testimonial />
        <SewaMobilSekarangBox />
        <Faq />
        <Footer />
        </>
    );
}

export default LandingPage;