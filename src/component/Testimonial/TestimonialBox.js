import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import "./index.css";

export default function TestimonialBox({
    testimonialcomponen = [],
    judulh1 = "",
    penjelasan = "",
}) {

  return (
    <Container>
        <Row className="text-center">
            <h1>{judulh1}</h1>
            <p>{penjelasan}</p>
        </Row>
        <Row className="testibox">
        {testimonialcomponen.map((item) => (
            <Col md="auto" xs="auto" lg="auto">
                <Card style={{ width: '619px', height: '270px', display: 'flex', flexDirection: 'row', background: '#F1F3FF', alignItems: 'center', paddingLeft: '48px'}}>
                    <div>
                    <Card.Img variant="top" src={item.image} style={{ width: '80px', height: '80px'}} />
                    </div>
                    <div>
                    <Card.Body style={{ paddingLeft: '48px'}}>
                        <Card.Text variant="success">{item.icon}</Card.Text>
                        <Card.Text className='paragraf'>{item.lorem}</Card.Text>
                        <Card.Text className='tanggal'>{item.tanggal}</Card.Text>
                    </Card.Body>
                    </div>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
  );
}