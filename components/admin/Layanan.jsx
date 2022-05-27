import { useState } from "react";
import Link from "next/link";

function Layanan() {
  const [active, setActive] = useState(0);

  const sampleData = [
    {
      cover: "properti.svg",
      layanan: "Properti",
      dokumen: "10",
      modifikasi: "11/03/2022",
    },
    {
      cover: "haki.svg",
      layanan: "Hak Kekayaan Intelektual",
      dokumen: "7",
      modifikasi: "11/03/2022",
    },
    {
      cover: "pendirianPerusahaan.svg",
      layanan: "Pendirian Perusahaan",
      dokumen: "8",
      modifikasi: "11/03/2022",
    },
    {
      cover: "closedcompany.svg",
      layanan: "Penutupan Perusahaan",
      dokumen: "7",
      modifikasi: "11/03/2022",
    },
    {
      cover: "briefcase.svg",
      layanan: "Perizinan Usaha",
      dokumen: "4",
      modifikasi: "11/03/2022",
    },
    {
      cover: "contract.svg",
      layanan: "Kontrak Kerja",
      dokumen: "6",
      modifikasi: "11/03/2022",
    },
    {
      cover: "documents.svg",
      layanan: "Pembuatan & Perubahan Akta",
      dokumen: "6",
      modifikasi: "11/03/2022",
    },
  ];

  return (
    <div className="flex justify-center mx-10 w-auto">
      <div className="w-full pt-8">
        {/* START: Card tambah layanan */}
        <Link href={"/admin/layanan/detailLayanan"}>
          <div className="inline-block bg-white border rounded-lg p-6 mb-4 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.05)] hover:cursor-pointer">
            <div className="flex flex-row md:justify-between w-auto gap-8">
              <div className="flex flex-row flex-nowrap gap-4">
                <img src="/sidebar/layanan-hover.svg" alt="" className="w-8" />
                <div className="flex flex-col">
                  <p className="font-semibold text-base">Tambah layanan baru</p>
                  <p className="font-regular text-xs">
                    Layanan pengurusan legalitas
                  </p>
                </div>
              </div>
              <img src="/layanan-tambah.svg" alt="" />
            </div>
          </div>
        </Link>
        {/* END: Card tambah layanan */}

        <div className="p-8 bg-white shadow-lg rounded-lg mb-6 ">
          {/* START: Search */}
          <div className="flex gap-4 mb-8">
            <div className="w-full md:w-auto">
              <input
                className="w-full xl:w-[475px] text-base px-4 py-[6px] border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]"
                type="search"
                placeholder="Search...."
              />
            </div>
            <button className="px-6 rounded-lg bg-[#3A57E8] text-white text-[16px] leading-[20px] tracking-[0.15px]">
              Cari
            </button>
          </div>
          {/* END: Search */}
          {/* START: Table */}
          <table className="table-auto w-full lg:max-w-7xl">
            <thead className="border-collapse text-center bg-[#3A57E8] text-white">
              <tr>
                <td className="px-2">No</td>
                <td className="px-2 text-center">Cover</td>
                <td className="md:max-w-[600px] lg:w-[600px] text-left">
                  Layanan
                </td>
                <td className="px-3">Dokumen</td>
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
                  <td className="py-2 text-center">{index + 1}</td>
                  <td className="py-2 relative">
                    <div className="flex justify-center">
                      <img
                        src={"/icon/" + data.cover}
                        alt={data.cover}
                        className="w-12"
                      ></img>
                    </div>
                  </td>
                  <td className="py-2 ">{data.layanan}</td>
                  <td className="text-center py-2">{data.dokumen}</td>
                  <td className="text-center py-2">{data.modifikasi}</td>
                  <td className="px-4 py-4 flex flex-row gap-6 flex-wrap ">
                    <div className="flex text-dark text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0">
                      <img
                        src="/iconGoogle/edit.svg"
                        alt="add"
                        className="w-4"
                      />
                      <Link href={"/admin/layanan/detailLayanan"}>
                        <a className="self-center font-medium ml-2 cursor-pointer hover:underline">
                          Edit
                        </a>
                      </Link>
                    </div>
                    <div className="flex text-dark text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0">
                      <img
                        src="/iconGoogle/delete.svg"
                        alt="add"
                        className="w-4"
                      />
                      <a className="self-center font-medium ml-2 cursor-pointer hover:underline text-[#A41F12]">
                        Hapus
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* END: Table */}
        </div>
      </div>
    </div>
  );
}

export default Layanan;
