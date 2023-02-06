import React from 'react'
import {Card, Button, Nav} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./index.css";

const SewaMobilSekarangBox = () => {
  return (
    <div className="text-center atas">
    <Card className='sewabox' style={{background: "#0D28A6"}}>
      <Card.Body>
        <Card.Title><h1>Sewa Mobil di(Lokasimu) Sekarang</h1></Card.Title>
        <Card.Text className='text'>
        <p><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <br></br><br></br></Card.Text>
        <Link to="/carimobil" className="carimobil">
          <Nav.Link href="#carimobil">
            <Button variant="success">Mulai Sewa Mobil</Button>
          </Nav.Link>
        </Link>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default SewaMobilSekarangBox