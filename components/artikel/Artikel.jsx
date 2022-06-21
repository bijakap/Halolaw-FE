import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link"
import ArtikelCard from './ArtikelCard';


function Artikel(){
  const PageName = "Judul";
  const ArtikelDummy = [
    {
        penulis: "Liliana Melati",
        tgl_up: "25 Jan 2022",
        judul: "Legalitas tanda tangan elektronik",
        content: "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
        kategori : ["Perdata"],
        img: "/artikel/artikel1.jpg"
    },
    {
        penulis: "Agustin Rifki",
        tgl_up: "23 Jan 2022",
        judul: "Pimpinan pengadilan berkualitas dan berintegritas",
        content: "Satu persyaratan untuk mewujudkan Court Excellence adalah Pimpinan ...",
        kategori : ["Pengadilan"],
        img: "/artikel/artikel2.jpg"
    },
    {
        penulis: "Iqbal Setiawan",
        tgl_up: "22 Jan 2022",
        judul: "Gelombang online dalam perkembangan hukum",
        content: "Sebagai Negara hukum sudah tentu penyelenggaraan Negara dan pemerinta ...",
        kategori : ["Perdata"],
        img: "/artikel/artikel3.jpg"
    },
    {
        penulis: "Olivia Ryhe",
        tgl_up: "19 Jan 2022",
        judul: "Tafsir iktikad baik dalam sengketa pertanahan",
        content: "Asas hukum yang satu ini kadang terasa ambigu. Maka, berkaitan dengan huk ...",
        kategori : ["Perdata", "Tanah"],
        img: "/artikel/artikel4.jpg"
    },
  ];
  return(
    <div className="flex justify-center w-auto md:w-[65%] mx-5 md:mx-auto my-8">
      <div className=''>
        {/* START: breadcrumbs */}
        <div className="py-4 md:pt-8 md:pb-6 text-[#6C757D]">
          <div className="text-[14px] md:text-[16px] md:leading-[175%]">
            <p>
            <Link href={"/"}><span className='cursor-pointer'><HomeRoundedIcon className="mb-1 scale-[0.7]"/>Home</span></Link>
              /
              <Link href="/artikel">
                <a href="#"> Artikel </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        <div className='mb-8'>
          <h1 className='text-[#252A31] text-[25px] md:text-[33px] leading-[40px] tracking-[0.25px] font-semibold'>Tafsir Iktikad Baik dalam Sengketa Pertanahan dengan Perjanjian Nominee</h1>
        </div>
        <div className='flex w-full justify-between py-5 border-b border-t'>
          <p className='self-center text-[#4A4A68] text-[12px] md:text-[14px] font-semibold leading-5 tracking-[0.25px]'>Diperbarui 19 Jan 2022 . Olivia Ryhe</p>
          <div className='flex gap-4'>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/facebook.svg" alt="facebook" /></p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/twitter.svg" alt="twitter" /></p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/watsap.svg" alt="watsap" /></p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/copyLink.svg" alt="copyLink" /></p>
            </div>
          </div>
        </div>
        <div className='flex justify-center w-[80%] mx-auto py-8'>
          <div className='text-justify font-normal text-[12px] md:text-[16px] tracking-[0.5px] leading-[24px] md:leading-[32px] text-[#252A31]'>
            <img src='/artikel/ImageArtikel.jpg' className='flex justify-center mx-auto mb-4 md:mb-8'/>
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
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/facebook.svg" alt="facebook" /></p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/twitter.svg" alt="twitter" /></p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/watsap.svg" alt="watsap" /></p>
            </div>
            <div className='rounded-lg bg-[#F2F4F7] w-10 h-10 flex justify-center cursor-pointer'>
              <p className='self-center'><img src="/sosmed/copyLink.svg" alt="copyLink" /></p>
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