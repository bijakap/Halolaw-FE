import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavbarPraktisi = () => {
  return(
    <div className="bg-white w-auto flex justify-between p-5 shadow-md">
      <button className='px-2'>
        <DensityMediumOutlinedIcon/>
      </button>
      <div className="flex gap-6">
        <NotificationsIcon className='text-gray-500'/>
        <img src='/profiledummy.png'/>
        <p>Aditya</p>
      </div>
    </div>
  )
}

export default NavbarPraktisi;