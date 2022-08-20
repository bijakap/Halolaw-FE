import Link from "next/link";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import InfoIcon from "@mui/icons-material/Info";
import Select from "react-select";
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'; 
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { useEffect, useState } from "react";
import SuccesModal from "../modal/SuccesModal";
import { useRouter } from "next/router";
// import { Filter } from "@material-ui/icons";

function AddDokumen() {
  const router = useRouter()
  const PageName = "Tambah Dokumen";
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log("You clicked submit.");
  // }

  const [show, setShow] = useState([false,false,false])
  const [listKota, setListKota] = useState([null, null])
  const [modal, setModal] = useState(false)

  const handleClick = (index) => {
    const newShow = [...show]
    newShow[index] = !newShow[index]
    setShow(newShow)
  }


  if (typeof window === "undefined") {
    return null //return nothing on the server-side
  }

  const optionKota = [
    { value: "Pilih", label: "--Pilih--" },
    { value: "kab. Bandung", label: "kab. Bandung" },
    { value: "Kota Bandung", label: "Kota Bandung" },
    { value: "kab. Bandung Barat", label: "kab. Bandung Barat" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#3A57E8" : "#D1D5DB",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      padding: "2px 8px",
      borderRadius: "8px",
      marginBottom: "24px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "black",
      paddingLeft: "10px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
  };

  const umum = [
    "KTP asli",
    "NPWP",
    "Kartu Keuarga",
    "pajak Penghasilan",
    "Surat Nikah",
    "Pas Foto 3x4",
    "Pas Foto 4x6",
    "Surat Nikah",
  ];

  const properti = [
    "Pajak Bumi Bangunan",
    "Izin Mendirikan Bangunan",
    "Advis Planning",
    "Kartu Kavling",
    "Surat BPHTB",
    "Akta Jual Beli Tanah",
    "SHGB",
    "SHGU",
  ];
  const perusahaan = [
    "Akta Pendirian Perusahaan",
    "Anggaran Dasar",
    "Pengesahan perusahaan",
    "Bukti kepemilikan tempat usaha",
    "Berita acara RUPS ",
    "Akta Jual Beli Tanah",
    "Surat BPHTB",
    "Surat Keterangan Domisili ",
  ];

  // const [editorState, onEditorStateChange] = useState(null)
  const [value, setValue] = useState('');

  const  modules  = {
    toolbar: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script:  "sub" }, { script:  "super" }],
          ["blockquote", "code-block"],
          [{ list:  "ordered" }, { list:  "bullet" }],
          [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
          ["link", "image", "video"],
          ["clean"],
      ],
  };

  return (
    <div className="flex justify-center mx-4 md:mx-10 w-auto">
      <div className="w-full">
        {/* START: breadcrumbs */}
        <div className="py-8 pb-[10px] text-[#6C757D] mb-6">
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
              /
              <Link href="/admin/layanan/properti">
                <a href="#"> Properti </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        {/* START: SECTION-1 */}
        <div className="py-6 px-8 bg-white shadow-lg rounded-lg mb-6 flex flex-col gap-4 md:gap-8">
          <h4 className="font-semibold text-[#252A31] text-[33px] leading-10 tracking-[0.25px]">
            Tambah Dokumen Baru
          </h4>
          {/* START:Form-group */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Nama Dokumen <span className="text-[#C4351A]">*</span>
              </label>
              <input
                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2"
                type="name"
                required
                placeholder="nama dokumen"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Cover <span className="text-[#C4351A]">*</span>
              </label>
              <input
                className="text-base text-[#667085] file:text-[#475467] file:px-4 file:py-[6px] file:bg-[#F2F4F7] file:border-[#D0D5DD] file:rounded-lg file:mr-[10px]"
                type="file"
              ></input>
            </div>
            {/* START:CK_Editor */}
            {/* <div className="border border-[#98A2B3] rounded-lg min-h-[250px]"> */}
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Deskripsi <span className="text-[#C4351A]">*</span>
              </label>
              <div className="app">
                <ReactQuill 
                  theme="snow" 
                  value={value} 
                  onChange={setValue} 
                  modules={modules}
                  />
              </div>
            {/* </div> */}
            {/* END:CK_Editor */}
          </div>
          {/* END:Form-group */}
        </div>
        {/* END: SECTION-1 */}
        {/* START: SECTION-2 */}
        <div className="py-6 px-8 bg-white shadow-lg rounded-lg mb-6 flex flex-col gap-4 md:gap-6">
          <h6 className="font-bold text-[#252A31] text-[19px] leading-6 tracking-[0.15px]">
            Keperluan Dokumen
          </h6>
          {/* START:Form-group */}
          <div className="w-full flex flex-col gap-6">
            {/* START: Umum */}
            <div className="flex flex-col gap-2">
              {/* <Link href={"..."}> */}
                <p
                  onClick={() => handleClick(0)}
                  className="flex flex-row gap-[10px] font-bold text-[#344054] cursor-pointer"
                >
                  Umum
                  {
                    show[0] ? 
                    <KeyboardArrowUpIcon />
                    :
                    <KeyboardArrowDownRoundedIcon />
                  }
                </p>
              {/* </Link> */}
              <div className={`w-full ${show[0] ? "flex" : "hidden"} flex-row gap-[10px] flex-wrap whitespace-normal md:whitespace-nowrap"`}>
                {umum.map((data, index) => (
                  <div key={index} className="flex gap-4 items-center w-[230px] md:w-[300px]">
                    <input type="checkbox" id={index} className="scale-125" />
                    <label htmlFor={index}>{data}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* END: Umum */}
            {/* START: Properti */}
            <div className="flex flex-col gap-2">
                <p
                  onClick={() => handleClick(1)}
                  className="flex flex-row gap-[10px] font-bold text-[#344054] cursor-pointer"
                >
                  Properti
                  {
                    show[1] ? 
                    <KeyboardArrowUpIcon />
                    :
                    <KeyboardArrowDownRoundedIcon />
                  }
                </p>
              <div className={`w-full ${show[1] ? "flex" : "hidden"} flex-row gap-[10px] flex-wrap whitespace-normal md:whitespace-nowrap"`}>
                {properti.map((data, index) => (
                  <div key={index} className="flex gap-4 items-center w-[230px] md:w-[300px]">
                    <input type="checkbox" id={index} className="scale-125" />
                    <label htmlFor={index}>{data}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* END: Properti */}
            {/* START: Perusahaan */}
            <div className="flex flex-col gap-2">
                <p
                  onClick={() => handleClick(2)}
                  className="flex flex-row gap-[10px] font-bold text-[#344054] cursor-pointer"
                >
                  Perusahaan
                  {
                    show[2] ? 
                    <KeyboardArrowUpIcon />
                    :
                    <KeyboardArrowDownRoundedIcon />
                  }
                </p>
              <div className={`w-full ${show[2] ? "flex" : "hidden"} flex-row gap-[10px] flex-wrap whitespace-normal md:whitespace-nowrap"`}>
                {perusahaan.map((data, index) => (
                  <div key={index} className="flex gap-4 items-center w-[230px] md:w-[300px]">
                    <input type="checkbox" id={index} className="scale-125" />
                    <label htmlFor={index}>{data}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* END: Perusahaan */}
            {/* START: Dokumen Lainnya */}
            <div className="w-full lg:w-[474px]">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Dokumen lainnya <span className="text-[#C4351A]">*</span>
                </label>
                <input
                  className="w-full text-base px-4 py-2 border-b-2 border-b-[#0040FF] focus:outline-none"
                  type="text"
                  placeholder="misal : Pas foto 4x6"
                ></input>
              </div>
            </div>
            {/* END: Dokumen Lainnya */}
          </div>
          {/* END:Form-group */}
        </div>
        {/* END: SECTION-2 */}
        {/* START: SECTION-3 */}
        <div className="py-6 px-8 bg-white shadow-lg rounded-lg mb-6 flex flex-col gap-4 md:gap-6">
          <h6 className="font-bold text-[#252A31] text-[19px] leading-6 tracking-[0.15px]">
            Harga
          </h6>
          {/* START:Form-group */}
          <div className="flex flex-col">

            {/* <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0 w-full lg:w-[840px]">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  kabupaten/Kota <span className="text-[#C4351A]">*</span>
                </label>
                <div className="w-full mt-2">
                  <Select
                    options={optionKota}
                    styles={customStyles}
                    placeholder={"--Pilih--"}
                    // maxMenuHeight={250}
                    isSearchable={false}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Harga <span className="text-[#C4351A]">*</span>
                </label>
                <div className="relative flex flex-row border border-gray-300 rounded-lg mt-2 mb-6">
                  <span className="py-[10px] px-8 flex items-center rounded-l-lg bg-[#E8EDF1] text-[#252A31] font-medium">
                    Rp
                  </span>
                  <input
                    className="w-full text-base px-4 py-2 focus:outline-none focus:border-[#3A57E8] rounded-r-lg"
                    type="number"
                    placeholder="misal: 3000000"
                  ></input>
                </div>
              </div>
            </div> */}
            {
              listKota.map((data, index) => (
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0 w-full lg:w-[840px]">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      kabupaten/Kota <span className="text-[#C4351A]">*</span>
                    </label>
                    <div className="w-full mt-2">
                      <Select
                        options={optionKota}
                        styles={customStyles}
                        placeholder={"--Pilih--"}
                        // maxMenuHeight={250}
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Harga <span className="text-[#C4351A]">*</span>
                    </label>
                    <div className="relative flex flex-row border border-gray-300 rounded-lg mt-2 mb-6">
                      <span className="py-[10px] px-8 flex items-center rounded-l-lg bg-[#E8EDF1] text-[#252A31] font-medium">
                        Rp
                      </span>
                      <input
                        className="w-full text-base px-4 py-2 focus:outline-none focus:border-[#3A57E8] rounded-r-lg"
                        type="number"
                        placeholder="misal: 3000000"
                      ></input>
                    </div>
                  </div>
                </div>
              ))
            }

            <div>
              <button
                onClick={() => {
                  const newList = [...listKota]
                  newList.push(null)
                  setListKota(newList)
                }} 
                className="flex flex-row gap-2 px-6 py-[10px] rounded-lg border bg-white hover:bg-[#2A41C7] text-[#2A41C7] hover:text-white text-[14px] leading-[20px] tracking-[0.25px] items-center justify-center">
                <AddCircleOutlineRoundedIcon />
                <span className="self-center font-medium ml-2">
                  Tambah Kota
                </span>
              </button>
            </div>
          </div>
          {/* END:Form-group */}
        </div>
        {/* END: SECTION-3 */}
        {/* START: SECTION-4 */}
        <div className="py-6 px-8 bg-white shadow-lg rounded-lg mb-6 flex flex-col gap-4 md:gap-6">
          <h6 className="font-bold text-[#252A31] text-[19px] leading-6 tracking-[0.15px]">
            Gambar
          </h6>
          {/* START:Main-content */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Gambar <span className="text-[#C4351A]">*</span>
              </label>
              <input
                className="text-base text-[#667085] file:text-[#475467] file:px-4 file:py-[6px] file:bg-[#F2F4F7] file:border-[#D0D5DD] file:rounded-lg file:mr-[10px]"
                type="file"
              ></input>
            </div>
            <div className="w-auto gap-2 md:gap-6 flex mt-4 flex-wrap">
              <img
                src="/Dokumen/Properti/Pemasukan.jpg"
                className="h-[130px]"
              />
              <img src="/Dokumen/Properti/Hibah.jpg" className="h-[130px]" />
              <img
                src="/Dokumen/Properti/Jual_Beli.jpg"
                className="h-[130px]"
              />
              <img
                src="/Dokumen/Properti/Waris_Tanah.jpg"
                className="h-[130px]"
              />
            </div>
          </div>
          {/* END:Main-content */}
        </div>
        {/* END: SECTION-4 */}
        {/* START: SECTION-5 */}
        <div className="py-6 px-8 bg-white shadow-lg rounded-lg mb-6 flex flex-col gap-4 md:gap-6">
          <h6 className="font-bold text-[#252A31] text-[19px] leading-6 tracking-[0.15px]">
            Gambar
          </h6>
          {/* START:Main-content */}
          <div className="flex flex-row justify-between flex-wrap lg:flex-nowrap">
            <div className="flex gap-4 justifty-start items-center">
              <label className="relative flex justify-between group items-center">
                <input
                  type="checkbox"
                  className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                />
                <span className="w-10 h-6 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-[#3D8DFF] after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 group-hover:after:translate-x-1"></span>
              </label>
              <p className="font-regular tracking-[0.25px] leading-5 whitespace-nowrap">
                Simpan Sebagai Draft{" "}
                <span className="text-[#D0D5DD]">
                  <InfoIcon />
                </span>
              </p>
            </div>
            <div className="w-full flex flex-row justify-end items-center gap-6 mt-8 lg:mt-0">
              <input
                type="button"
                value="Batal"
                className="w-full md:w-[160px] flex justify-center bg-[#F2F4F7] text-[#475467] py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer"
              />
              <input
                onClick={() => setModal(!modal)}
                type="submit"
                value="Simpan dan Unggah"
                className="w-full md:w-[240px] flex justify-center bg-[#3A57E8] text-gray-100 py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer"
              />
            </div>
          </div>
          {/* END:Main-content */}
        </div>
        {/* END: SECTION-5 */}
      </div>
      <SuccesModal
        active={modal} 
        setActive={() => {
          router.push("/admin/layanan/properti")
        }} 
        message="Berhasil menambah dokumen baru"
      />
    </div>
  );
}

export default AddDokumen;
