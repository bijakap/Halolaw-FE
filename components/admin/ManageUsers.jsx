import Link from "next/link";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

const ManageUsers = () => {
  const PageName = "Konsultasi";
  const [active, setActive] = useState(0);

  const sampleData = [
    {
      foto: "praktisi1.png",
      nama: "Aditya Zhafir Dhiaulhaq",
      email: "adityazhafir@gmail.com",
      telpon: "082219542312",
      domisili: "Bandung",
      revenue: "7.300.000",
    },
    {
      foto: "praktisi2.png",
      nama: "Cameron Williamson",
      email: "camerow@gmail.com",
      telpon: "082219542312",
      domisili: "Jakarta",
      revenue: "8.000.000",
    },
    {
      foto: "praktisi3.png",
      nama: "Brooklyn Simmons",
      email: "BrooklynSi@gmail.com",
      telpon: "082219542312",
      domisili: "Tanjung Pinang",
      revenue: "9.700.000",
    },
    {
      foto: "praktisi4.png",
      nama: "Dimas Rizqi Pangestu",
      email: "DimasRizqi@gmail.com",
      telpon: "082219542312",
      domisili: "Palangkaraya",
      revenue: "6.000.000",
    },
    {
      foto: "praktisi5.png",
      nama: "Jenny Wilson",
      email: "JennyWilson@gmail.com",
      telpon: "082219542312",
      domisili: "Semarang",
      revenue: "5.000.000",
    },
    {
      foto: "praktisi6.png",
      nama: "Guy Hawkins",
      email: "Guy Hawkins",
      telpon: "082219542312",
      domisili: "Tangerang",
      revenue: "7.300.000",
    },
    {
      foto: "praktisi7.png",
      nama: "Randy Faheza",
      email: "RandyFaheza@gmail.com",
      telpon: "082219542312",
      domisili: "Bandung",
      revenue: "2.700.000",
    },
    {
      foto: "praktisi8.png",
      nama: "Jacob Jones",
      email: "JacobJones@gmail.com",
      telpon: "082219542312",
      domisili: "Cimahi",
      revenue: "5.000.000",
    },
    {
      foto: "praktisi9.png",
      nama: "Savannah Nguyen",
      email: "Savannah@gmail.com",
      telpon: "082219542312",
      domisili: "Tasikmalaya",
      revenue: "6.070.000",
    },
    {
      foto: "praktisi10.png",
      nama: "Darlene Robertson",
      email: "DarleneRob@gmail.com",
      telpon: "082219542312",
      domisili: "Garut",
      revenue: "4.200.000",
    },
  ];

  const sampleData2 = [
    {
      foto: "klien1.png",
      nama: "Farizi Andira",
      email: "fariziandira@gmail.com",
      telpon: "082219542312",
      domisili: "Bandung",
    },
    {
      foto: "klien2.png",
      nama: "Eleanor Pena",
      email: "EleanorPena@gmail.com",
      telpon: "082219542312",
      domisili: "Jakarta",
    },
    {
      foto: "klien3.png",
      nama: "Arlene McCoy",
      email: "ArleneMcCoy@gmail.com",
      telpon: "082219542312",
      domisili: "Tanjung Pinang",
    },
    {
      foto: "klien4.png",
      nama: "Kathryn Murphy",
      email: "KathrynMurp@gmail.com",
      telpon: "082219542312",
      domisili: "Palangkaraya",
    },
    {
      foto: "klien5.png",
      nama: "Theresa Webb",
      email: "TheresaWebb@gmail.com",
      telpon: "082219542312",
      domisili: "Semarang",
    },
    {
      foto: "klien6.png",
      nama: "Courtney Henry",
      email: "CourtneyHen@gmail.com",
      telpon: "082219542312",
      domisili: "Tangerang",
    },
    {
      foto: "klien7.png",
      nama: "Jerome Bell",
      email: "JeromeBell@gmail.com",
      telpon: "082219542312",
      domisili: "Bandung",
    },
    {
      foto: "klien8.png",
      nama: "Marvin McKinney",
      email: "MarvinKinney@gmail.com",
      telpon: "082219542312",
      domisili: "Cimahi",
    },
    {
      foto: "klien9.png",
      nama: "Darrell Steward",
      email: "DarrellStew@gmail.com",
      telpon: "082219542312",
      domisili: "Tasikmalayat",
    },
    {
      foto: "klien10.png",
      nama: "Devon Lane",
      email: "DevonLane@gmail.com",
      telpon: "082219542312",
      domisili: "Garut",
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
        {/* START: Box Content Table */}
        <div className="p-8 bg-white shadow-lg rounded-lg mb-6">
          <h5 className="font-semibold text-[#252A31] text-[33px] leading-10 tracking-[0.25px] mb-6">
            Users
          </h5>
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
          {/* START: Tab */}
          <div className="border-b flex gap-2">
            <button
              className={`border-b py-2 translate-y-[1px] ${
                active === 0 ? "border-green-500" : ""
              }`}
              onClick={() => {
                setActive(0);
              }}
            >
              Praktisi
            </button>
            <button
              className={`border-b py-2 translate-y-[1px] ${
                active === 1 ? "border-green-500" : ""
              }`}
              onClick={() => {
                setActive(1);
              }}
            >
              Klien
            </button>
          </div>
          {/* END: Tab */}
          {/* START: Update Progress */}
          <div className={`py-6 ${active == 0 ? "block" : "hidden"}`}>
            <div className="overflow-x-auto">
              <table className="table-auto w-full lg:max-w-7xl whitespace-nowrap">
                <thead className="border-collapse bg-[#3A57E8] text-white">
                  <tr>
                    <td className="px-3 py-4">No</td>
                    <td className="px-3 lg:px-0">Foto</td>
                    <td className="px-3 lg:px-0">Nama Lengkap</td>
                    <td className="px-3 lg:px-0">Email</td>
                    <td className="px-3 lg:px-0">No HP</td>
                    <td className="px-3 lg:px-0">Domisili</td>
                    <td className="px-3 lg:px-0">Revenue</td>
                    <td className="px-3 lg:px-0 text-left">Aksi</td>
                  </tr>
                </thead>
                <tbody className="  ">
                  {sampleData.map((data, index) => (
                    <tr
                      key={index}
                      className={` align-top text-[14px] leading-[24px] text-[#232D42] ${
                        index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                      }`}
                    >
                      <td className="p-2 text-center">{index + 1}</td>
                      <td className="py-2">
                        <img
                          src={"/users/praktisi/" + data.foto}
                          alt={data.foto}
                        />
                      </td>
                      <td className="p-2 md:px-0">{data.nama}</td>
                      <td className="p-2">{data.email}</td>
                      <td className="p-2 md:px-0">{data.telpon}</td>
                      <td className="py-2 px-4 md:px-0">{data.domisili}</td>
                      <td className="p-2 md:px-0 font-bold text-[#1B8920]">{data.revenue}</td>
                      <td className="px-4 py-4 flex flex-row gap-6 flex-wrap">
                        <div className="flex text-dark text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0">
                          <img
                            src="/iconGoogle/edit.svg"
                            alt="add"
                            className="w-4"
                          />
                          <a className="self-center font-medium ml-2 cursor-pointer hover:underline">
                            Edit
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* END: Update Progress */}
          {/* START: Dokement Client */}
          <div className={`py-6 ${active == 1 ? "block" : "hidden"}`}>
            <div className="overflow-x-auto">
              <table className="table-auto w-full lg:max-w-7xl whitespace-nowrap">
                <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                  <tr>
                    <td className="px-3 py-4">No</td>
                    <td className="px-3">Foto</td>
                    <td className="px-3">Nama Lengkap</td>
                    <td className="px-3">Email</td>
                    <td className="px-3">No HP</td>
                    <td className="px-3">Domisili</td>
                    <td className="px-3 text-left">Aksi</td>
                  </tr>
                </thead>
                <tbody className="">
                  {sampleData2.map((data, index) => (
                    <tr
                      key={index}
                      className={` align-top text-[14px] leading-[24px] text-[#232D42] ${
                        index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                      }`}
                    >
                      <td className="py-2 text-center">{index + 1}</td>
                      <td className="py-2">
                        <img
                          src={"/users/klien/" + data.foto}
                          alt={data.foto}
                        />
                      </td>
                      <td className="p-2 md:px-0">{data.nama}</td>
                      <td className="p-2 md:px-0">{data.email}</td>
                      <td className="p-2 md:px-0">{data.telpon}</td>
                      <td className="p-2 md:px-0">{data.domisili}</td>
                      <td className="px-4 py-4 flex flex-row gap-6 flex-wrap ">
                        <div className="flex text-dark text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0">
                          <img
                            src="/iconGoogle/edit.svg"
                            alt="add"
                            className="w-4"
                          />
                          <a className="self-center font-medium ml-2 cursor-pointer hover:underline">
                            Edit
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* END: Dokement Client */}
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
};

export default ManageUsers;
