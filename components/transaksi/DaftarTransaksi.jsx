import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CardTransaksi from "./CardTransaksi";
import InformationModal from "../modal/InformationModal";
import { useState } from "react";

function DaftarTransaski() {
  const [active, setActive] = useState(false)
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#3A57E8" : "#D1D5DB",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      borderRadius: "8px",
      paddingLeft: "10px",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#98A2B3",
      paddingLeft: "10px",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
  };

  const optionKategori = [
    { value: "Properti", label: "Properti" },
    { value: "Pendirian Perusahaan", label: "Pendirian Perusahaan" },
    { value: "Penutupan Perusahaan", label: "Penutupan Perusahaan" },
    { value: "Haki", label: "Haki" },
    { value: "Perizinan Usaha", label: "Perizinan Usaha" },
    { value: "Kontrak Kerja", label: "Kontrak Kerja" },
    {
      value: "Pembuatan & Perubahan Akta",
      label: "Pembuatan & Perubahan Akta",
    },
  ];

  const optionStatus = [
    { value: "Aktif", label: "Aktif" },
    { value: "Selesai", label: "Selesai" },
    { value: "Pending", label: "Pending" },
  ];

  const tempData = [
    {
      invoice: "INV/20220419/001",
      status: "Pending",
      judul: "Sertifikat Tanah - Properti",
      harga: "Rp700.000",
      praktisi: "Farizi Andira",
      img: "/Dokumen/Properti/Tanah.png",
    },
    {
      invoice: "INV/20220419/002",
      status: "Selesai",
      judul: "Pendirian PT - Pendirian Perusahaan",
      harga: "Rp700.000",
      praktisi: "Ronald Richards",
      img: "/Dokumen/Properti/Hak_Guna_Bangunan.jpg",
    },
    {
      invoice: "INV/20220419/002",
      status: "Aktif",
      judul: "Pendirian PT - Pendirian Perusahaan",
      harga: "Rp700.000",
      praktisi: "Ronald Richards",
      img: "/Dokumen/Properti/Hak_Guna_Bangunan.jpg",
    },
  ];

  return (
    <div className="flex justify-center mx-4 xl:mx-auto mb-8">
      <div className="xl:w-auto w-full">
        <div className="py-8">
          <h1 className="font-semibold text-[23px] leading-[32px]">
            Daftar Transaski
          </h1>
        </div>
        <div className="xl:flex block md:gap-[47px] gap-2">
          <div className="flex justify-between gap-4 xl:mb-0 mb-4">
            <div className="xl:w-[250px] w-full">
              <Select
                options={optionKategori}
                styles={customStyles}
                placeholder={"--Pilih--"}
                maxMenuHeight={250}
                isSearchable={false}
              />
            </div>
            <div className="xl:w-[250px] w-full">
              <Select
                options={optionStatus}
                styles={customStyles}
                placeholder={"--Pilih--"}
                maxMenuHeight={250}
                isSearchable={false}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <input
                className="w-full xl:w-[475px] text-base px-4 py-[6px] border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]"
                type="search"
                placeholder="Search...."
              />
              {/* <div className='absolute top-1 right-2'>
                                <SearchIcon className='text-[18px] text-gray-500 mt-[4px] cursor-pointer' />
                            </div> */}
            </div>
            <button className="px-6 rounded-lg bg-[#3A57E8] text-white text-[16px] leading-[20px] tracking-[0.15px]">
              Cari
            </button>
          </div>
        </div>
        <div className="mt-8">
          {/* card */}
          {tempData.map((data, index) => (
            <CardTransaksi
              props={data}
              key={index}
              href={["/DetailTransaksi", "/invoice"]}
              setActive={() => setActive(!active)}
              active={active}
            />
          ))}
        </div>
        <div className="inline-block mt-3">
          <div className="flex gap-6">
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <NavigateBeforeIcon className="text-[#D0D5DD]" />
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#6982F1] text-white w-8 h-8 flex items-center justify-center cursor-pointer">
                <span className="text-[14px] font-semibold leading-[16px] tracking-[1.25px]">
                  1
                </span>
              </div>
              <div className="bg-white text-[#667085] w-8 h-8 flex items-center justify-center cursor-pointer">
                <span className="text-[14px] font-semibold leading-[16px] tracking-[1.25px]">
                  2
                </span>
              </div>
              <div className="bg-white text-[#667085] w-8 h-8 flex items-center justify-center cursor-pointer">
                <span className="text-[14px] font-semibold leading-[16px] tracking-[1.25px]">
                  3
                </span>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <NavigateNextIcon className="text-[#4A4A68]" />
            </div>
          </div>
        </div>
      </div>
      <InformationModal
        active={active} 
        setActive={() => setActive(!active)}
        message={"Perumahan The Luxury no. B7, Jl. Pangeran Diponegoro, Desa Ancolmekar, Kec. Anjasari,  Kabupaten Bandung, Jawa Barat, Kode pos 40379 "}
        title="Alamat"
      />
    </div>
  );
}

export default DaftarTransaski;
