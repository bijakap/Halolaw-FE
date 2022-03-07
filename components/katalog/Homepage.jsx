import react from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function Homepage(){
    return(
        <div className="bg-[#3A57E8] relative">
            <div className="text-white ml-[100px] pt-[120px] pb-[180px] w-[656px]">
                <p className="text-[47px] font-light leading-[52px] mb-[24px]">Layanan Hukum terbaik & berpengalaman di Indonesia</p>
                <p className="mb-[16px] text-[16px]">Wujudkan impian anda bersama Halo Law, layanan pengurusan legalitas terlengkap, tercepat dan terpercaya di Indonesia</p>
                <ul className="list-none mb-[42px]">
                    <li><CheckCircleIcon className="text-[#7BD864]"/> Pendamping Hukum</li>
                    <li><CheckCircleIcon className="text-[#7BD864]"/> Tracking Progres Dokumen</li>
                </ul>
                <button className="bg-[#47BF37] px-[24px] py-[15px] rounded-[6px]">Pesan Sekarang</button>
            </div>
            <img src="./img-landing.png" className="fixed bottom-0 right-0"></img>
        </div>
   )
}

export default Homepage;