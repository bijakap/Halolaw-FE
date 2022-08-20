import { useState } from "react";
import Link from "next/link";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import TextAreaModal from "../modal/TextAreaModal";
import TextOnlyConfirmationModal from "../modal/TextOnlyConfirmationModal"

function DetailTransaksi() {
  const [active, setActive] = useState(0);
  const [TextArea, setTextArea] = useState(false)
  const [emptyTextArea, setEmptyTextArea] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const PageName = "Sertifikat Tanah";

  const sampleData = [
    {
      dokumen: "Scan/Foto Sertifikat Asli Hak Milik (SHM)",
      status: "Submitted",
      tgl: "14/12/2021",
    },
    {
      dokumen: "Scan/Foto izin mendirikan bangunan (IMB)",
      status: "Submitted",
      tgl: "14/12/2021",
    },
    {
      dokumen: "Scan/Foto Asli Sertifikat Hak Guna Usaha (SHGU)",
      status: "-",
      tgl: "-",
    },
    {
      dokumen: "Scan/Foto Surat Sertifikat Hak Pakai",
      status: "Submitted",
      tgl: "14/12/2021",
    },
    {
      dokumen: "Scan/Foto Asli Kartu tanda penduduk (KTP)",
      status: "Submitted",
      tgl: "14/12/2021",
    },
    {
      dokumen: "Scan/Foto Asli Kartu Keluarga (KK)",
      status: "Submitted",
      tgl: "14/12/2021",
    },
  ];

  const sampleData2 = [
    {
      tgl: "12/09/2021",
      waktu: "11.26",
      catatan:
        "Sampai saat ini saya sudah menerima semua berkas yang bapak kirimkan melalui aplikasi. saya juga sudah mulai nyicil untuk pembuatan dokumen SPPT/PBB.",
    },
    {
      tgl: "13/09/2021",
      waktu: "11.26",
      catatan:
        "Dokumen SPPT/PBB sadah selesai diurus, Tidak ada kendala sejauh ini. dokumen ini merupakan Surat Keputusan Kepala KPP mengenai pajak terutang yang harus dibayar dalam 1 (satu) tahun pajak.",
    },
    {
      tgl: "16/09/2021",
      waktu: "11.26",
      catatan:
        "Semua dokumen sudah terpenuhi, sekarang sedang saya proses untuk pembuatan sertifikat tanah bapak yang berada di Antapani, Bandung. perkiraan selesai besok sore, dan bapak bisa bertemu saya tanggal 18 di tempat biasa.",
    },
    {
      tgl: "17/09/2021",
      waktu: "11.26",
      catatan:
        "Hari ini sudah saya update semua berkas yang diperlukan untuk pengurusan sertifikat tanah, selanjutnya tinggal tanda tangan dari bapak Farizi saja. Saya bisa bertemu langsung dengan bapa kira kira besok siang, terima kasih.",
    },
  ];

  return (
    <div className="flex justify-center mx-10 w-auto">
      <div className="w-full">
        {/* START: breadcrumbs */}
        <div className="py-8 pb-[10px] text-[#6C757D]">
          <div className="text-[14px] md:text-[16px] md:leading-[175%]">
            <p>
              <Link href="/praktisi">
                <a href="#" className="">
                  Dashboard{" "}
                </a>
              </Link>
              /
              <Link href="/praktisi/transaksi">
                <a href="/praktisi/transaksi/DaftarTransaksi"> Transaksi </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        <div className="p-8 bg-white shadow-lg rounded-lg mb-6 ">
          {/* START: Heading */}
          <div className="mb-8">
            <h1 className="#text-[252A31] text-[28px] md:text-[33px] font-semibold leading-[40px] tracking-[0.25px] pb-6">
              Sertifikat Tanah
            </h1>
            {/* START: Card */}
            <div className="bg-[#F2F4F7] rounded-lg inline-block">
              <div className="flex p-6 gap-[32px]">
                <img
                  src="/profiledummy.png"
                  className="h-[70px] md:h-[80px] w-[70px] md:w-[80px] object-cover"
                />
                <div className="flex">
                  <div className="flex gap-4">
                    <div className="flex flex-col justify-between text-[#1D2939] font-semibold text-xs md:text-[14px] leading-[20px] tracking-[0.25px]">
                      <p>Client </p>
                      <p>Kategori</p>
                      <p>Invoice</p>
                    </div>
                    <div className="flex flex-col justify-between text-[#4A4A68] font-medium text-xs md:text-[14px] leading-[20px] tracking-[0.25px]">
                      <p>: Farizi Andira</p>
                      <p>: Properti</p>
                      <p>: INV/20211013/MPL/1667050146</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Card */}
          </div>
          {/* END: Header */}
          {/* START: Tab */}
          <div className="border-b flex gap-2">
            <button
              className={`border-b py-2 translate-y-[1px] px-3 rounded-t-lg ${
                active === 0 ? "border-green-500 bg-gray-100" : ""
              }`}
              onClick={() => {
                setActive(0);
              }}
            >
              Update Progress
            </button>
            <button
              className={`border-b py-2 translate-y-[1px] px-3 rounded-t-lg ${
                active === 1 ? "border-green-500 bg-gray-100" : ""
              }`}
              onClick={() => {
                setActive(1);
              }}
            >
              Dokumen Client
            </button>
          </div>
          {/* END: Tab */}
          {/* START: Update Progress */}
          <div className={`py-6 ${active == 0 ? "block" : "hidden"}`}>
            {/* START: update */}
            <div className="w-full bg-[#E8F5FF] p-2 md:p-6 rounded flex flex-col md:flex-row flex-wrap justify-between mb-6">
              <p className="font-regular text-left leading-6 tracking-[0.25px] md:w-3/5 text-[14px] sm:mb-4 md:mb-0">
                Lakukan perbaruan progres yang telah anda kerjakan secara
                berkala. Ini akan memberikan kepercayaan client pada anda{" "}
              </p>
              <button 
                onClick={() => setEmptyTextArea(!emptyTextArea)}
                className="flex px-6 py-2 rounded-lg border bg-[#47BF37] hover:bg-[#2CA428] text-white text-[14px] leading-[20px] tracking-[0.25px] items-center justify-center mt-4 sm:mt-0">
                <img
                  src="/iconGoogle/add_circle.svg"
                  alt="add"
                  className="w-4 invert"
                />
                <span className="self-center font-medium ml-2">
                  Tambah Progres
                </span>
              </button>
              <TextAreaModal
                active={emptyTextArea}
                setConfirm={() => setEmptyTextArea(!emptyTextArea)}
                setCancel={() => setEmptyTextArea(!emptyTextArea)}
                title="Catatan/progres anda"
                placeholder={"misal: saya telah menyelesaikan SHGB, besok saya akan menemui anda ..."}
              />
            </div>
            {/* END: update */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                  <tr>
                    <td className="px-3 hidden md:table-cell">No</td>
                    <td className="px-3">Tanggal</td>
                    <td className="px-3 hidden md:table-cell">Waktu</td>
                    <td className="text-left">Catatan</td>
                    <td className="px-3 text-left py-4">Aksi</td>
                  </tr>
                </thead>
                <tbody className="  ">
                  {sampleData2.reverse().map((data, index) => (
                    <tr
                      key={index}
                      className={` align-top text-center text-[14px] leading-[24px] text-[#232D42] ${
                        index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                      }`}
                    >
                      <td className="py-2 hidden md:table-cell">
                        {sampleData2.length - index}
                      </td>
                      <td className="py-2 hidden md:table-cell">{data.tgl}</td>
                      <td className="py-2 hidden md:table-cell">
                        {data.waktu}
                      </td>
                      <td className="p-4 md:p-2 table-cell md:hidden text-left">
                        {data.tgl} <br /> {data.waktu}
                      </td>
                      <td className="text-left py-2">{data.catatan}</td>
                      <td className="px-4 py-4 flex flex-row gap-4 flex-wrap md:flex-nowrap">
                        <div className="flex text-dark text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0 text-[#344054]">
                            <button
                              onClick={() => setTextArea(!TextArea)}
                              className="self-center font-medium ml-2 cursor-pointer hover:underline whitespace-nowrap">
                              <EditIcon className="text-[20px]" /> Edit
                            </button>
                          
                            <TextAreaModal
                              active={TextArea}
                              setConfirm={() => setTextArea(!TextArea)}
                              setCancel={() => setTextArea(!TextArea)}
                              title="Catatan/progres anda"
                              placeholder={"misal: saya telah menyelesaikan SHGB, besok saya akan menemui anda ..."}
                              value={data.catatan}
                            />
                        </div>
                        <div className="flex text-dark text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0 text-[#A41F12]">
                            <button 
                              onClick={() => setModalDelete(!modalDelete)}
                              className="self-center font-medium ml-2 cursor-pointer hover:underline whitespace-nowrap">
                              <DeleteOutlineIcon className="text-[20px]" />
                              Hapus
                            </button>
                            <TextOnlyConfirmationModal
                                active={modalDelete}
                                setConfirm={() => setModalDelete(!modalDelete)}
                                setCancel={() => setModalDelete(!modalDelete)}
                                title="Apakah Anda ingin menghapus catatan ini?"
                                message="Setelah Anda menghapus catatan ini maka client Anda tidak dapat melihat catatan ini kembali."
                                confirmText="Hapus"
                                confirmColor="#E55124"
                            />
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
              <table className="table-auto w-full whitespace-nowrap">
                <thead className="border-collapse text-center bg-[#3A57E8] text-white">
                  <tr>
                    <td className="px-3 py-4">No</td>
                    <td className="w-[500px] text-left">Dokumen</td>
                    <td className="px-3">Status</td>
                    <td className="px-3">Tanggal Modifikasi</td>
                    <td className="px-3 text-left">Aksi</td>
                  </tr>
                </thead>
                <tbody className="">
                  {sampleData.map((data, index) => (
                    <tr
                      key={index}
                      className={`text-center text-[14px] leading-[24px] text-[#232D42] ${
                        index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"
                      }`}
                    >
                      <td className="py-4">{index + 1}</td>
                      <td className="text-left">{data.dokumen}</td>
                      <td className="">{data.status}</td>
                      <td className="">{data.tgl}</td>
                      <td className="px-4">
                        <div className="flex text-dark text-[14px] leading-[20px] tracking-[0.25px] items-center mt-4 sm:mt-0">
                          <img
                            src="/iconGoogle/download.svg"
                            alt="add"
                            className="w-4"
                          />
                          <a className="self-center font-medium ml-2 cursor-pointer hover:underline">
                            Download
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
        </div>
      </div>
    </div>
  );
}

export default DetailTransaksi;
