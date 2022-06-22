import { useState } from "react";
import Link from "next/link";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Pagination from "../pagination/Pagination";

function ArtikelAdmin() {
  const PageName = "Properti";
  const [active, setActive] = useState(0);

  const sampleData = [
    {
      cover: "artikel1.jpg",
      judul: "Legalitas tanda tangan elektronik",
      penulis: "Lilina Melati",
      status: "Aktif",
      modifikasi: "25/01/2022",
    },
    {
      cover: "artikel2.jpg",
      judul: "Pimpinan pengadilan berkualitas dan ",
      penulis: "Agustin Rifki",
      status: "Aktif",
      modifikasi: "23/01/2022",
    },
    {
      cover: "artikel3.jpg",
      judul: "Gelombang online dalam perkembangan hukum",
      penulis: "Iqbal Setiawan",
      status: "Aktif",
      modifikasi: "22/01/2022",
    },
    {
      cover: "artikel4.jpg",
      judul: "Tafsir Iktikad Baik dalam Sengketa Pertanahan",
      penulis: "Olivia Ryhe",
      status: "Aktif",
      modifikasi: "19/01/2022",
    },
    {
      cover: "artikel5.jpg",
      judul: "Pembangunan hukum perdata melalui yurisprudensi",
      penulis: "Muh Akbar",
      status: "Aktif",
      modifikasi: "18/01/2022",
    },
    {
      cover: "artikel6.jpg",
      judul: "Hukum menghadiri pengadilan versi Islam",
      penulis: "Febriana",
      status: "Draft",
      modifikasi: "17/01/2022",
    },
    {
      cover: "artikel7.jpg",
      judul: "Ditjen Cipta Karya Usulkan Empat Paten ke Kemenkumham",
      penulis: "Marsya Sania",
      status: "Draft",
      modifikasi: "16/01/2022",
    },
    {
      cover: "artikel8.jpg",
      judul: "Legalitas tanda tangan elektronik",
      penulis: "Lilina Melati",
      status: "Aktif",
      modifikasi: "25/01/2022",
    },
    {
      cover: "artikel9.jpg",
      judul: "Tips hukum bagi konten kreator terhindar kak cipta",
      penulis: "Muh Akbar",
      status: "Aktif",
      modifikasi: "14/01/2022",
    },
    {
      cover: "artikel10.jpg",
      judul: "Informasi melalui handphone bukan pelanggaran kode etik",
      penulis: "Agustin Rifki",
      status: "Aktif",
      modifikasi: "13/01/2022",
    },
  ];

  return (
    <div className="flex justify-center mx-4 md:mx-10 w-auto mt-8">
      <div className="w-full">
        <div className="p-8 bg-white shadow-lg rounded-lg mb-6 ">
          {/* START: Heading */}
          <h4 className="font-semibold text-[#252A31] text-[33px] leading-10 tracking-[0.25px]">
            Artikel
          </h4>
          <Link href={"/admin/artikel/tambahArtikel"}>
            <button className="flex flex-row gap-2 px-6 py-[10px] rounded-lg border bg-white hover:bg-[#47BF37] text-[#116E1C] hover:text-white text-[14px] leading-[20px] tracking-[0.25px] items-center justify-center mt-6 mb-4">
              <AddCircleOutlineRoundedIcon className="w-4" />
              <span className="self-center font-medium">
                Tambah Artikel
              </span>
            </button>
          </Link>
          {/* END: Heading */}
          {/* START: Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full whitespace-nowrap">
              <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                <tr>
                  <td className="px-3">Highlight</td>
                  <td className="px-3 text-center">
                    Cover
                  </td>
                  <td className="px-3 md:max-w-[500px] lg:w-[500px] text-left">
                    Judul Artikel
                  </td>
                  <td className="px-2 text-left">Penulis</td>
                  <td className="px-3">Status</td>
                  <td className="px-3">Modifikasi</td>
                  <td className="px-3 py-4 text-left">Aksi</td>
                </tr>
              </thead>
              <tbody className="  ">
                {sampleData.map((data, index) => (
                  <tr
                    key={index}
                    className={` align-middle text-[14px] leading-[24px] text-[#232D42] ${
                      index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                    }`}
                  >
                    {/* <td className="py-2 text-center">{index + 1}</td> */}
                    <td className="py-2 table-cell">
                      <div className="flex justify-center items-center">
                        <input
                          type="checkbox"
                          className="appearance checked:bg-blue-500 scale-125"
                        />
                      </div>
                    </td>
                    <td className="py-2 table-cell">
                      <div className="flex justify-center">
                        <img
                          src={"/artikel/" + data.cover}
                          // /Dokumen/Properti/Tanah.png
                          alt={data.cover}
                          className="w-[72px]"
                        ></img>
                      </div>
                    </td>
                    <td className="py-2 px-2 md:px-3">{data.judul}</td>
                    <td className="py-2 text-left">{data.penulis}</td>
                    <td className="text-center py-2">{data.status}</td>
                    <td className="text-center py-2">
                      {data.modifikasi}
                    </td>
                    <td className="px-4 py-4 flex flex-row gap-4">
                        <div className="flex text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0 text-[#344054]">
                          <Link href="/admin/artikel/tambahArtikel">
                            <a className="self-center font-medium ml-2 cursor-pointer hover:underline whitespace-nowrap">
                              <EditIcon className="text-[20px]" /> Edit
                            </a>
                          </Link>
                        </div>
                        <div className="flex text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0 text-[#A41F12]">
                          <Link href="...">
                            <a className="self-center font-medium ml-2 cursor-pointer hover:underline whitespace-nowrap">
                              <DeleteOutlineIcon className="text-[20px]" />
                              Hapus
                            </a>
                          </Link>
                        </div>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* END: Table */}
          <div className="flex justify-between pt-8">
            <div className="flex gap-4">
              <p className="text-[#454D59] text-sm leading-20 tracking-[0.25px] self-center">
                Rows Per Page
              </p>
              <select className="border p-1 px-2">
                <option>10</option>
                <option>15</option>
              </select>
            </div>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtikelAdmin;
