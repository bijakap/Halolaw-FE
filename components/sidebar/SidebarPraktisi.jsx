import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";

const SidebarPraktisi = () =>{
  const [ active , setActive ] = useState(0);
  const [ childActive, setChildActive ] = useState(0);

  return (
    <div className="fixed">
      <div className="h-screen w-[250px] shadow-md bg-white">
        <div className="border-b py-6 mb-4 flex justify-center">
          <img src='/logoSidebar.svg' className='md:w-[148px]'/>
        </div>
        <div className='flex flex-col gap-2'>
          <div onClick={() => setActive(0)} className={`${active === 0 ? "bg-[#3A57E8] text-white py-2" : "py-2 bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}>
            <div className="flex gap-4">
              <div className='self-center'><DashboardIcon/></div>
              <p className='text-[16px] font-normal leading-7'>Dashboard</p>
            </div>
          </div>
          <div onClick={() => setActive(1)} className={`${active === 1 ? "bg-[#3A57E8] text-white py-2" : "py-2 bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}>
            <div className="flex gap-4">
              <div className='self-center'><AddBoxIcon/></div>
              <p className='text-[16px] font-normal leading-7'>Transaksi</p>
            </div>
          </div>
          <div onClick={() => setActive(2)} className={`${active === 2 ? "bg-[#3A57E8] text-white py-2" : "py-2 bg-white text-[#8A92A6]"} mx-4 px-6 rounded-lg cursor-pointer`}>
            <div className="flex gap-4">
              <div className='self-center'><EditIcon/></div>
              <p className='text-[16px] font-normal leading-7'>Pengaturan</p>
            </div>
          </div>
          <div className={active === 2 ? "block" : "hidden"}>
            <div className='mx-4 py-2 bg-white text-[#8A92A6] cursor-pointer hover:text-[#3A57E8] hover:bg-[#F2F4F7]'>
              <p className='ml-6'>Pengaturan Akun</p>
            </div>
            <div className='mx-4 py-2 bg-white text-[#8A92A6] cursor-pointer hover:text-[#3A57E8] hover:bg-[#F2F4F7]'>
              <p className='ml-6'>Privacy Policy</p>
            </div>
            <div className='mx-4 py-2 bg-white text-[#8A92A6] cursor-pointer hover:text-[#3A57E8] hover:bg-[#F2F4F7]'>
              <p className='ml-6'>Term & Condition</p>
            </div>
          </div>
          <div className='mx-4 border-b'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarPraktisi;