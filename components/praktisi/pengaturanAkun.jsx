import TextOnlyConfirmationModal from "../modal/TextOnlyConfirmationModal"
import SuccesModal from "../modal/SuccesModal"
import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link";

function PengaturanAkun() {
  const PageName = "Pengaturan Akun";
  const email = "testing@gmail.com";
  const router = useRouter()
  const [active, setActive] = useState(false)
  const [activeDelete, setActiveDelete] = useState(false)
  const [activeSuccess, setActiveSuccess] = useState(false)
  return (
    <div className="flex justify-center mx-10 w-auto">
      {/* START: Content */}
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
              <Link href="/praktisi/pengaturan">
                <a href="#"> Pengaturan </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        {/* START: Main-Content */}
        <div className="p-8 bg-white shadow-lg rounded-lg mb-6">
          <div className="flex md:flex-row flex-col md:gap-20 gap-6 border-b pb-10 mb-10">
            {/* START: kiri */}
            <div className="md:w-[484px] w-auto order-2 md:order-none">
              <p className="md:block hidden text-[#252A31] text-[23px] font-semibold leading-[32px] pb-2 mb-8">
                Ganti Password
              </p>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email <span className="text-[#C4351A]">*</span>
                </label>
                <input
                  type="email"
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6 text-[#667085] bg-gray-100"
                  value={email}
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Password Lama <span className="text-[#C4351A]">*</span>
                </label>
                <input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6 placeholder:text-[14px]"
                  type="password" placeholder="*****************"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Password Baru <span className="text-[#C4351A]">*</span>
                </label>
                <input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6 placeholder:text-[14px]"
                  type="password" placeholder="Ganti Password Baru"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Konfirmasi Password Baru{" "}
                  <span className="text-[#C4351A]">*</span>
                </label>
                <input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-6 placeholder:text-[14px]"
                  type="password" placeholder="Konfirmasi Password baru"
                />
              </div>
              <button 
                  onClick={() => setActive(!active)}
                  className="w-full flex justify-center bg-[#3A57E8] hover:bg-[#2A41C7] text-gray-100 py-[10px] rounded-[8px] text-sm tracking-wide font-[500] cursor-pointer mt-2">
                  Ganti Password
              </button>
            </div>
            {/* END: kiri */}
            {/* START: kanan */}
            <div className="md:pt-16 order-1 md:order-none">
              <p className="md:hidden block text-[#252A31] text-[23px] font-semibold leading-[32px] pb-2 mb-2 md:mb-8">
                Ganti Password
              </p>
              <div className="p-4 w-auto md:w-[280px] border rounded">
                <img
                  src="/concept-of-data-privacy-and-policy 1.svg"
                  className="flex justify-center mx-auto"
                />
                <p className="font-[400] text-[12px] leading-[18px] tracking-[0.4px] text-[#344054] mt-4 text-justify">
                  Demi keamanan dan kenyamanan dalam bertransaksi menggunakan
                  layanan Halo Law, kami menyarankan Anda untuk melakukan
                  perubahan kata sandi secara berkala
                </p>
              </div>
            </div>
            {/* END: kanan */}
            {/* End: Main-Content */}
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-[19px] font-semibold text-[#344054] tracking-[0.15px] leading-[24px] pb-1">
                Hapus Akun
              </p>
              <p className="text-[14px] font-normal text-[#667085] tracking-[0.25px] leading-[20px]">
                Delete your account and account data
              </p>
            </div>
            <div>
            <button
                onClick={() => setActiveDelete(!activeDelete)}
                className="rounded-lg py-[10px] px-6 border text-[#840D0B] hover:text-white hover:bg-[#E55124] hover:outline-none font-medium text-[14px] leading-[20px] tracking-[0.25px]">
                Hapus
            </button>
            </div>
          </div>
        </div>
      </div>
      <TextOnlyConfirmationModal
            active={active}
            setConfirm={() => {
                setActive(!active)
                setActiveSuccess(!activeSuccess)
                }}
            setCancel={() => setActive(!active)}
            title={"Apakah Anda ingin melakukan penggantian password?"}
            message={"Setelah Anda mengganti password, maka password berubah menggunakan password terbaru."}
            confirmText="Ganti Password"
        />
        <SuccesModal
            active={activeSuccess}
            setActive={() => setActiveSuccess(!activeSuccess)}
            message={"Berhasil mengganti password"}
        />
        <TextOnlyConfirmationModal
            active={activeDelete}
            setCancel={() => setActive(!activeDelete)}
            setConfirm={() => {
                router.push("/")
            }} 
            title={"Apakah Anda ingin menghapus akun ini?"}
            message={"Setelah Anda menghapus akun, seluruh data akan dihapus & akun ini di nonaktifkan untuk melakukan transaksi apapun pada Halo Law."}
            confirmText="Hapus Akun"
            confirmColor={"#E55124"}
        />
    </div>
  );
}

export default PengaturanAkun;
