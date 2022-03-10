import react from "react";
import SearchIcon from '@mui/icons-material/Search';

function Kategori(){
    function DummySearch(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    const Kategori = [
        {
            logo : "properti.svg",
            judul : "Properti",
            deksripsi : "Sertifikat Tanah, Ahli Waris Tanah, Hak Guna Bangunan",
        },
        {
            logo : "haki.svg",
            judul : "Hak Kekayaan Intelektual",
            deksripsi : "Pendaftaran Hak Cipta, Pendaftaran Hak Paten, Pendaftaran Merek, dll",
        },
        {
            logo : "pendirianPerusahaan.svg",
            judul : "Pendirian Perusahaan",
            deksripsi : "Pendirian PT, Pendirian CV, Pendirian Yayasan, Firma Hukum, dll",
        },
        {
            logo : "closedcompany.svg",
            judul : "Penutupan Perusahaan",
            deksripsi : "Penutupan PT, Penutupan CV, Penutupan PMA",
        },
        {
            logo : "briefcase.svg",
            judul : "Perizinan Usaha",
            deksripsi : "Izin Usaha Mikro menengah, NPWP, OSS, NIB Ekspor dan Impor",
        },
        {
            logo : "contract.svg",
            judul : "Kontrak Kerja",
            deksripsi : "Environmental legal issues might occur since the planned business",
        },
        {
            logo : "documents.svg",
            judul : "Pembuatan & Perubahan Akta",
            deksripsi : "Perubahan Akta Anggaran Dasar, Akta Jual Beli, Pengumuman Koran, dll",
        },
    ]

    return(
        <div>
            <div className="relative">
                <img src="./kategori/Header.svg" className="w-full absolute -z-10"></img>
            </div>
            <div className="mx-[100px] pt-[48px] pb-[40px]">
                <div className="font-['Inter'] text-white space-y-[12px] mb-[48px]">
                    <h4 className="text-[33px] leading-[40px] font-[700]">Pembuatan Dokumen Hukum</h4>
                    <p className="text-[14px] leading-[140%] font-[500]">Tersedia pembuatan dokumen hukum yang lengkap dan terpercaya</p>
                </div>
                <div class="">
                    <div class="flex h-[48px]">
                        <div className="h-full bg-white flex items-center justify-center rounded-[4px] rounded-r-none" onClick={DummySearch}>
                            <SearchIcon className="text-[#6982F1]"/>
                        </div>
                        <input type="search" className="
                            form-control w-full px-3 py-[14px] text-gray-700 bg-white bg-clip-padding border-gray-300  rounded-[4px] rounded-l-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-[400] placeholder:text-[14px] placeholder:leading-[20px] placeholder:tracking-[0.25px] placeholder:text-[#8C8CA2]"
                        id="search"
                        placeholder="Keyword: Nama dokumen hukum"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-[72px]">
                <div className="grid grid-cols-3 mx-[100px] gap-y-[32px] gap-x-[32px]">
                {Kategori.map((index) => {
                    return(
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-between bg-[#FCFCFC] border shadow-[0_4px_10px_0px_rgba(0,0,0,0.1)] w-[420px] h-[236px] p-[24px]">
                                <div className="w-[56px] h-[56px]">
                                    <img src={`./icon/${index.logo}`} alt=""></img>
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-semibold tracking-[0.5px] text-[#344054] mb-[16px]">{index.judul}</h4>
                                    <p className="text-[16px] text-[#475467]">
                                        {index.deksripsi}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    )
                }) }
                
                {/* <div className="flex flex-col justify-between bg-[#FCFCFC] border shadow-[0_18px_58px_16px_rgba(0,0,0,0.06)] w-[392px] h-[236px] p-[24px]">
                        <div className="w-[56px] h-[56px]">
                            <img src={`./icon/${Kategori[0].logo}`} alt=""></img>
                        </div>
                        <div>
                            <h4 className="text-[22px] font-semibold tracking-[0.5px] text-[#344054] mb-[16px]">Dokumen Properti</h4>
                            <p className="text-[16px] text-[#475467]">
                                Sertifikat Tanah, 
                                Ahli Waris Tanah,
                                Hak Guna Bangunan
                            </p>
                        </div>
                </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default Kategori;
