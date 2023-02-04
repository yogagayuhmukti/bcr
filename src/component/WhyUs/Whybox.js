import React from 'react'
import { Row, Col, Card} from "react-bootstrap"
import "./index.css";

export default function Whybox({
    whyuscomponen = [],
    judulh1 = "",
    penjelasan = "",
}) {

  return (
    <div className='whybox'>
        <Row className="judul">
            <h1>{judulh1}</h1>
            <p>{penjelasan}</p>
        </Row>
        <Row className='boxx'>
        {whyuscomponen.map((item) => (
            <Col md="auto" xs="auto">
                <Card className='boxkonten'>
                <div className='image'><Card.Img src={item.icon} /></div>
                <Card.Title><h5>{item.title}</h5></Card.Title>
                <Card.Text><p>{item.text}</p></Card.Text>
                </Card>
            </Col>
            ))}
        </Row>
    </div>
  );
}