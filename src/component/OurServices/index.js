import React from 'react'
import ServiceImage from "../../assets/image/img_service.png";
import Icon from "../../assets/image/iconcorrect.png";
import "./index.css";

const OurServices = () => {
  return (
    <div>
      <div class="d-md-flex">
      <section id="gambarOS" className="gambarOS">
          <div className='gambar-service'>
            <img
              src={ServiceImage}
              alt="img-services"
            />
          </div>
          <div className='ourbox'>
          <div>
            <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
            <p>
              Sewa mobil di Jawa Timur bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="listServices">
              <li><img src={Icon} alt="img-services"/>Sewa Mobil dengan Supit di Bali 12 Jam</li>
              <li><img src={Icon} alt="img-services"/>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li><img src={Icon} alt="img-services"/>Sewa Mobil Jangka Panjang Bulanan</li>
              <li><img src={Icon} alt="img-services"/>Gratis Antar-Jemput Mobil di Bandara</li>
              <li><img src={Icon} alt="img-services"/>Layanan Airport Transfer/Drop In Out</li>
            </ul>
            </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default OurServices