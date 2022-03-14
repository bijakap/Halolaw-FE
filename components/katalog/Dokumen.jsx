import react from "react";
import HomeIcon from '@mui/icons-material/Home';

function Dokumen(){
    function DummySearch(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    function onClickKategori(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    const dokumen = [
        {
            img : "/Properti/Tanah.png",
            judul : "Sertifikat Tanah",
            harga : "Rp700.000",
        },
        {
            img : "/Properti/Hak_Guna_Bangunan.jpg",
            judul : "Peningkatan Hak Guna Bangunan",
            harga : "Rp400.000",
        },
        {
            img : "/Properti/Balik_Nama.png",
            judul : "Akta Balik Nama",
            harga : "Rp1.000.000",
        },
        {
            img : "/Properti/Waris_Tanah.jpg",
            judul : "Ahli Waris Tanah",
            harga : "Rp1.200.000",
        },
        {
            img : "/Properti/Tukar_Menukar.png",
            judul : "Akta Tukar Menukar",
            harga : "Rp900.000",
        },
        {
            img : "/Properti/Jual_Beli.jpg",
            judul : "Akta Jual Beli",
            harga : "Rp700.000",
        },
        {
            img : "/Properti/Hibah.jpg",
            judul : "Akta Hibah",
            harga : "Rp900.000",
        },
        {
            img : "/Properti/Pemberian_Hak_Tanggung.png",
            judul : "Akta Pemberian Hak Tanggungan",
            harga : "Rp1.600.000",
        },
        {
            img : "/Properti/Pembagian_Hak_Bersama.png",
            judul : "Akta Pembagian Hak Bersama",
            harga : "Rp3.200.000",
        },
        {
            img : "/Properti/Pemasukan.jpg",
            judul : "Pemasukan ke dalam perusahaan",
            harga : "Rp3.000.000",
        },
    ]

    const tipeDokumen = "Properti"

    return(
        <div className="pb-[48px]">
            <div className="relative">
                <div className="absolute -z-10">
                    <img src="./kategori/Header.svg" className="w-[250vh] object-fill"></img>
                </div>
            </div>
            <div className="text-white mx-[25px] lg:mx-[100px] space-y-[0px] lg:space-y-[24px] pt-[12px] lg:pt-[32px]">
                <div className="">
                    <p className="font-[400] text-[8px] lg:text-[14px] leading-0 lg:leading-[20px] tracking-[0.25px]">
                    <a href="#" className=""><HomeIcon className="mb-1 scale-[0.7]"/>Home</a>
                    /
                    <a href="#">Pembuatan Dokumen</a>
                    /{tipeDokumen}
                    </p>
                </div>
                <div>
                    <p className="font-[700] text-[14px] lg:text-[33px] leading-0 lg:leading-[40px] tracking-[0.25px] text-center">Pembuatan Dokumen - {tipeDokumen}</p>
                </div>
            </div>
            <div className="mx-[25px] lg:mx-[100px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[24px] mt-[24px] lg:mt-[48px]">
                    {dokumen.map((data,index) => {
                        return (
                            <div className="flex justify-center">
                                <div className="rounded-[8px] border hover:border-2 hover:border-blue-600 w-auto lg:w-[291px] h-auto lg:h-[304px] bg-white p-[8px] lg:p-[16px] flex flex-col justify-between">
                                    <div className="w-[130px] h-[100px] lg:w-[259px] lg:h-[200px]">
                                        <img
                                        className="object-cover h-full  rounded-[8px]" 
                                        src={`./dokumen${data.img}`}
                                        ></img>
                                    </div>
                                
                                    <div className="space-y-[16px]">
                                        <p className="font-[700] text-[10px] lg:text-[14px] leading-0 lg:leading-[20px] tracking-[0.25px] text-[#344054]">{data.judul}</p>
                                        <p className="font-[400] text-[8px] lg:text-[12px] leading-0 lg:leading-[18px] tracking-[0.4px] font-[#252A31]">mulai dari <span className="font-[700] text-[#121F86]">{data.harga}</span></p>
                                    </div>
                                </div>
                            </div>   
                        )
                    }

                    )

                    }
                        {/* <div className="rounded-[8px] w-[291px] h-[304px] bg-white p-[16px] flex flex-col justify-between">
                            <img src={`./dokumen${dokumen[0].img}`}></img>
                            <div className="space-y-[16px]">
                                <p className="font-[700] text-[14px] leading-[20px] tracking-[0.25px] text-[#344054]">{dokumen[0].judul}</p>
                                <p className="font-[400] text-[12px] leading-[18px] tracking-[0.4px] font-[#252A31]">mulai dari <span className="font-[700] text-[#121F86]">{dokumen[0].harga}</span></p>
                            </div>
                        </div> */}
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Dokumen;
