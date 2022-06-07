import Link from "next/Link";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function AddDokumen() {
  const PageName = "Tambah Dokumen";
  function handleClick(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

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
                <a onClick={handleClick} className="flex flex-row gap-[10px]">
                  Umum
                  <KeyboardArrowDownRoundedIcon />
                </a>
              </Link>
              <div className="w-full md:w-[260px] flex flex-row gap-2">
                <div className="kiri">
                  <div>
                    <input type="checkbox" id="umum-1" class="appearance" />
                    <label htmlFor="umum-1">KTP asli</label>
                  </div>
                </div>
                <div className="kanan">
                  <div>
                    <input type="checkbox" id="umum-1" class="appearance" />
                    <label htmlFor="umum-1">KTP asli</label>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Umum */}
          </div>
          {/* END:Form-group */}
        </div>
        {/* END: SECTION-2 */}
      </div>
    </div>
  );
}

export default AddDokumen;
