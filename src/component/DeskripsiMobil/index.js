import {Container, Row, Col, Card, ListGroup} from "react-bootstrap"

function Banner() {
    return (
        <Container>
                <Row>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Tentang  Paket</Card.Title>
                        <Card.Title>Include</Card.Title>
                        <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">Apa saja yang termasuk dalam paket misal durasi max 12 jam</ListGroup.Item>
                        <ListGroup.Item as="li">Sudah termasuk bensin selama 12 jam</ListGroup.Item>
                        <ListGroup.Item as="li">Sudah termasuk Tiket Wisata</ListGroup.Item>
                        <ListGroup.Item as="li">Sudah termasuk pajak</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Exclude</Card.Title>
                        <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">Tidak termasuk biaya makan sopir Rp 75.000/hari</ListGroup.Item>
                        <ListGroup.Item as="li">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListGroup.Item>
                        <ListGroup.Item as="li">Tidak termasuk akomodasi penginapan</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Refund, Reschedule, Overtime</Card.Title>
                        <ListGroup as="ol" numbered>
                        <ListGroup.Item as="li">Tidak termasuk biaya makan sopir Rp 75.000/hari</ListGroup.Item>
                        <ListGroup.Item as="li">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListGroup.Item>
                        <ListGroup.Item as="li">Tidak termasuk akomodasi penginapan</ListGroup.Item>
                        <ListGroup.Item as="li">Tidak termasuk biaya makan sopir Rp 75.000/hari</ListGroup.Item>
                        <ListGroup.Item as="li">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListGroup.Item>
                        <ListGroup.Item as="li">Tidak termasuk akomodasi penginapan</ListGroup.Item>
                        <ListGroup.Item as="li">Tidak termasuk biaya makan sopir Rp 75.000/hari</ListGroup.Item>
                        <ListGroup.Item as="li">Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</ListGroup.Item>
                        <ListGroup.Item as="li">Tidak termasuk akomodasi penginapan</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md="auto" xs="auto">
                    <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Innova</Card.Title>
                        <Card.Text>6 - 8 orang</Card.Text>
                        <Card.Title>Total</Card.Title>
                        <Card.Title>Rp 500.000</Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
        </Container>
    );
}
export default Banner;