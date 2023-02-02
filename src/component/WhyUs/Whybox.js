import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"

export default function Whybox({
    whyuscomponen = [],
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
        {whyuscomponen.map((item) => (
            <Col md="auto" xs="auto">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={item.icon} style={{ width: '30px', height: '30px'}} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
  );
}