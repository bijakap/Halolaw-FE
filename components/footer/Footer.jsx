import react from "react";
import Image from "next/image";

function Footer(){
    return(
        <div className="bg-[#1D2939] first-letter:font-sans">
            <div className="flex mx-[100px] pt-[64px] pb-[40px] text-white">
                <div className="w-[314px] mr-[120px]">
                    <img src="./logoFooter@2x.png" className="h-[64px] mb-[40px]" alt="Logo Footer"></img>
                    <ul className="list-none ">
                        <li>Bandung Technoplex, Jl. Telekomunikasi no.1, Kabupaten Bandung, Jawa Barat</li>
                        <li>Telp: (1234) 123 456</li>
                        <li>Email: info@halolawindonesia.co.id</li>
                    </ul>
                </div>
                <div className="w-[187px] mr-[24px]">
                    <h6 className="mb-[19px] font-bold leading-4">Site Map</h6>
                    <ul className="list-none space-y-[12px] font-[300]">
                        <li><a href="#">Pembuatan Dokumen</a></li>
                        <li><a href="#">Tentang Kami</a></li>
                        <li><a href="#">Artikel</a></li>
                    </ul>
                </div>
                <div className="w-[187px]">
                    <h6 className="mb-[19px] font-bold leading-4">Informasi</h6>
                    <ul className="list-none space-y-[12px] font-[300]">
                        <li><a href="#">FaQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Term & Conditon</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-[10px] bg-[#101828] text-[#667085]">
                <span className="ml-[40px]">Copyright &copy; 2022 Halo Law</span>
            </div>
        </div>
        
    )
}

export default Footer;