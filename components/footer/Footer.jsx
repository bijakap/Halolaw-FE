import react from "react";
import Image from "next/image";
import Link from "next/link"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer(){
    return(
        <div className="bg-[#1D2939] first-letter:font-sans text-[10px] lg:text-[14px]">
            <div className="gap-3 lg:gap-0 block lg:flex mx-[25px] lg:mx-[100px] pt-[64px] pb-[40px] text-white">
                <div className="w-full mb-6 lg:mb-0 lg:w-[314px] mr-[120px]">
                    <img src="/logoFooter@2x.png" className="w-auto lg:h-auto h-[60px] mb-[20px] lg:mb-[40px]" alt="Logo Footer"/>
                    <ul className="list-none space-y-2 lg:space-y-0">
                        <li>Bandung Technoplex, Jl. Telekomunikasi no.1, Kabupaten Bandung, Jawa Barat</li>
                        <li>Telp: (1234) 123 456</li>
                        <li>Email: info@halolawindonesia.co.id</li>
                    </ul>
                </div>
                <div className="flex w-full">
                    <div className="w-full lg:w-[187px] mr-[24px] lg:mr-[24px]">
                        <h6 className="mb-[19px] text-[16px] lg:text-[19px] font-bold leading-4">Site Map</h6>
                        <ul className="list-none space-y-[12px] font-[300]">
                            <Link href='/kategori'><li><a href="#" className="hover:text-[#2A41C7]">Pembuatan Dokumen</a></li></Link>
                            <Link href='/TentangKami'><li><a href="#" className="hover:text-[#2A41C7]">Tentang Kami</a></li></Link>
                            <Link href='/artikel'><li><a href="#" className="hover:text-[#2A41C7]">Artikel</a></li></Link>
                        </ul>
                    </div>
                    <div className="w-full lg:w-[187px]">
                        <h6 className="mb-[19px] text-[16px] lg:text-[19px] font-bold leading-4">Informasi</h6>
                        <ul className="list-none space-y-[12px] font-[300]">
                            <Link href='/FAQ'><li><a href="#" className="hover:text-[#2A41C7]">FaQ</a></li></Link>
                            <Link href='/KebijakanPrivasi'><li><a href="#" className="hover:text-[#2A41C7]">Privacy Policy</a></li></Link>
                            <Link href='/SyaratKetentuan'><li><a href="#" className="hover:text-[#2A41C7]">Term & Conditon</a></li></Link>
                        </ul>
                    </div>
                    <div className="w-full lg:w-[187px]">
                        <h6 className="mb-[19px] text-[16px] lg:text-[19px] font-bold leading-4">Kontak Kami</h6>
                        <div className="flex gap-4">
                            <div className="cursor-pointer"><InstagramIcon/></div>
                            <div className="cursor-pointer"><WhatsAppIcon/></div>
                            <div className="cursor-pointer"><LinkedInIcon/></div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="py-[10px] bg-[#101828] text-[#667085]">
                <span className="ml-[40px] flex self-center">Copyright &copy; 2022 Halo Law</span>
            </div>
        </div>
        
    )
}

export default Footer;