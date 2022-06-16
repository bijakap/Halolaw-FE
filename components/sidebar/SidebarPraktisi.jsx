import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from "react";

const SidebarPraktisi = ({ActiveNumber, childActiveNumber}) =>{
  const router = useRouter();
  const [ active , setActive ] = useState(ActiveNumber);
  const [ childActive, setChildActive ] = useState(childActiveNumber);

  return (
    <div className="fixed z-10">
      <div className="h-screen w-[250px] shadow-md bg-white">
        <div className="border-b py-6 mb-4 flex justify-center cursor-pointer">
          <Link href={"/praktisi"}>
            <img src='/logoSidebar.svg' className='md:w-[148px]'/>
          </Link>
        </div>
        <div className='flex flex-col gap-2'>
          <div onClick={() => {setActive(0); router.push("/praktisi");}} className={`${active === 0 ? "bg-[#3A57E8] text-white py-2" : "py-2 bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}>
            <div className="flex gap-4">
              <div className='self-center'>
                {
                  active === 0 ?
                    <img src='/sidebar/dashboard-active.svg'/> 
                    : 
                    <img src='/sidebar/dashboard.svg'/>
                }
              </div>
              <p className='text-[16px] font-normal leading-7'>Dashboard</p>
            </div>
          </div>
          <div onClick={() => {setActive(1); router.push("/praktisi/transaksi");}} className={`${active === 1 ? "bg-[#3A57E8] text-white py-2" : "py-2 bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}>
            <div className="flex gap-4">
              <div className='self-center'>
                {
                  active === 1 ?
                    <img src='/sidebar/transaksi-active.svg'/> 
                    : 
                    <img src='/sidebar/transaksi.svg'/>
                }
              </div>
              <p className='text-[16px] font-normal leading-7'>Transaksi</p>
            </div>
          </div>
          <div onClick={() => setActive(2)} className={`${active === 2 ? "bg-[#3A57E8] text-white py-2" : "py-2 bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}>
            <div className="flex gap-4">
              <div className='self-center'>
              {
                  active === 2 ?
                    <img src='/sidebar/setting-active.svg'/> 
                    : 
                    <img src='/sidebar/setting.svg'/>
                }
              </div>
              <p className='text-[16px] font-normal leading-7'>Pengaturan</p>
            </div>
          </div>
          <div className={active === 2 ? "block" : "hidden"}>
            <Link href={"/praktisi/pengaturan/pengaturanAkun"}>
              <div onClick={() => setChildActive(0)} className={`${childActive === 0 ? "text-[#3A57E8] bg-[#F2F4F7]" : ""} mx-4 py-2 bg-white text-[#8A92A6] cursor-pointer hover:text-[#3A57E8] hover:bg-[#F2F4F7]`}>
                <p className='ml-6'>Pengaturan Akun</p>
              </div>
            </Link>
            <Link href={"/praktisi/pengaturan/privacyPolicy"}>
              <div onClick={() => setChildActive(1)} className={`${childActive === 1 ? "text-[#3A57E8] bg-[#F2F4F7]" : ""} mx-4 py-2 bg-white text-[#8A92A6] cursor-pointer hover:text-[#3A57E8] hover:bg-[#F2F4F7]`}>
                <p className='ml-6'>Privacy Policy</p>
              </div>
            </Link>
            <Link href={"/praktisi/pengaturan/termCondition"}>
              <div onClick={() => setChildActive(2)} className={`${childActive === 2 ? "text-[#3A57E8] bg-[#F2F4F7]" : ""} mx-4 py-2 bg-white text-[#8A92A6] cursor-pointer hover:text-[#3A57E8] hover:bg-[#F2F4F7]`}>
                <p className='ml-6'>Term & Condition</p>
              </div>
            </Link>
          </div>
          <div className='mx-4 border-b'>
          </div>
        </div>
      </div>
    </div>
  )
}
SidebarPraktisi.defaultProps = {
  ActiveNumber : 0,
  childActiveNumber : 0,
}

export default SidebarPraktisi;