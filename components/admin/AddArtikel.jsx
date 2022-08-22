import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'; 
import { useState } from "react";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import SuccesModal from "../modal/SuccesModal";
import { useRouter } from "next/router";

const AddArtikel = () => {
  const router = useRouter()
  const PageName = "Tambah Artikel";
  const [value, setValue] = useState("")
  const [active, setActive] = useState(false)

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

  
  if (typeof window === "undefined") {
    return null //return nothing on the server-side
  }

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
              <Link href="/admin/artikel">
                <a href="#"> Artikel </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        {/* STRART: main-content */}
        <div className="p-8 bg-white shadow-lg rounded-lg mb-6">
          {/* START: FULL-SECTION */}
          <div className="w-full flex flex-col gap-10">
            {/* START: SECTION-1 */}
            <div className="w-full">
              <h4 className="text-[#252A31] text-[23px] font-semibold leading-[32px] mb-8">
                Tambah Artikel Baru
              </h4>
              {/* START:Form-group */}
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Judul Artikel <span className="text-[#C4351A]">*</span>
                  </label>
                  <input
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2"
                    type="name"
                    required
                    placeholder="judul artikel"
                  />
                </div>
                {/* START:CK_Editor */}
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Isi Artikel <span className="text-[#C4351A]">*</span>
                </label>
                <div className="app">
                  <ReactQuill 
                    theme="snow" 
                    value={value} 
                    onChange={setValue} 
                    modules={modules}
                    />
                </div>
                {/* END:CK_Editor */}

                {/* START:kanan-kiri */}
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                  {/* START:Penulis */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Penulis <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2"
                      type="text"
                      placeholder="nama penulis"
                    ></input>
                  </div>
                  {/* END:Penulis */}
                  {/* START:Tag */}
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Tag <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2"
                      type="text"
                      placeholder="Tambah tag"
                    ></input>
                  </div>
                  {/* END:Tag */}
                </div>
                {/* END:kanan-kiri */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Cover <span className="text-[#C4351A]">*</span>
                  </label>
                  <input
                    className="text-base text-[#667085] file:text-[#475467] file:px-4 file:py-[6px] file:bg-[#F2F4F7] file:border-[#D0D5DD] file:rounded-lg file:mr-[10px]"
                    type="file"
                  ></input>
                </div>
              </div>
              {/* END:Form-group */}
            </div>
            {/* END: SECTION-1 */}
            {/* START: SECTION-2 */}
            <div className="flex gap-4 justifty-start items-center">
              <label className="relative flex justify-between group items-center">
                <input
                  type="checkbox"
                  className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                />
                <span className="w-10 h-6 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-[#3D8DFF] after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 group-hover:after:translate-x-1"></span>
              </label>
              <p className="font-regular tracking-[0.25px] leading-5">
                Simpan Sebagai Draft{" "}
                <span className="text-[#D0D5DD]">
                  <InfoIcon />
                </span>
              </p>
            </div>
            {/* END: SECTION-2 */}
            {/* START: SECTION-3 */}
            <div className="w-full flex flex-row justify-end items-center gap-6">
              <input
                onClick={() => router.push("/admin/artikel")}
                type="button"
                value="Batal"
                className="w-full md:w-[160px] flex justify-center bg-[#F2F4F7] text-[#475467] py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-12"
              />
              <input
                onClick={() => setActive(!active)}
                type="submit"
                value="Simpan dan Unggah"
                className="w-full md:w-[240px] flex justify-center bg-[#3A57E8] text-gray-100 py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-12"
              />
            </div>
            {/* END: SECTION-3 */}
          </div>
          {/* END: FULL-SECTION */}
        </div>
        {/* STRART: main-content */}
      </div>
      <SuccesModal
        active={active}
        setActive={() => setActive(!active)}
        message="Berhasil menambahkan artikel baru"
      />
    </div>
  );
};

export default AddArtikel;
