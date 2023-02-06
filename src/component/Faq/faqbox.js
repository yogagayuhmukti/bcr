import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col } from "react-bootstrap"
import "./index.css";

export default function FaqBox({
    Faqcomponen = [],
    judulh1 = "",
    penjelasan = "",
}) {

return (
    <div className="gerombolan">
        <Col className="aran">
            <h1>{judulh1}</h1>
            <p>{penjelasan}</p>
        </Col>
        <Col className='tanya'>
        <Accordion >
            {Faqcomponen.map((item, index) => {
              return (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header className="kalimat">{item.pertanyaan}</Accordion.Header>
                  <Accordion.Body>{item.jawaban}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Col>
    </div>
  );
}