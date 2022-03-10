import react from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArtikelCard from '../artikel/ArtikelCard';


function Homepage(){
    const ArtikelDummy = [
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
        {
            penulis: "Liliana Melati",
            tgl_up: "25 Jan 2022",
            judul: "Legalitas tanda tangan elektronik",
            content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
            kategori : ["Perdata"],
            img: "./artikel1@2x.png"
        },
      ];
    return(
        <>
        {/* SECTION ONE */}
        <div>
            <div className="bg-[#3A57E8] font-['Inter' relative">
                <div className="text-white ml-[100px] pt-[120px] pb-[180px] w-[656px]">
                    <p className="text-[47px] font-[200] leading-[52px] mb-[24px]">Layanan Hukum terbaik & berpengalaman di Indonesia</p>
                    <p className="mb-[16px] text-[16px]">Wujudkan impian anda bersama Halo Law, layanan pengurusan legalitas terlengkap, tercepat dan terpercaya di Indonesia</p>
                    <ul className="list-none mb-[42px] space-y-[8px]">
                        <li><CheckCircleIcon className="text-[#7BD864]"/> Pendamping Hukum</li>
                        <li><CheckCircleIcon className="text-[#7BD864]"/> Tracking Progres Dokumen</li>
                    </ul>
                    <button className="bg-[#47BF37] px-[24px] py-[15px] rounded-[6px]">Pesan Sekarang</button>
                </div>
                <img src="./home/img-landing.png" className="absolute bottom-0 right-0"></img>
            </div>
        </div>
        {/* SECTION TWO */}
        <div className="flex justify-between my-[80px] mx-[100px] font-['Inter']">
            <p className="text-[33px] w-[228px]">Dapat anda temukan disini</p>
            <div className="flex space-x-[16px] w-[898px]">
                <div className="flex width-[278px]">
                    <div>
                        <CheckCircleIcon className="text-[#7BD864]"/>
                    </div>
                    <div className="ml-[16px]">
                        <p className="text-[19px] font-semibold mb-[8px]">Praktisi Kredibel</p>
                        <p className="text-[16px]">Berpengalaman dalam menangani segala jenis dokumen hukum</p>
                    </div>``
                </div>
                <div className="flex width-[278px]">
                    <div>
                        <CheckCircleIcon className="text-[#7BD864]"/>
                    </div>
                    <div className="ml-[16px]">
                        <p className="text-[19px] font-semibold mb-[8px]">Praktisi Kredibel</p>
                        <p className="text-[16px]">Berpengalaman dalam menangani segala jenis dokumen hukum</p>
                    </div>
                </div>
                <div className="flex width-[278px]">
                    <div>
                        <CheckCircleIcon className="text-[#7BD864]"/>
                    </div>
                    <div className="ml-[16px]">
                        <p className="text-[19px] font-semibold mb-[8px]">Praktisi Kredibel</p>
                        <p className="text-[16px]">Berpengalaman dalam menangani segala jenis dokumen hukum</p>
                    </div>
                </div>
            </div>
        </div>
        {/* SECTION THREE */}
        <div>
            <div className="text-center font-['Inter'] space-y-[16px] mb-[52px]">
                <h4 className="text-[33px] font-[500] leading-[40px] text-[#1D2939] tracking-[0.25px]">Pelayanan Dokumen Hukum</h4>
                <p className="text-[16px] font-[400] text-[#667085] leading-[24px] tracking-[0.5px]">Kami hadir untuk masyarakat Indonesia dalam melakukan proses legalisasi yang terkadang rumit</p>
            </div>
            <div className="flex justify-center space-x-[32px]">
                <div className="flex flex-col justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-[256px] h-[278px] p-[24px]">
                    <div className="w-[64px] h-[64px]">
                        <img src="./icon/haki.svg" alt=""></img>
                    </div>
                    <div>
                        <h4 className="text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-[181px]">Hak Kekayaan Intelektual</h4>
                        <ul className="list-none text-[16px] text-[#475467]">
                            <li>Pendaftaran Hak Cipta</li>
                            <li>Pendaftaran Hak Paten</li>
                            <li>Pendaftaran Merek</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="flex flex-col justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-[256px] h-[278px] p-[24px]">
                    <div className="w-[64px] h-[64px]">
                        <img src="./icon/properti.svg" alt=""></img>
                    </div>
                    <div>
                        <h4 className="text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-[181px]">Dokumen Properti</h4>
                        <ul className="list-none text-[16px] text-[#475467]">
                            <li>Sertifikat Tanah </li>
                            <li>Ahli Waris Tanah</li>
                            <li>Hak Guna Bangunan</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-[256px] h-[278px] p-[24px]">
                    <div className="w-[64px] h-[64px]">
                        <img src="./icon/pendirianPerusahaan.svg" alt=""></img>
                    </div>
                    <div>
                        <h4 className="text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-[181px]">Pendirian Perusahaan</h4>
                        <ul className="list-none text-[16px] text-[#475467]">
                            <li>Pendirian PT</li>
                            <li>Pendirian CV</li>
                            <li>Pendirian Yayasan</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-[256px] h-[278px] p-[24px]">
                    <div className="w-[64px] h-[64px]">
                        <img src="./icon/lainnya.svg" alt=""></img>
                    </div>
                    <div>
                        <h4 className="text-[22px] font-semibold tracking-[0.5px] text-[#344054] w-[181px]">Layanan Lainnya</h4>
                        <ul className="list-none text-[16px] text-[#475467]">
                            <li>Peninjauan Perjanjian</li>
                            <li>Penutupan Perusahaan</li>
                            <li>Perizinan Usaha</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* SECTION FOUR */}
        <div className="font-['Inter']">
            <div className="flex mx-[100px] my-[80px] justify-between">
                <div className="w-[531px] h-[363px]">
                    <img className="object-cover h-full" src="./home/praktisi.jpg" alt="praktisi"></img>
                </div>
                <div className="grid content-center">
                    <div className="w-[609px]">
                        <h4 className="text-[#1D2939] font-medium text-[33px]">Berpengalaman di dunia Hukum</h4>
                        <p className="tracking-[0.5px] text-[#667085] my-[24px]">Kami bekerjasama dengan para praktisi hukum di Indonesia untuk membantu anda dalam menyelesaikan segala bentuk keperluan hukum pada bidang surat menyurat dan legalisasi </p>
                        <div className="flex space-x-[32px]">
                            <div className="flex border rounded-[4px] w-[140px] h-[140px]">
                                <div className="my-[18px] mx-[28px] text-center flex flex-col justify-between">
                                    <h3 className="text-[#1D2939] text-[47px] font-[600px] leading-none mb-[8px]">5+</h3>
                                    <p className="text-[14px] text-[#475467]">Tahun Pengalaman</p>
                                </div>
                            </div>
                            <div className="flex border rounded-[4px] w-[140px] h-[140px] bg-[#3A57E8] text-white">
                                <div className="my-[18px] mx-[28px] text-center flex flex-col justify-between">
                                    <h3 className="text-[47px] font-[600px] leading-none mb-[8px]">32+</h3>
                                    <p className="text-[14px]">Spesialis</p>
                                </div>
                            </div>
                            <div className="flex border rounded-[4px] w-[140px] h-[140px]">
                                <div className="my-[18px] mx-[28px] text-center flex flex-col justify-between">
                                    <h3 className="text-[#1D2939] text-[47px] font-[600px] leading-none mb-[8px]">4</h3>
                                    <p className="text-[14px] text-[#475467]">Kota Besar di Indonesia   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        {/* SECTION FIVE BELUM */}
        <div className="my-[60px]">
            <div className="flex font-['Inter'] mx-[100px] justify-between">
                <div className="grid content-center">
                    <div className="w-[609px]">
                        <h4 className="font-[500] text-[33px] leading-[40px] tracking-[0.25px] mb-[24px]">Kami siap membantu anda</h4>
                        <div className="space-y-[8px]">
                            <div className="bg-[#FFFFFF] border rounded-[4px] shadow-[10px_4px_20px_0px_rgba(61,141,255,0.15)] p-[18px] space-y-[8px]">
                                <div className="flex space-x-[8px]">
                                    <CheckCircleIcon className="text-[#7BD864]"/><h5 className="font-[600] text-[19px] leading-[24px] tracking-[0.15px] text-[#344054]">Konsultasi Hukum</h5>
                                </div>
                                <p className="font-[400] text-[16px] leading-[24px] tracking-[0.5px] text-[#475467]">Konsultasikan kebutuhan atau permasalahan anda bersama praktisi hukum kami secara langsung</p>
                            </div>
                            <div className="bg-[#FFFFFF] border rounded-[4px] shadow-[10px_4px_20px_0px_rgba(61,141,255,0.15)] p-[18px] space-y-[8px]">
                                <div className="flex space-x-[8px]">
                                    <CheckCircleIcon className="text-[#7BD864]"/><h5 className="font-[600] text-[19px] leading-[24px] tracking-[0.15px] text-[#344054]">Customer Service</h5>
                                </div>
                                <p className="font-[400] text-[16px] leading-[24px] tracking-[0.5px] text-[#475467]">Melayani selama 24 jam melalui live chat untuk segala teknis pemesanan ataupun keluhan dalam penggunaan aplikasi</p>
                            </div>
                        </div>
                        <button className="bg-[#47BF37] px-[24px] py-[15px] rounded-[6px] text-white mt-[32px]">Mulai Sekarang</button>
                    </div> 
                </div>
                <div>
                    <img src="./home/customer@2x.png" className="w-[531px]" alt="foto"></img>
                </div>
            </div>
        </div>
        {/* SECTION SIX*/}
        <div className="mb-[54px] mx-[100px] mt-[24px] font-['Inter']">
            <h4 className="mb-[24px] font-semibold text-[#1D2939] text-[33px]">Artikel Terbaru</h4>
            <div className="flex justify-between space-x-[24px]">
                {ArtikelDummy.map((data, index) =>{
                    return <ArtikelCard key={index} data={data}/> 
                })}
            </div>
        </div>
         {/* SECTION SEVEN*/}
        <div className="text-white bg-gradient-to-r from-[#3D8DFF] to-[#2A41C7] font-['Open Sans'] flex justify-center">
            <div className="py-[56px]">
                <h1 className="text-[40px] font-bold">Awali kesuksesan anda bersama Halo Law!</h1>
                <p className="font-[200] pt-[16px]">Kini tidak lagi sulit mengurus segala legalitas hukum. Praktisi hukum kredibel, cepat, dan layanan konsultasi gratis.</p>
                <div className="flex justify-center pt-[56px]">
                    <button className="bg-[#47BF37] px-[24px] py-[15px] rounded-[6px]">Mulai Sekarang</button>   
                </div>   
            </div>
        </div>
    </>
        
   )
}

export default Homepage;