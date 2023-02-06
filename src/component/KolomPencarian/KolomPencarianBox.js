import React from "react";
import { Col, Button, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./index.css";
import Form from 'react-bootstrap/Form';

export default function KolomPencarianBox({
    kategori = "",
    harga = "",
    status = "",
}) {

return (
      <div className="kolomcari" id="kp">
        <Col className='kpnamamobil'>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nama Mobil (hanya Innova)</Form.Label>
                      <Form.Control type="email" placeholder="Ketik nama/tipe mobil" />
                    </Form.Group>
                  </Form>
        </Col>
        <Col className='kpkapsitasmobil'>
                <Form.Label>Kapasitas</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Masukan Kapasitas Mobil</option>
                  <option value="1">2 - 4 orang</option>
                  <option value="2">4 - 6 orang</option>
                  <option value="3">6 - 8 orang</option>
                </Form.Select>
        </Col>
        <Col className='kphargamobil'>
                <Form.Label>Kategori</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Harga</option>
                  <option value="400000"> &#60; Rp.400.000 </option>
                  <option value="500000">Rp.400.000 - Rp. 600.000</option>
                  <option value="600000"> &#62; Rp. 600.000</option>
                </Form.Select>
        </Col>
        <Col className='kpstatusmobil'>
                <Form.Label>Status</Form.Label>
                <Form.Select disabled aria-label="Default select example">
                  <option>Status Mobil</option>
                  <option value="sedia"> Sedia </option>
                  <option value="sewa"> sewa </option>
                </Form.Select>
        </Col>
        <Col className='kpbutton'>
                <Col>
                  <Link to="/HasilPencarianMobil">
                  <Nav.Link href="hasilPencarianMobil">
                  <Button variant="success" type="submit" className="mt-4">Cari Mobil</Button>
                  </Nav.Link>
                </Link>
                </Col>
        </Col>
        </div>
  );
}