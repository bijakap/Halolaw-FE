import Link from "next/link";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

const TransaksiDokumen = () => {
  const PageName = "Dokumen Hukum";
  const [active, setActive] = useState(0);

  const sampleData = []
  for (var i = 0; i < 10; i++){
    sampleData.push({
      client: "Gema Syihab",
      no_telp: "082219542323",
      katergori: "Properti, Pendirian Perusahaan",
      tgl: "11/03/2022",
    })
  }


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
          <h5 className="font-semibold text-[#252A31] text-[33px] leading-10 tracking-[0.25px] mb-6">Transaksi - Konsultasi</h5>
          {/* START: Section Selection */}
          <div className="border-b-2 flex gap-4 mb-6">
            <button className={`border-b-2 py-2 translate-y-[2.5px] ${active === 0 ? "border-green-500" : ""}`} onClick={() => {setActive(0)}}>
              <p className={`font-semibold text-[16px] leading-5 tracking-[0.25px]  ${active === 0 ? "text-[#252A31]" : "text-[#4F5E71]"}` }>Pending</p>
            </button>
            <button className={`border-b-2 py-2 translate-y-[2.5px] ${active === 1 ? "border-green-500" : ""}`} onClick={() => {setActive(1)}}>
              <p className={`font-semibold text-[16px] leading-5 tracking-[0.25px]  ${active === 1 ? "text-[#252A31]" : "text-[#4F5E71]"}` }>Aktif</p>
            </button>
            <button className={`border-b-2 py-2 translate-y-[2.5px] ${active === 2 ? "border-green-500" : ""}`} onClick={() => {setActive(2)}}>
              <p className={`font-semibold text-[16px] leading-5 tracking-[0.25px]  ${active === 2 ? "text-[#252A31]" : "text-[#4F5E71]"}` }>Selesai</p>
            </button>
          </div>
          {/* END: Section Selection */}
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
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="border-collapse text-center bg-[#3A57E8] text-white">
              <tr className=''>
                <td className='md:px-5 px-2 py-4 bg-[#3A57E8] rounded-tl-lg'>
                  <div className='flex justify-center'>
                    <p>No</p>
                    <button>
                      <img src='/updown.svg'/>
                    </button>
                  </div>              
                </td>
                <td className='px-3 bg-[#3A57E8]'>
                    <div className='flex'>
                    <p>Client</p>
                    <button className=''>
                      <img src='/updown.svg'/>
                    </button>
                  </div>          
                </td>
                <td className='px-3 bg-[#3A57E8]'>
                    <div className='flex'>
                    <p>Nomor HP</p>
                    <button className=''>
                      <img src='/updown.svg'/>
                    </button>
                  </div>          
                </td>
                <td className='px-3 bg-[#3A57E8]'>
                  <div className='flex'>
                    <p>Kategori</p>
                    <button>
                      <img src='/updown.svg'/>
                    </button>
                  </div>     
                </td>
                <td className='px-3 bg-[#3A57E8]'>
                  <div className='flex'>
                    <p>Tanggal</p>
                    <button>
                      <img src='/updown.svg'/>
                    </button>
                  </div>     
                </td>
                <td className='px-3 bg-[#3A57E8] rounded-tr-lg'>
                <div className='flex'>
                    <p>Aksi</p>
                    <button>
                      <img src='/updown.svg'/>
                    </button>
                  </div>     
                </td>
              </tr>
              </thead>
              <tbody className="">
                {sampleData.map((data, index) => (
                  <tr
                    key={index}
                    className={` align-middle text-[14px] leading-[24px] text-[#101828] ${
                      index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                    }`}
                  >
                    <td className="py-2 text-center">{index + 1}</td>
                    <td className="py-2 px-3 w-auto  md:w-[300px]">
                      {data.client}
                    </td>
                    <td className="py-2 px-2 md:px-3 ">{data.no_telp}</td>
                    <td className="py-2 px-3">
                      {data.katergori}
                    </td>
                    <td className="text-center py-2">{data.tgl}</td>
                    <td className="py-2">
                      <div className="flex justify-center">
                        <button className="rounded-lg bg-white border-2 border-[#E0E0E0] py-2 px-6">
                          <p className="text-[#116E1C] font-medium text-sm tracking-[0.25px]">Detail</p>
                        </button>
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
                <option>5</option>
                <option>10</option>
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
  )
}

export default TransaksiDokumen;