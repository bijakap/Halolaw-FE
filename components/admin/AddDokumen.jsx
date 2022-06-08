import Link from "next/Link";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Select from "react-select";
// import { Filter } from "@material-ui/icons";

function AddDokumen() {
  const PageName = "Tambah Dokumen";
  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked submit.");
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
              <Link href={"..."}>
                <a
                  onClick={handleClick}
                  className="flex flex-row gap-[10px] font-bold text-[#344054]"
                >
                  Umum
                  <KeyboardArrowDownRoundedIcon />
                </a>
              </Link>
              <div className="w-full flex flex-row gap-[10px] flex-wrap whitespace-normal md:whitespace-nowrap">
                {umum.map((data, index) => (
                  <div className="flex gap-4 items-center w-[230px] md:w-[300px]">
                    <input type="checkbox" id={index} class="scale-125" />
                    <label htmlFor={index}>{data}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* END: Umum */}
            {/* START: Properti */}
            <div className="flex flex-col gap-2">
              <Link href={"..."}>
                <a
                  onClick={handleClick}
                  className="flex flex-row gap-[10px] font-bold text-[#344054]"
                >
                  Properti
                  <KeyboardArrowDownRoundedIcon />
                </a>
              </Link>
              <div className="w-full flex flex-row gap-[10px] flex-wrap whitespace-normal md:whitespace-nowrap">
                {properti.map((data, index) => (
                  <div className="flex gap-4 items-center w-[230px] md:w-[300px]">
                    <input type="checkbox" id={index} class="scale-125" />
                    <label htmlFor={index}>{data}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* END: Properti */}
            {/* START: Perusahaan */}
            <div className="flex flex-col gap-2">
              <Link href={"..."}>
                <a
                  onClick={handleClick}
                  className="flex flex-row gap-[10px] font-bold text-[#344054]"
                >
                  Perusahaan
                  <KeyboardArrowDownRoundedIcon />
                </a>
              </Link>
              <div className="w-full flex flex-row gap-[10px] flex-wrap whitespace-normal md:whitespace-nowrap">
                {perusahaan.map((data, index) => (
                  <div className="flex gap-4 items-center w-[230px] md:w-[300px]">
                    <input type="checkbox" id={index} class="scale-125" />
                    <label htmlFor={index}>{data}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* END: Perusahaan */}
            {/* START: Dokumen Lainnya */}

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
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
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
              <input
                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6"
                type="text"
                // value={kecamatan}
                // onChange={(e) => setKecamatan(e.target.value)}
              ></input>
            </div>
          </div>
          {/* END:Form-group */}
        </div>
        {/* END: SECTION-3 */}
      </div>
    </div>
  );
}

export default AddDokumen;
