import Link from "next/link";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import Select from "react-select";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { textAlign } from "@mui/system";

const TransaksiDokumen = () => {
  const PageName = "Dokumen Hukum";
  const [active, setActive] = useState(0);

  const sampleData = [
    {
      dokumen: "Peningkatan Hak Guna Bangunan",
      katergori: "Properti",
      client: "Gema Syihab",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Pendirian PT",
      katergori: "Pendirian Perusahaan",
      client: "Eleanor Pena",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Sertifikat Tanah",
      katergori: "Properti",
      client: "Guy Hawkins",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Pendirian Yayasan",
      katergori: "Pendirian Perusahaan",
      client: "Kristin Watson",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Peningkatan Hak Guna Bangunan",
      katergori: "Properti",
      client: "Theresa Webb",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Pendirian CV",
      katergori: "Pendirian Perusahaan",
      client: "Albert Flores",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Akta Balik Nama",
      katergori: "Properti",
      client: "Annette Black",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Ahli Waris Tanah",
      katergori: "Properti",
      client: "Marvin McKinney",
      tgl: "17/09/2021",
    },
    {
      dokumen: "Pendirian PT",
      katergori: "Pendirian Perusahaan",
      client: "Jenny Wilson",
      tgl: "16/09/2021",
    },
    {
      dokumen: "Pendirian PT",
      katergori: "Properti",
      client: "Arlene McCoy",
      tgl: "16/09/2021",
    },
  ];

  const sampleDataAktif = [
    {
      dokumen: "Sertifikat Tanah",
      kategori: "Properti",
      client: "Farizi Andira",
    },
    {
      dokumen: "Peningkatan Hak Guna Bangunan",
      kategori: "Properti",
      client: "Darlene Robertson",
    },
    {
      dokumen: "Sertifikat Tanah",
      kategori: "Properti",
      client: "Brooklyn Simmons",
    },
    {
      dokumen: "Pendirian PT",
      kategori: "Pendirian Perusahaan",
      client: "Eleanor Pena",
    },
    {
      dokumen: "Pendirian CV",
      kategori: "Pendirian Perusahaan",
      client: "Ralph Edwards",
    },
    {
      dokumen: "Sertifikat Tanah",
      kategori: "Properti",
      client: "Jane Cooper",
    },
    {
      dokumen: "Sertifikat Firma",
      kategori: "Properti",
      client: "Wade Warren",
    },
    {
      dokumen: "Sertifikat Yayasan",
      kategori: "Properti",
      client: "Esther Howard",
    },
    {
      dokumen: "Akta Balik Nama",
      kategori: "Properti",
      client: "Savannah Nguyen",
    },
    {
      dokumen: "Pendirian PT",
      kategori: "Pendirian Perusahaan",
      client: "Ronald Richards",
    },
  ];

  const sampleDataSelesai = [
    {
      dokumen: "Pendirian PT",
      kategori: "Pendirian Perusahaan",
      client: "Gema Syihab",
      praktisi: "Aditya Zhafir Dhiaulhaq",
    },
    {
      dokumen: "Akta Balik Nama",
      kategori: "Properti",
      client: "Courtney Henry",
      praktisi: "Aditya Zhafir Dhiaulhaq",
    },
    {
      dokumen: "Pendirian PT",
      kategori: "Pendirian Perusahaan",
      client: "Leslie Alexander",
      praktisi: "Dimas Rizqi Pangestu",
    },
    {
      dokumen: "Peningkatan Hak Guna Bangunan",
      kategori: "Properti",
      client: "Cody Fisher",
      praktisi: "Aditya Zhafir Dhiaulhaq",
    },
    {
      dokumen: "Sertifikat Tanah",
      kategori: "Properti",
      client: "Robert Fox",
      praktisi: "Randy Fahreza",
    },
    {
      dokumen: "Pendirian CV",
      kategori: "Pendirian Perusahaan",
      client: "Devon Lane",
      praktisi: "Aditya Zhafir Dhiaulhaq",
    },
    {
      dokumen: "Pendirian Firma",
      kategori: "Pendirian Perusahaan",
      client: "Jerome Bell",
      praktisi: "Dimas Rizqi Pangestu",
    },
    {
      dokumen: "Ahli Waris Tanah",
      kategori: "Properti",
      client: "Dianne Russell",
      praktisi: "Aditya Zhafir Dhiaulhaq",
    },
    {
      dokumen: "Pendirian Yayasan",
      kategori: "Pendirian Perusahaan",
      client: "Jacob Jones",
      praktisi: "Dimas Rizqi Pangestu",
    },
    {
      dokumen: "Peningkatan Hak Guna Bangunan",
      kategori: "Properti",
      client: "Floyd Miles",
      praktisi: "Randy Fahreza",
    },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#3A57E8" : "#D1D5DB",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      borderRadius: "8px",
      padding: "0 10px",
      fontSize: "12px",
      textAlign: "left",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#98A2B3",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
  };

  const optionPraktisi = [
    { value: "Aditya Zhafir", label: "Aditya Zhafir" },
    { value: "Randy Fahreza", label: "Randy Fahreza" },
    { value: "Dimas Rizqi Pangestu", label: "Dimas Rizqi Pangestu" },
  ];

  const [dataTest, setDataTest] = useState(sampleDataAktif);

  const handleChange = (event, index) => {
    console.log(event.value + " index : " + index);
  };

  return (
    <div className="flex justify-center mx-10 w-auto">
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
              <Link href="#">
                <a href="#"> Transaksi </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        {/* START: Box Content Table */}
        <div className="p-8 bg-white shadow-lg rounded-lg mb-6">
          <h5 className="font-semibold text-[#252A31] text-[33px] leading-10 tracking-[0.25px] mb-6">
            Transaksi - Dokumen
          </h5>
          {/* START: Section Table Selection */}
          <div className="border-b-2 flex gap-1 mb-6">
            <button
              className={`border-b-2 py-2 translate-y-[2.5px] px-3 rounded-t-lg ${
                active === 0 ? "border-green-500 bg-gray-100" : ""
              }`}
              onClick={() => {
                setActive(0);
              }}
            >
              <p
                className={`font-semibold text-[16px] leading-5 tracking-[0.25px] ${
                  active === 0 ? "text-[#252A31]" : "text-[#4F5E71]"
                }`}
              >
                Pending
              </p>
            </button>
            <button
              className={`border-b-2 py-2 translate-y-[2.5px] px-3 rounded-t-lg ${
                active === 1 ? "border-green-500 bg-gray-100" : ""
              }`}
              onClick={() => {
                setActive(1);
              }}
            >
              <p
                className={`font-semibold text-[16px] leading-5 tracking-[0.25px]  ${
                  active === 1 ? "text-[#252A31]" : "text-[#4F5E71]"
                }`}
              >
                Aktif
              </p>
            </button>
            <button
              className={`border-b-2 py-2 translate-y-[2.5px] px-3 rounded-t-lg ${
                active === 2 ? "border-green-500 bg-gray-100" : ""
              }`}
              onClick={() => {
                setActive(2);
              }}
            >
              <p
                className={`font-semibold text-[16px] leading-5 tracking-[0.25px]  ${
                  active === 2 ? "text-[#252A31]" : "text-[#4F5E71]"
                }`}
              >
                Selesai
              </p>
            </button>
          </div>
          {/* END: Section Table Selection */}
          {/* START: Search */}
          <div className="flex gap-4 mb-8">
            <div className="w-full md:w-auto">
              <input
                className="w-full xl:w-[475px] text-base px-4 py-[6px] border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]"
                type="search"
                placeholder="Search...."
              />
            </div>
            <button className="px-6 rounded-lg bg-[#3A57E8] hover:bg-[#2A41C7] text-white text-[16px] leading-[20px] tracking-[0.15px]">
              Cari
            </button>
          </div>
          {/* END: Search */}
          {/* START: Section Selection Table */}
          <div>
            {/* START: Table Pending */}
            <div
              className={`overflow-x-auto ${active === 0 ? "block" : "hidden"}`}
            >
              <table className="table-auto w-full">
                <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                  <tr className="">
                    <td className="md:px-5 px-2 py-4 bg-[#3A57E8] rounded-tl-lg">
                      <div className="flex justify-center">
                        <p>No</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Dokumen</p>
                        <button className="">
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Kategori</p>
                        <button className="">
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Client</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Tanggal</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Bukti</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8] rounded-tr-lg">
                      <div className="flex justify-start">
                        <p>Aksi</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                  {sampleData.map((data, index) => (
                    <tr
                      key={index}
                      className={` align-middle text-[14px] leading-[24px] text-[#101828] ${
                        index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                      }`}
                    >
                      <td className="py-2 text-center">{index + 1}</td>
                      <td className="py-2 px-3 w-auto  md:w-[300px]">
                        {data.dokumen}
                      </td>
                      <td className="py-2 px-2 md:px-3 ">{data.katergori}</td>
                      <td className="py-2 px-3">{data.client}</td>
                      <td className="px-3 py-2">{data.tgl}</td>
                      <td className="px-3 py-2 text-[#2A41C7]">
                        <ImageOutlinedIcon className="w-4" /> Unduh
                      </td>
                      <td className="py-2 pl-2 pr-4">
                        <div className="flex justify-center">
                          <button className="rounded-lg bg-white border-2 border-[#E0E0E0] py-[6px] px-6 text-[#116E1C]  hover:text-white hover:outline-none hover:bg-[#47BF37]">
                            <p className="font-medium text-sm tracking-[0.25px]">
                              Konfirmasi
                            </p>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* END: Table Pending */}
            {/* START: Table Aktif */}
            <div
              className={`overflow-x-auto ${active === 1 ? "block" : "hidden"}`}
            >
              <table className="table-auto w-full">
                <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                  <tr className="">
                    <td className="md:px-5 px-2 py-4 bg-[#3A57E8] rounded-tl-lg">
                      <div className="flex justify-center">
                        <p>No</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Dokumen</p>
                        <button className="">
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Kategori</p>
                        <button className="">
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Client</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Praktisi</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8] rounded-tr-lg">
                      <div className="flex justify-start">
                        <p>Aksi</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                  {dataTest.map((data, index) => (
                    <tr
                      key={index}
                      className={` align-middle text-[14px] leading-[24px] text-[#101828] ${
                        index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                      }`}
                    >
                      <td className="py-2 text-center">{index + 1}</td>
                      <td className="py-2 px-3 w-auto  md:w-[300px]">
                        {data.dokumen}
                      </td>
                      <td className="py-2 px-2 md:px-3 ">{data.kategori}</td>
                      <td className="py-2 px-3">{data.client}</td>
                      <td className="py-2">
                        <Select
                          options={optionPraktisi}
                          styles={customStyles}
                          placeholder={"-- Assign to --"}
                          maxMenuHeight={250}
                          onChange={(e) => {
                            handleChange(e, index);
                          }}
                        />
                      </td>
                      <td className="py-2 pl-2 pr-6">
                        <div className="flex justify-center">
                          <button className="rounded-lg bg-white border-2 border-[#E0E0E0] py-2 px-6 text-[#116E1C]  hover:text-white hover:outline-none hover:bg-[#47BF37]">
                            <p className="font-medium text-sm tracking-[0.25px]">
                              Detail
                            </p>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* END: Table Aktif */}
            {/* START: Table Selesai */}
            <div
              className={`overflow-x-auto ${active === 2 ? "block" : "hidden"}`}
            >
              <table className="table-auto w-full">
                <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                  <tr className="">
                    <td className="md:px-5 px-2 py-4 bg-[#3A57E8] rounded-tl-lg">
                      <div className="flex justify-center">
                        <p>No</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Dokumen</p>
                        <button className="">
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Kategori</p>
                        <button className="">
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Client</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8]">
                      <div className="flex">
                        <p>Praktisi</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 bg-[#3A57E8] rounded-tr-lg">
                      <div className="flex justify-center">
                        <p>Aksi</p>
                        <button>
                          <img src="/updown.svg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody className=" whitespace-nowrap">
                  {sampleDataSelesai.map((data, index) => (
                    <tr
                      key={index}
                      className={` align-middle text-[14px] leading-[24px] text-[#101828] ${
                        index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                      }`}
                    >
                      <td className="py-2 text-center">{index + 1}</td>
                      <td className="py-2 px-3 w-auto  md:w-[300px]">
                        {data.dokumen}
                      </td>
                      <td className="py-2 px-2 md:px-3 ">{data.kategori}</td>
                      <td className="py-2 px-3">{data.client}</td>
                      <td className="text-left py-2 px-3">{data.praktisi}</td>
                      <td className="py-2 pl-2 pr-6">
                        <div className="flex justify-start">
                          <button className="rounded-lg bg-white border-2 border-[#E0E0E0] py-2 px-6 text-[#116E1C]  hover:text-white hover:outline-none hover:bg-[#47BF37]">
                            <p className="font-medium text-sm tracking-[0.25px]">
                              Detail
                            </p>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* END: Table Selesai */}
          </div>
          {/* END: Section Selection Table */}
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
        {/* END: Box Content Table */}
      </div>
    </div>
  );
};

export default TransaksiDokumen;
