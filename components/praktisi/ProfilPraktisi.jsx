import Link from "next/link";
import Select from "react-select";
import { useState } from "react";

function ProfilPraktisi() {
  const [name, setName] = useState("Aditya Zhafir Dhiaulhaq");
  const [kota, setKota] = useState("Kabupaten Bandung");
  const [kecamatan, setKecamatan] = useState("Dayeuhkolot");
  const [lahir, setLahir] = useState("Kota Bandung");
  const [telpon, setTelpon] = useState("082219645373");
  const [KTP, setKTP] = useState("327303837750");
  const [pekerjaan, setPekerjaan] = useState("Notaris");
  const [pengalaman, setPengalaman] = useState("10");
  const [rekening, setRekening] = useState("3110909987764");

  const optionPekerjaan = [
    { value: "Pilih", label: "--Pilih--" },
    { value: "Notaris", label: "Notaris" },
    { value: "Notaris & PPAT", label: "Notaris & PPAT" },
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

  return (
    <div className="flex justify-center mx-10 my-8 w-auto">
      <div className="w-full">
        <div className="p-8 bg-white shadow-lg rounded-lg ">
          {/* START: Form Section */}
          <div className="md:flex block gap-8 pb-[56px] border-b">
            {/* START: Head - avatar */}
            <div className="md:w-[160px] w-full mb-4 md:mb-0">
              <p className="md:hidden block text-[#252A31] text-[23px] font-semibold leading-[32px] border-b pb-2 mb-8">
                Informasi Umum
              </p>
              <div className="flex justify-center mx-auto w-[160px] h-[160px] mb-[18px]">
                <img
                  src="/profilPraktisi.jpg"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <button className="w-[160px] flex justify-center mx-auto border-2 bg-white text-[#2A41C7] p-3 rounded-[8px] tracking-wide font-[500] cursor-pointer">
                Upload
              </button>
            </div>
            {/* END: Head - avatar */}
            <div className="w-full px-4 md:px-6">
              {/* START: Informasi Umum */}
              <div className="w-full">
                <p className="md:block hidden text-[#252A31] text-[23px] font-semibold leading-[32px] border-b pb-2 mb-8">
                  Informasi Umum
                </p>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Nama Lengkap <span className="text-[#C4351A]">*</span>
                  </label>
                  <input
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                    type="name"
                    required
                    placeholder="mail@gmail.com"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Domisili / Kota tinggal saat ini{" "}
                      <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="text"
                      value={kota}
                      onChange={(e) => setKota(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Kecamatan <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="text"
                      value={kecamatan}
                      onChange={(e) => setKecamatan(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Tempat Lahir <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="text"
                      value={lahir}
                      onChange={(e) => setLahir(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Tanggal Lahir <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="date"
                      value=""
                    ></input>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Nomor Telepon (WhatsApp){" "}
                      <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="number"
                      value={telpon}
                      onChange={(e) => setTelpon(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Nomor Induk Kependudukan{" "}
                      <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="number"
                      value={KTP}
                      onChange={(e) => setKTP(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
              {/* END: Informasi Umum */}
              {/* START: Pekerjaan */}
              <div className="w-full mt-6 md:mt-10">
                <p className="block text-[#252A31] text-[23px] font-semibold leading-[32px] border-b pb-2 mb-8">
                  Pekerjaan
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Pekerjaan <span className="text-[#C4351A]">*</span>
                    </label>
                    <div className="w-full mt-2">
                      <Select
                        options={optionPekerjaan}
                        styles={customStyles}
                        placeholder={"--Pilih--"}
                        // maxMenuHeight={250}
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Pengalaman Kerja (tahun){" "}
                      <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="number"
                      value={pengalaman}
                      onChange={(e) => setPengalaman(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Nomor Rekening <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="number"
                      value={rekening}
                      onChange={(e) => setRekening(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide formFile">
                      Foto/Scan Buku Rekening{" "}
                      <span className="text-[#C4351A]">*</span>{" "}
                      <small>(jpg/png)</small>
                    </label>
                    <input
                      className="w-full text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6 file:py-2 file:px-4 file:border-0 file:mr-6"
                      type="file"
                    ></input>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Simpan Data Perubahan"
                  className="w-full flex justify-center bg-[#3A57E8] text-gray-100 py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-12"
                />
              </div>
              {/* END: Pekerjaan */}
            </div>
          </div>
          {/* END: Form Section */}
          {/* START: Setting Section */}
          <Link href={"/praktisi/pengaturan/pengaturanAkun"}>
            <div className="flex p-4 gap-8 cursor-pointer items-center">
              <img src="/setting 1.svg" />
              <div>
                <p className="text-[19px] font-semibold text-[#344054] tracking-[0.15px] leading-[24px]">
                  Pengaturan Akun
                </p>
                <p className="text-[14px] font-medium text-[#667085] tracking-[0.25px] leading-[20px]">
                  Perbarui password dan hapus akun
                </p>
              </div>
            </div>
          </Link>
          {/* END: Setting Section */}
        </div>
      </div>
    </div>
  );
}

export default ProfilPraktisi;
