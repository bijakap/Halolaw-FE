import ArtikelCard from "./ArtikelCard";
import ArtikelCardSideway from './ArtikelCardSideway';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function ArtikelPages(){
  const ArtikelDummy = [
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori : ["Perdata"],
      img: "./artikel1@2x.png"
    },
  ];

  return(
    <div className="flex justify-center mx-4 md:mx-[50px] lg:mx-[100px] my-8">
      <div>
        <div className="mb-10">
          <h5 className="mb-8 font-semibold text-[23px] leading-[32px] text-[#0B146F]">Artikel Pilihan kami</h5>
          <div className="block lg:flex gap-10 h-full">
            <div className="mb-5 md:mb-0">
              <ArtikelCard data={ArtikelDummy[0]}/>
            </div>
            <div className="flex flex-col gap-6">
              <ArtikelCardSideway data={ArtikelDummy[0]}/>
              <ArtikelCardSideway data={ArtikelDummy[0]}/>
            </div>
          </div>
        </div>
        <div>
          <h5 className="mb-8 font-semibold text-[23px] leading-[32px] text-[#0B146F]">Semua Artikel</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ArtikelDummy.map((Artikel, ArtikelIdx) => (
              <ArtikelCard data={Artikel} key={ArtikelIdx}/>
            ))}
          </div>
        </div>
        <div className='flex justify-center mx-auto my-12'>
          <div className='flex gap-6'>
            <div className='w-8 h-8 flex items-center justify-center cursor-pointer'>
              <NavigateBeforeIcon/>
            </div>
            <div>
              <div className='bg-[#6982F1] text-white w-8 h-8 flex items-center justify-center cursor-pointer'>
                <span className='text-[14px] font-semibold leading-[16px] tracking-[1.25px]'>1</span>
              </div>
            </div>
            <div className='w-8 h-8 flex items-center justify-center cursor-pointer'>
              <NavigateNextIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtikelPages;