import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import "./index.css";

export default function Whybox({
    whyuscomponen = [],
    judulh1 = "",
    penjelasan = "",
}) {

  return (
    <Container>
        <Row className="text-center">
            <h1>{judulh1}</h1>
            <p>{penjelasan}</p>
        </Row>
        <Row className='boxkonten'>
        {whyuscomponen.map((item) => (
            <Col md="auto" xs="auto">
                <Card style={{ width: '15rem', height: '15rem' }}>
                <Card.Img className='image' variant="top" src={item.icon} style={{ width: '30px', height: '30px'}} />
                <Card.Title><h5>{item.title}</h5></Card.Title>
                <Card.Text><p>{item.text}</p></Card.Text>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
  );
}