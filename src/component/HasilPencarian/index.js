import {Container, Row, Col, Card, Button, NavDropdown, Modal} from "react-bootstrap"

function HasilPencarian() {
    return (
        <Container>
            <Container>
                <Row>
                    <Card>
                    <Card.Text>Pencarianmu</Card.Text>
                    </Card>
                </Row>
                <Row>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Text>Nama Mobil</Card.Text>
                        <Modal.Body><p>Innova</p></Modal.Body>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Text>Kategori</Card.Text>
                        <Modal.Body>
                        <NavDropdown title="6 - 8 orang" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        </Modal.Body>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Text>Harga</Card.Text>
                        <Modal.Body>
                        <NavDropdown title="Rp. 400.000 - Rp. 600.000" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        </Modal.Body>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Text>Status</Card.Text>
                        <Modal.Body>
                        <NavDropdown title="Disewakan" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        </Modal.Body>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default HasilPencarian;