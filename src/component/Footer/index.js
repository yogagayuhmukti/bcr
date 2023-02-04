import { Row, Col } from "react-bootstrap"
import IconFacebook from "../../assets/image/icon_facebook.png";
import IconInstagram from "../../assets/image/icon_instagram.png";
import IconTwitter from "../../assets/image/icon_twitter.png";
import IconMail from "../../assets/image/icon_mail.png";
import IconTwitch from "../../assets/image/icon_twitch.png";
import "./index.css";

function Footer() {
    return (
        <Row style={{ paddingLeft: '136px', display: 'flex', flexWrap:'wrap' }}>
            <Col md="auto" xs="auto">
            <div style={{ width: '17rem' }}>
            <div>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            </div>
            </Col>
            <Col md="auto" xs="auto">
            <div style={{ width: '17rem' }}>
            <div>
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            </div>
            </Col>
            <Col md="auto" xs="auto">
            <div style={{ width: '17rem' }}>
            <div>
                <h5>Connect with us</h5>
                <div>
                    <img src={IconFacebook} alt="" className="connect" />
                    <img src={IconInstagram} alt="" className="connect" />
                    <img src={IconTwitter} alt="" className="connect" />
                    <img src={IconMail} alt="" className="connect" />
                    <img src={IconTwitch} alt="" className="connect" />
                </div>
            </div>
            </div>
            </Col>
            <Col md="auto" xs="auto">
            <div style={{ width: '17rem' }}>
            <div>
                <h5>Copyright &copy; Binar 2022</h5>
                <h5>Logo BCR</h5>
            </div>
            </div>
            </Col>
        </Row>
    );
}
export default Footer;