import {Container, Row, Col, Card} from "react-bootstrap"
import IconFacebook from "../../assets/image/icon_facebook.png";
import IconInstagram from "../../assets/image/icon_instagram.png";
import IconTwitter from "../../assets/image/icon_twitter.png";
import IconMail from "../../assets/image/icon_mail.png";
import IconTwitch from "../../assets/image/icon_twitch.png";

function Footer() {
    return (
        <Container>
            <Container>
                <Row>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</Card.Title>
                        <Card.Title>binarcarrental@gmail.com</Card.Title>
                        <Card.Title>081-233-334-808</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>Our services</Card.Text>
                        <Card.Text>Why Us</Card.Text>
                        <Card.Text>Testimonial</Card.Text>
                        <Card.Text>FAQ</Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Connect with us</Card.Title>
                        <Card.Title>
                            <img src={IconFacebook} alt="" className="connect" />
                            <img src={IconInstagram} alt="" className="connect" />
                            <img src={IconTwitter} alt="" className="connect" />
                            <img src={IconMail} alt="" className="connect" />
                            <img src={IconTwitch} alt="" className="connect" />
                        </Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Copyright &copy; Binar 2022</Card.Title>
                        <Card.Title>Logo BCR</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Footer;