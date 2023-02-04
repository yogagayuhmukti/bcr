import Icon1 from "../../assets/image/icon_complete-1.png";
import Icon2 from "../../assets/image/icon_price-1.png";
import Icon3 from "../../assets/image/icon_24hrs-1.png";
import Icon4 from "../../assets/image/icon_professional-1.png";
import Whybox from "./Whybox";

function  WhyUs() {
    const data = [
        {
          title: "Mobil Lengkap",
          text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
          icon: Icon1,
        },
        {
          title: "Harga Murah",
          text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
          icon: Icon2,
        },
        {
          title: "Layanan 24 Jam",
          text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
          icon: Icon3,
        },
        {
          title: "Sopir Profesional",
          text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
          icon: Icon4,
        },
      ];
    return (
        <>
        <div id="whyus">
            <Whybox 
                whyuscomponen={data}
                judulh1="Why Us?"
                penjelasan="Mengapa harus pilih Binar Car Rental?"
            />
        </div>
        </>
    );
};
// };
export default WhyUs;