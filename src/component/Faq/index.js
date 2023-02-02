import {Container, Row, Col, Card, NavDropdown} from "react-bootstrap"

function Faq() {
    return (
        <Container>
            <Container>
                <Row>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Frequently Asked Question</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <NavDropdown title="Apa saja syarat yang dibutuhkan?" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Berapa hari minimal sewa mobil lepas kunci?" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Berapa hari sebelumnya sabaiknya booking sewa mobil?" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Apakah Ada biaya antar-jemput?" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Bagaimana jika terjadi kecelakaan" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Faq;