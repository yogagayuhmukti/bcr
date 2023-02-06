import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function HasilPencarian({
    hpcomponen = [],
}) {

  return (
    <>
    <Container>
        <Row>
        {hpcomponen.map((cars) => (
            <Col md="auto" xs="auto" lg="auto">
                <Card >
                    <div>
                    <Card.Img variant="top" src={cars.image} />
                    </div>
                    <div>
                    <Card.Body style={{ paddingLeft: '48px'}}>
                        <Card.Text variant="success">{cars.name}</Card.Text>
                        <Card.Text className='paragraf'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
                        <Link to="/detailpaketsewamobil">
                        <Nav.Link href="deskripsi">
                        <Button variant="success">Pilih Mobil</Button>
                        </Nav.Link>
                        </Link>
                    </Card.Body>
                    </div>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
    </>
  );
}