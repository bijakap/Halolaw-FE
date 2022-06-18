import Link from "next/link";
import { useState } from "react";
import Select from "react-select";

function Profile() {
  const [name, setName] = useState("Farizi Andira");
  const [lahir, setLahir] = useState("Kota Bandung");
  const [telpon, setTelpon] = useState("082219545454");
  const [KTP, setKTP] = useState("3329152685000009");

  const optionKota = [
    { value: "Kota Bandung", label: "Kota Bandung" },
    { value: "Kab. Bandung", label: "Kab. Bandung" },
    { value: "Kab. Bandung Barat", label: "Kab. Bandung Barat" },
  ];

  const optionKecamatan = [
    { value: "Andir", label: "Andir" },
    { value: "Antapani", label: "Antapani" },
    { value: "Arcamanik", label: "Arcamanik" },
    { value: "Astana Anyar", label: "Astana Anyar" },
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
      color: "#98A2B3",
      paddingLeft: "10px",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
  };

  return (
    <div>
      <div className="mx-4">
        <div className="flex justify-center p-8">
          <div className="w-full md:w-auto">
            <div className="md:flex block gap-8 pb-[56px] border-b">
              <div className="md:w-[160px] w-full mb-4 md:mb-0">
                <p className="md:hidden block text-[#252A31] text-[23px] font-semibold leading-[32px] border-b pb-2 mb-8">
                  Informasi Umum
                </p>
                <div className="flex justify-center mx-auto w-[160px] h-[160px] mb-[18px]">
                  <img
                    src="/profiledummy.png"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <button className="w-[160px] flex justify-center mx-auto border-2 bg-white hover:bg-[#3A57E8] text-[#2A41C7] hover:text-white py-[10px] px-3 rounded-[8px] tracking-wide font-[500] cursor-pointer text-sm">
                  Upload
                </button>
              </div>
              <div className="w-full">
                <p className="md:block hidden text-[#252A31] text-[23px] font-semibold leading-[32px] border-b pb-2 mb-8">
                  Informasi Umum
                </p>
                <div className="w-full lg:w-[670px]">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Nama Lengkap <span className="text-[#C4351A]">*</span>
                    </label>
                    <input
                      className="w-full text-sm tacking-[0.25px] text-[#1D2939] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                      type="name"
                      required
                      placeholder="nama lengkap"
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
                        Kecamatan <span className="text-[#C4351A]">*</span>
                      </label>
                      <div className="w-full mt-2">
                        <Select
                          options={optionKecamatan}
                          styles={customStyles}
                          placeholder={"--Pilih--"}
                          // maxMenuHeight={250}
                          isSearchable={false}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
                    <div className="flex flex-col">
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Tempat Lahir <span className="text-[#C4351A]">*</span>
                      </label>
                      <input
                        className="w-full text-sm tacking-[0.25px] text-[#1D2939] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
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
                        className="w-full text-sm tacking-[0.25px] text-[#1D2939] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
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
                        className="w-full text-sm tacking-[0.25px] text-[#1D2939] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                        type="text"
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
                        className="w-full text-sm tacking-[0.25px] text-[#1D2939] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                        type="text"
                        value={KTP}
                        onChange={(e) => setKTP(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Simpan Data Perubahan"
                    className="w-full flex justify-center bg-[#3A57E8] hover:bg-[#2A41C7] text-white py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-12"
                  />
                </div>
              </div>
            </div>
            <Link href={"/editpassword"}>
              <div className="flex p-4 gap-8 cursor-pointer">
                <img src="setting 1.svg" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
