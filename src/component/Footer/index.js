import {  Nav, Button } from "react-bootstrap"
import IconFacebook from "../../assets/image/icon_facebook.png";
import IconInstagram from "../../assets/image/icon_instagram.png";
import IconTwitter from "../../assets/image/icon_twitter.png";
import IconMail from "../../assets/image/icon_mail.png";
import IconTwitch from "../../assets/image/icon_twitch.png";
import "./index.css";

function Footer() {
    return (
        <div className="footeroi">
            <div className="alamat">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="navigasi">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="sosmed">
                <h5>Connect with us</h5>
                <div className="ichon">
                    <img src={IconFacebook} alt="" className="connect" />
                    <img src={IconInstagram} alt="" className="connect" />
                    <img src={IconTwitter} alt="" className="connect" />
                    <img src={IconMail} alt="" className="connect" />
                    <img src={IconTwitch} alt="" className="connect" />
                </div>
            </div>
            <div className="copyright">
                <h5>Copyright &copy; Binar 2022</h5>
                <Nav.Link href="#banner">
                <Button className="button"></Button>
                </Nav.Link>
            </div>
        </div>
    );
}
export default Footer;