import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavbarPraktisi = () => {
  return(
    <div className="bg-white w-auto flex justify-between p-5 shadow-md">
      <button className='px-2'>
        <DensityMediumOutlinedIcon/>
      </button>
      <div className="flex gap-6 mr-5">
        <NotificationsIcon className='self-center text-[#232D42] text-[28px]'/>
        <img src='/profiledummy.png' className='rounded-full h-8 w-8 object-cover'/>
        <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Aditya</p>
      </div>
    </div>
  )
}

export default NavbarPraktisi;