import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import CardInfo from '../card/CardInfo';
import Pagination from '../pagination/Pagination';

const Dashboard = () => {
  const sampleData = [
    {
      tgl : "12/09/2021",
      waktu : "11.26",
      aktivitas : "Update progres pada layanan “pembuatan sertifikat tanah kota Bandung"
    },
    {
      tgl : "13/09/2021",
      waktu : "11.26",
      aktivitas : "Update progres pada layanan “pembuatan sertifikat tanah kota Bandung"
    },
    {
      tgl : "16/09/2021",
      waktu : "11.26",
      aktivitas : "Update progres pada layanan “pembuatan sertifikat tanah kota Bandung"
    },
    {
      tgl : "17/09/2021",
      waktu : "11.26",
      aktivitas : "Update progres pada layanan “pembuatan sertifikat tanah kota Bandung"
    },
    {
      tgl : "17/09/2021",
      waktu : "11.26",
      aktivitas : "Update progres pada layanan “pembuatan sertifikat tanah kota Bandung"
    }]

  return(
    <div className="px-10 py-6">
      <div className="flex gap-6 pb-6">
        <CardInfo 
          Icons={PersonOutlineIcon} 
          text={"Client sedang ditangani"}
          value={7}
          type={"Client"}
          />
        <CardInfo 
          Icons={GroupOutlinedIcon}
          text={"Total Client ditangani"}
          LinearColorLeft={"from-[#4AD994]"}
          LinearColorRight={"to-[#57F998]"}
          value={118}
          type={"Client"}
          />
        <CardInfo 
          Icons={ArticleOutlinedIcon}
          text={"Total dokumen ditangani"}
          LinearColorLeft={"from-[#FDB765]"}
          LinearColorRight={"to-[#FFE485]"}
          value={24}
          type={"Jenis Dokumen"}
        />
        <CardInfo 
          Icons={MoneyOutlinedIcon}
          text={"Pendapatan bulan ini"}
          LinearColorLeft={"from-[#FF6D59]"}
          LinearColorRight={"to-[#FFD584]"}
          value={"Rp.10.000.000"}
          type={""}
        />
      </div>
      <div className='p-8 bg-white shadow-lg rounded-lg mb-6'>
        <p className='font-medium text-[16px] leading-5'>Aktivitas Terakhir</p>
        <p className='font-normal text-sm leading-6 text-[#8A92A6]'>32 aktivitas minggu ini</p>
        <table className='table-auto w-full mt-4'>
          <thead className='rounded-xl text-center text-white'>
          <tr className=''>
            <td className='px-5 py-4 bg-[#3A57E8] rounded-tl-lg'>
              <div className='flex justify-center'>
                <p>No</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>              
            </td>
            <td className='px-10 bg-[#3A57E8]'>
                <div className='flex justify-center'>
                <p>Tanggal</p>
                <button className=''>
                  <img src='/updown.svg'/>
                </button>
              </div>          
            </td>
            <td className='px-10 bg-[#3A57E8]'>
              <div className='flex justify-center'>
                <p>Waktu</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>     
            </td>
            <td className='w-[750px] bg-[#3A57E8] rounded-tr-lg'>
            <div className='flex'>
                <p>Aktivitas</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>     
            </td>
          </tr>
          </thead>
          <tbody className='  '>
            {sampleData.map((data, index) => (
              <tr key={index} className={` align-top text-center text-[14px] leading-[24px] text-[#232D42] ${index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
                <td className='py-2'>{index+1}</td>
                <td className='py-2'>{data.tgl}</td>
                <td className='py-2'>{data.waktu}</td>
                <td className='text-left py-2'>{data.aktivitas}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between pt-8'>
          <div className='flex gap-4'>
            <p className='text-[#454D59] text-sm leading-20 tracking-[0.25px] self-center'>Rows Per Page</p>
            <select className='border p-1 px-2'>
              <option>5</option>
              <option>10</option>
            </select>
          </div>
          <div>
            <Pagination/>
          </div>
        </div>
      </div>
      <div className='p-8 bg-white shadow-lg rounded-lg mb-6'>
        <p className='font-medium text-[16px] leading-5'>Aktivitas Terakhir</p>
        <p className='font-normal text-sm leading-6 text-[#8A92A6]'>32 aktivitas minggu ini</p>
        <table className='table-auto w-full mt-4'>
          <thead className='rounded-xl text-center text-white'>
          <tr className=''>
            <td className='px-5 py-4 bg-[#3A57E8] rounded-tl-lg'>
              <div className='flex justify-center'>
                <p>No</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>              
            </td>
            <td className='px-10 bg-[#3A57E8]'>
                <div className='flex justify-center'>
                <p>Tanggal</p>
                <button className=''>
                  <img src='/updown.svg'/>
                </button>
              </div>          
            </td>
            <td className='px-10 bg-[#3A57E8]'>
              <div className='flex justify-center'>
                <p>Waktu</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>     
            </td>
            <td className='w-[750px] bg-[#3A57E8] rounded-tr-lg'>
            <div className='flex'>
                <p>Aktivitas</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>     
            </td>
          </tr>
          </thead>
          <tbody className='  '>
            {sampleData.map((data, index) => (
              <tr key={index} className={` align-top text-center text-[14px] leading-[24px] text-[#232D42] ${index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
                <td className='py-2'>{index+1}</td>
                <td className='py-2'>{data.tgl}</td>
                <td className='py-2'>{data.waktu}</td>
                <td className='text-left py-2'>{data.aktivitas}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between pt-8'>
          <div className='flex gap-4'>
            <p className='text-[#454D59] text-sm leading-20 tracking-[0.25px] self-center'>Rows Per Page</p>
            <select className='border p-1 px-2'>
              <option>5</option>
              <option>10</option>
            </select>
          </div>
          <div>
            <Pagination/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard