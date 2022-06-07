import { useState } from "react";
import Link from "next/link";
import Pagination from "../pagination/Pagination";

function DetailLayanan() {
  const PageName = "Properti";
  const [active, setActive] = useState(0);

  const sampleData = [
    {
      cover: "Tanah.png",
      dokumen: "Sertifikat Tanah",
      harga: "700.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Hak_Guna_Bangunan.jpg",
      dokumen: "Peningkatan Hak Guna Bangunan",
      harga: "400.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Balik_Nama.png",
      dokumen: "Akta Balik Nama",
      harga: "1.200.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Waris_Tanah.jpg",
      dokumen: "Ahli Waris Tanah",
      harga: "1.000.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Tukar_Menukar.png",
      dokumen: "Akta Tukar Menukar",
      harga: "900.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Jual_Beli.jpg",
      dokumen: "Akta Jual Beli",
      harga: "7.000.000",
      status: "Draft",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Hibah.jpg",
      dokumen: "Akta Hibah",
      harga: "900.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Pemberian_Hak_Tanggung.png",
      dokumen: "Akta Pemberian Hak Tanggungan",
      harga: "1.600.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Pembagian_Hak_Bersama.png",
      dokumen: "Akta Pembagian Hak Bersama",
      harga: "3.200.000",
      status: "Draft",
      modifikasi: "11/03/2022",
    },
    {
      cover: "Pemasukan.jpg",
      dokumen: "Pemasukan ke dalam perusahaan",
      harga: "3.000.000",
      status: "Aktif",
      modifikasi: "11/03/2022",
    },
  ];

  return (
    <div className="flex justify-center mx-4 md:mx-10 w-auto">
      <div className="w-full">
        {/* START: breadcrumbs */}
        <div className="py-8 pb-[10px] text-[#6C757D]">
          <div className="text-[14px] md:text-[16px] md:leading-[175%]">
            <p>
              <Link href="/admin">
                <a href="#" className="">
                  Dashboard{" "}
                </a>
              </Link>
              /
              <Link href="/admin/layanan">
                <a href="#"> Layanan </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}

        <div className="p-8 bg-white shadow-lg rounded-lg mb-6 ">
          {/* START: Heading */}
          <div className="flex flex-col gap-3 md:gap-6 mb-4 md:mb-6">
            <h4 className="font-semibold text-[#252A31] text-[33px] leading-10 tracking-[0.25px]">
              Properti
            </h4>
            <p className="font-regular text-[14px] leading-5 tracking-[0.25px]">
              Properti adalah penyebutan untuk bangunan atau tanah yang dimiliki
              oleh seseorang. Bisa dikatakan bahwa properti tidak hanya sebatas
              bangunan yang berdiri namun juga meliputi keterangan tanah beserta
              gedung yang berdiri di atasnya.
            </p>
          </div>
          <Link href={"/admin/layanan/properti/tambahDokumen"} className="">
            <button className="flex flex-row gap-2 px-6 py-[10px] rounded-lg border bg-white hover:bg-[#47BF37] text-[#116E1C] hover:text-white text-[14px] leading-[20px] tracking-[0.25px] items-center justify-center mb-4">
              <img src="/iconGoogle/add_circle.svg" alt="add" className="w-4" />
              <span className="self-center font-medium ml-2">
                Tambah Dokumen
              </span>
            </button>
          </Link>
          {/* END: Heading */}
          {/* START: Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full whitespace-nowrap">
              <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                <tr>
                  <td className="px-3">No</td>
                  <td className="px-3 text-center">
                    Cover
                  </td>
                  <td className="px-3 md:max-w-[600px] lg:w-[600px] text-left">
                    Dokumen
                  </td>
                  <td className="px-3">Harga</td>
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
                    <td className="py-2 text-center">{index + 1}</td>
                    <td className="py-2 table-cell">
                      <div className="flex justify-center">
                        <img
                          src={"/Dokumen/Properti/" + data.cover}
                          // /Dokumen/Properti/Tanah.png
                          alt={data.cover}
                          className="w-[72px]"
                        ></img>
                      </div>
                    </td>
                    <td className="py-2 px-4 ">{data.dokumen}</td>
                    <td className="py-2 text-[#1B8920] font-bold">
                      Rp.{data.harga}
                    </td>
                    <td className="text-center py-2">{data.status}</td>
                    <td className="text-center py-2">
                      {data.modifikasi}
                    </td>
                    <td className="pl-4 pr-9 md:pr-4 py-4 flex flex-row gap-6 flex-nowrap ">
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
          <div className="flex justify-between pt-8">
            <div className="flex gap-4">
              <p className="text-[#454D59] text-sm leading-20 tracking-[0.25px] self-center">
                Rows Per Page
              </p>
              <select className="border p-1 px-2">
                <option>5</option>
                <option>10</option>
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

export default DetailLayanan;
