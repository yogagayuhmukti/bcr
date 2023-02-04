import Image1 from "../../assets/image/img_photo-1.png";
import Image2 from "../../assets/image/img_photo-2.png";
import TestimonialBox from "./TestimonialBox";
import { SiMacys } from "react-icons/si";

function Testimonial() {
    const testi = [
        {
            image: Image1,
            icon: <div className="icons"><SiMacys /><SiMacys /><SiMacys /><SiMacys /><SiMacys /></div>,
            lorem: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            tanggal: "John Dee 32, Bromo",
        },
        {
            image: Image2,
            icon:  <div className="icons"><SiMacys /><SiMacys /><SiMacys /><SiMacys /><SiMacys /></div>,
            lorem: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            tanggal: "John Dee 32, Bromo",
        },
        {
            image: Image1,
            icon:  <div className="icons"><SiMacys /><SiMacys /><SiMacys /><SiMacys /><SiMacys /></div>,
            lorem: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            tanggal: "John Dee 32, Bromo",
        },
      ];
    return (
        <>
        <div id="testimonial">
            <TestimonialBox 
                testimonialcomponen={testi}
                judulh1="Testimonial"
                penjelasan="Berbagai review positif dari para pelanggan kami"
            />
        </div>
        </>
    );
}
export default Testimonial;