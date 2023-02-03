import React from 'react'
import {Card, Button} from "react-bootstrap"
import "./index.css";

const SewaMobilSekarangBox = () => {
  return (
    <div className="text-center">
    <Card className='sewabox' style={{background: "#0D28A6"}}>
      <Card.Body>
        <Card.Title><h1>Sewa Mobil di(Lokasimu) Sekarang</h1></Card.Title>
        <Card.Text className='text'>
        <p><strong><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
        <br></br><br></br></Card.Text>
        <Button variant="success">Mulai Sewa Mobil</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SewaMobilSekarangBox