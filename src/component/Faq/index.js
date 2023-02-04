import "./index.css";
import FaqBox from "./faqbox";

function  Faq() {
    const data = [
        {
        pertanyaan: "Apa saja syarat yang dibutuhkan?",
        jawaban:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ullam fugiat enim et molestias nobis commodi recusandae vero, fugit sint voluptas, temporibus quo ipsa. Fugit velit perferendis nobis explicabo earum.",
        },
        {
        pertanyaan: "Berapa hari minimal sewa mobil lepas kunci?",
        jawaban:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias sint officia maxime officiis cumque tempora dolore et fugiat, itaque est maiores aliquam, perspiciatis obcaecati vel veniam nisi? Incidunt, quam!",
        },
        {
        pertanyaan: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
        jawaban:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem quis, repellendus odit nobis consequuntur nemo magnam amet quibusdam, ipsa ipsum, temporibus aut nisi voluptas libero non ipsam quos perferendis.",
        },
        {
        pertanyaan: "Apakah Ada biaya antar-jemput?",
        jawaban:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, molestias harum vero aliquam architecto, explicabo a ipsa nihil quas obcaecati, fugiat numquam aut veniam doloremque fugit quidem vitae eos! Aliquid!",
        },
        {
        pertanyaan: "Bagaimana jika terjadi kecelakaan?",
        jawaban:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus magni, fuga, omnis provident obcaecati optio velit ab id atque alias corrupti! Eveniet facilis voluptatem, ut dolore suscipit magni aut veniam.",
        },
    ];
    return (
    <>
    <FaqBox 
        Faqcomponen={data}
        judulh1="Frequently Asked Question"
        penjelasan="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
    </>
    );
}

export default Faq;