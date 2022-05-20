import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link"
import ArtikelCard from './ArtikelCard';


function Artikel(){
  const ArtikelDummy = [
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      kategori : ["Perdata"],
      img: "/artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      kategori : ["Perdata"],
      img: "/artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      kategori : ["Perdata"],
      img: "/artikel1@2x.png"
    },
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      kategori : ["Perdata"],
      img: "/artikel1@2x.png"
    },
  ];
  return(
    <div className="flex justify-center w-auto md:w-[65%] mx-5 md:mx-auto my-8">
      <div className=''>
        <div className="flex">
          <p className="font-[400] text-[12px] lg:text-[14px] leading-0 lg:leading-[20px] tracking-[0.25px]">
          <Link href={"/"}><span className='cursor-pointer'><HomeIcon className="mb-1 scale-[0.7]"/>Home</span></Link>
          /
          <Link href={"/artikel"}>Artikel</Link>
          /<span className='text-[#3A57E8]'>Judul Dari Artikel</span>
          </p>
        </div>
        <div className='mt-6 mb-8'>
          <h1 className='text-[#252A31] text-[25px] md:text-[33px] leading-[40px] tracking-[0.25px] font-semibold'>Tafsir Iktikad Baik dalam Sengketa Pertanahan dengan Perjanjian Nominee</h1>
        </div>
        <div className='flex w-full justify-between py-5 border-b border-t'>
          <p className='self-center text-[#4A4A68] text-[12px] md:text-[14px] font-semibold leading-5 tracking-[0.25px]'>Diperbarui 19 Jan 2022 . Olivia Ryhe</p>
          <div className='flex gap-4'>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>F</p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>Twi</p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>WA</p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>Shr</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center w-[80%] mx-auto py-8'>
          <div className='text-justify font-normal text-[16px] tracking-[0.5px] leading-[32px] text-[#252A31]'>
            <img src='/artikel1@2x.png' className='flex justify-center mx-auto'/>
            <p>Asas hukum yang satu ini kadang terasa ambigu. Maka, berkaitan dengan hukum perdata di Indonesia, perlu memperhatikan lebih jauh konsistensi pengadilan dalam menafsirkannya. Misalnya dalam sengketa pertanahan yang timbul akibat adanya perjanjian nominee (pinjam nama/nominee arrangement).</p>
            <p>Persoalan perjanjian nominee perlu dibahas lebih dulu. Praktiknya di Indonesia kerap terjadi dalam kepemilikan tanah karena ada pembatasan kepemilikan oleh pihak tertentu. Hakim Agung I Gusti Agung Sumanatha menyebut larangan Warga Negara Asing (WNA) memiliki tanah dengan status hak milik sebagai salah satu faktor penyebab.</p>
            <p>Sumanatha menjelaskan dalam uraian tertulis kepada Hukumonline, “Karena tidak mungkin mempunyai hak milik, maka lahir perjanjian pinjam nama (nominee arrangement) dalam kepemilikan tanah, yaitu Warga Negara Asing (beneficiary) meminjam nama WNI (nominee) sebagai pihak yang namanya tercatat dalam Sertifikat Hak Milik”. Kasus sengketa terkait tanah digolongkan dalam 3 klasifikasi, diantaranya:</p>
            <h1 className='font-semibold'>1.Kasus Ringan</h1>
            <p>Dikatakan sebagai kasus ringan karena pengadaannya berupa petunjuk yang bersifat teknis administratif. Sehingga penyelesaiannya cukup dilakukan dengan adanya surat petunjuk penyelesaian kepada pemohon atau pengadu.</p>
            <h1 className='font-semibold'>2.Kasus Sedang</h1>
            <p>Kasus sedang melibatkan hukum dalam penyelesaiannya dan administrasi yang jelas namun tidak menimbulkan gejala sosial, politik, keamanan dan ekonomi.</p>
            <h1 className='font-semibold'>3.Kasus Berat</h1>
            <p>Kasus sengketa bisa dikatakan berat apabila melibatkan banyak orang dan dimensi hukumnya cukup kompleks. Sehingga bisa menimbulkan gejolak sosial, politik, keamanan dan politik. </p>
          </div>
        </div>
        <div className='flex w-auto justify-between py-5 border-b border-t'>
          <p className='self-center text-[#4A4A68] text-[12px] md:text-[14px] font-semibold leading-5 tracking-[0.25px]'>Bagikan Artikel Ini</p>
          <div className='flex gap-4'>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>F</p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>Twi</p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>WA</p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center'>
              <p className='self-center'>Shr</p>
            </div>
          </div>
        </div>
        <div className="mt-[24px] font-['Inter']">
          <h4 className="mb-[24px] font-semibold text-[#1D2939] text-[22px] lg:text-[33px]">Artikel Terbaru</h4>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-[24px] gap-3">
              {ArtikelDummy.map((data, index) =>{
                  return <ArtikelCard key={index} data={data}/> 
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artikel;