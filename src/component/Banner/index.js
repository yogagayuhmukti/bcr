import {Button, Nav} from "react-bootstrap"
import CarImage from "../../assets/image/img_car.png";
import { Link } from "react-router-dom";
import "./index.css";

function Banner() {
    return (
        <div className="bannerbox" id="banner">
        <div class="d-md-flex">
            <div className="padlef">
                <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                <p className="webmode">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <p className="mobilemode">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Button className="tombolCari" variant="success">
                    <Link to="/carimobil" className="cari">
                        <Nav.Link href="#carimobil">
                        <p className="cari">Mulai Sewa Mobil</p>
                        </Nav.Link>
                    </Link>
                </Button>
            </div>
            <div className="padrig">
                <img src={CarImage} alt="img-car" width="100%"
            height="auto"/>
            </div>
        </div>
        </div>
    );
}
export default Banner;