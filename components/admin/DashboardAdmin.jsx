import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CardInfo from "../card/CardInfo"
import Pagination from '../pagination/Pagination';


const DashboardAdmin = () => {
  const sampleData = [
    {
      tgl : "12/09/2021",
      waktu : "11.26",
      aktivitas : "Menambahkan 1 praktisi hukum"
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

    const sampleData2 = [
      {
        invoice : "INV/20220311/PPT/004",
        tgl : "12/09/2021",
        dokumen : "Sertifikat Tanah",
        praktisi : "Aditya Zhafir Dhiaulhaq",
        client : "Farizi Andira",
      },
      {
        invoice : "INV/20220311/PPT/004",
        tgl : "12/09/2021",
        dokumen : "Sertifikat Tanah",
        praktisi : "Aditya Zhafir Dhiaulhaq",
        client : "Farizi Andira",
      },
      {
        invoice : "INV/20220311/PPT/004",
        tgl : "12/09/2021",
        dokumen : "Sertifikat Tanah",
        praktisi : "Aditya Zhafir Dhiaulhaq",
        client : "Farizi Andira",
      },
      {
        invoice : "INV/20220311/PPT/004",
        tgl : "12/09/2021",
        dokumen : "Sertifikat Tanah",
        praktisi : "Aditya Zhafir Dhiaulhaq",
        client : "Farizi Andira",
      },
      {
        invoice : "INV/20220311/PPT/004",
        tgl : "12/09/2021",
        dokumen : "Sertifikat Tanah",
        praktisi : "Aditya Zhafir Dhiaulhaq",
        client : "Farizi Andira",
      }]

  return(
    <div className="px-10 py-6">
      <div className="lg:flex grid grid-cols-2 gap-6 pb-6">
        <CardInfo 
          Icons={PersonOutlineIcon} 
          text={"Client Sedang Ditangani"}
          value={16}
          type={"Client"}
          />
        <CardInfo 
          Icons={GroupOutlinedIcon}
          text={"Total Client"}
          LinearColorLeft={"from-[#4AD994]"}
          LinearColorRight={"to-[#57F998]"}
          value={118}
          type={"Client"}
          />
        <CardInfo 
          Icons={GroupOutlinedIcon}
          text={"Total Praktisi Hukum"}
          LinearColorLeft={"from-[#FDB765]"}
          LinearColorRight={"to-[#FFE485]"}
          value={12}
          type={"Praktisi"}
        />
        <CardInfo 
          Icons={ArticleOutlinedIcon}
          text={"Total Dokumen Hukum"}
          LinearColorLeft={"from-[#FF6D59]"}
          LinearColorRight={"to-[#FFD584]"}
          value={"42"}
          type={"Dokumen"}
        />
      </div>
      <div className='p-8 bg-white shadow-lg rounded-lg mb-6'>
        <p className='font-medium text-[16px] leading-5'>Aktivitas Terakhir</p>
        <p className='font-normal text-sm leading-6 text-[#8A92A6]'>32 aktivitas minggu ini</p>
        <table className='table-auto w-full mt-4'>
          <thead className='rounded-xl text-center text-white'>
          <tr className=''>
            <td className='md:px-5 px-3 py-4 bg-[#3A57E8] rounded-tl-lg'>
              <div className='flex justify-center'>
                <p>No</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>              
            </td>
            <td className='md:px-10 px-3 bg-[#3A57E8]'>
                <div className='flex justify-center'>
                <p>Tanggal</p>
                <button className=''>
                  <img src='/updown.svg'/>
                </button>
              </div>          
            </td>
            <td className='md:px-10 px-3 bg-[#3A57E8]'>
              <div className='flex justify-center'>
                <p>Waktu</p>
                <button>
                  <img src='/updown.svg'/>
                </button>
              </div>     
            </td>
            <td className='md:w-[750px] w-auto bg-[#3A57E8] rounded-tr-lg'>
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
        <p className='font-medium text-[16px] leading-5'>Pendapatan</p>
        <p className='font-normal text-sm leading-6 text-[#8A92A6]'>Semua pendapatan</p>
        <div className='overflow-x-auto'>
          <table className='table-auto w-full mt-4'>
            <thead className='rounded-xl text-center text-white'>
            <tr className=''>
              <td className='md:px-5 px-2 py-4 bg-[#3A57E8] rounded-tl-lg'>
                <div className='flex justify-center'>
                  <p>No</p>
                  <button>
                    <img src='/updown.svg'/>
                  </button>
                </div>              
              </td>
              <td className='px-3 bg-[#3A57E8]'>
                  <div className='flex justify-center'>
                  <p>Invoice</p>
                  <button className=''>
                    <img src='/updown.svg'/>
                  </button>
                </div>          
              </td>
              <td className='px-3 bg-[#3A57E8]'>
                  <div className='flex justify-center'>
                  <p>Tanggal</p>
                  <button className=''>
                    <img src='/updown.svg'/>
                  </button>
                </div>          
              </td>
              <td className='md:px-0 px-3 bg-[#3A57E8]'>
                <div className='flex'>
                  <p>Dokumen</p>
                  <button>
                    <img src='/updown.svg'/>
                  </button>
                </div>     
              </td>
              <td className='md:px-0 px-3 bg-[#3A57E8]'>
                <div className='flex'>
                  <p>Praktisi</p>
                  <button>
                    <img src='/updown.svg'/>
                  </button>
                </div>     
              </td>
              <td className='md:px-0 px-3 bg-[#3A57E8] rounded-tr-lg'>
              <div className='flex'>
                  <p>Client</p>
                  <button>
                    <img src='/updown.svg'/>
                  </button>
                </div>     
              </td>
            </tr>
            </thead>
            <tbody className='  '>
              {sampleData2.map((data, index) => (
                <tr key={index} className={` align-top text-center text-[14px] leading-[24px] text-[#232D42] ${index % 2 != 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
                  <td className='py-2'>{index+1}</td>
                  <td className='py-2'>{data.invoice}</td>
                  <td className='py-2'>{data.tgl}</td>
                  <td className='text-left py-2 md:px-0 px-3'>{data.dokumen}</td>
                  <td className='text-left py-2 md:px-0 px-3'>{data.praktisi}</td>
                  <td className='text-left py-2 md:px-0 px-3'>{data.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default DashboardAdmin;