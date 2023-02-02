import {Container, Row, Col, Card, Button, NavDropdown, Modal} from "react-bootstrap"

function KolomPencarian() {
    return (
        <Container>
            <Container>
                <Row>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Text>Nama Mobil</Card.Text>
                        <Modal.Body><p>ketik nama/tipe mobil</p></Modal.Body>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Text>Kategori</Card.Text>
                        <Modal.Body>
                        <NavDropdown title="Masukan Kapasitas Mobil" id="basic-nav-dropdown">
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
                        <NavDropdown title="Masukan Harga Sewa per Hari" id="basic-nav-dropdown">
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
                        <NavDropdown title="Disewa" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        </Modal.Body>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Button variant="primary">Cari Mobil</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default KolomPencarian;