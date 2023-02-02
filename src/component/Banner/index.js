import {Button} from "react-bootstrap"
import CarImage from "../../assets/image/img_car.png";
import "./index.css";

function Banner() {
    return (
        <div className="box">
        <div class="d-md-flex">
            <div className="padlef">
                <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                <p><strong>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </strong></p>
                <Button variant="success">Mulai Sewa Mobil</Button>
            </div>
            <div className="padrig">
                <img className="image" src={CarImage} alt="img-car" width="100%"
            height="auto"/>
            </div>
        </div>
        </div>
    );
}
export default Banner;