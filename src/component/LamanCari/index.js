import CarImage from "../../assets/image/img_car.png";
import "./index.css";

function LamanCari() {
    return (
        <div className="bannerCaribox" id="LamanCari">
        <div class="d-md-flex">
            <div className="padlef">
                <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                <p className="webmode">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <p className="mobilemode">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="padrig">
                <img src={CarImage} alt="img-car" width="100%"
            height="auto"/>
            </div>
        </div>
        </div>
    );
}
export default LamanCari;