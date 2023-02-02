import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"

export default function TestimonialBox({
    testimonialcomponen = [],
    judulh1 = "",
    penjelasan = "",
}) {

  return (
    <Container>
        <Row>
            <h1>{judulh1}</h1>
            <p>{penjelasan}</p>
        </Row>
        <Row>
        {testimonialcomponen.map((item) => (
            <Col md="auto" xs="auto">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={item.image} style={{ width: '30px', height: '30px'}} />
                <Card.Body>
                    <Card.Text>{item.icon}</Card.Text>
                    <Card.Text>{item.lorem}</Card.Text>
                    <Card.Text>{item.tanggal}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
  );
}