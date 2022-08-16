import ArtikelCard from "./ArtikelCard";
import ArtikelCardSideway from "./ArtikelCardSideway";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

function ArtikelPages() {
  const ArtikelDummy = [
    {
      penulis: "Liliana Melati",
      tgl_up: "25 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content:
        "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori: ["Perdata"],
      img: "./artikel/artikel1.jpg",
    },
    {
      penulis: "Agustin Rifki",
      tgl_up: "23 Jan 2022",
      judul: "Pimpinan pengadilan berkualitas dan berintegritas",
      content:
        "Satu persyaratan untuk mewujudkan Court Excellence adalah Pimpinan ...",
      kategori: ["Pengadilan"],
      img: "./artikel/artikel2.jpg",
    },
    {
      penulis: "Iqbal Setiawan",
      tgl_up: "22 Jan 2022",
      judul: "Gelombang online dalam perkembangan hukum",
      content:
        "Sebagai Negara hukum sudah tentu penyelenggaraan Negara dan pemerinta ...",
      kategori: ["Perdata"],
      img: "./artikel/artikel3.jpg",
    },
    {
      penulis: "Olivia Ryhe",
      tgl_up: "19 Jan 2022",
      judul: "Tafsir iktikad baik dalam sengketa pertanahan",
      content:
        "Asas hukum yang satu ini kadang terasa ambigu. Maka, berkaitan dengan huk ...",
      kategori: ["Perdata", "Tanah"],
      img: "./artikel/artikel4.jpg",
    },
    {
      penulis: "Muh Akbar",
      tgl_up: "18 Jan 2022",
      judul: "Pembangunan hukum perdata melalui yurisprudensi",
      content:
        "Hukum dalam pembangunan mempunyai 4 fungsi yaitu hukum sebagai pemelihar ...",
      kategori: ["Pengadilan"],
      img: "./artikel/artikel5.jpg",
    },
    {
      penulis: "Febriana",
      tgl_up: "17 Jan 2022",
      judul: "Hukum menghadiri pengadilan versi Islam",
      content:
        "Sejak adanya manusia, manusia tidak terlepas dari masalah, masalah terseb ...",
      kategori: ["Pengadilan"],
      img: "./artikel/artikel6.jpg",
    },
    {
      penulis: "Marsya Sania",
      tgl_up: "16 Jan 2022",
      judul: "Ditjen Cipta Karya Usulkan Empat Paten ke Kemenkumham",
      content:
        "Cipta Karya memfasilitasi para inventor untuk mengajukan empat paten kepada ...",
      kategori: ["Paten", "Hak Cipta"],
      img: "./artikel/artikel7.jpg",
    },
    {
      penulis: "Randi Ken",
      tgl_up: "15 Jan 2022",
      judul: "Legalitas tanda tangan elektronik",
      content:
        "Sejak diundangkannya Undang-Undang Nomor 11 Tahun 2008 tentang Informas ...",
      kategori: ["Perdata"],
      img: "./artikel/artikel8.jpg",
    },
    {
      penulis: "Muh Akbar",
      tgl_up: "14 Jan 2022",
      judul: "Tips hukum bagi konten kreator terhindar kak cipta",
      content:
        "Para pembuat konten juga harus memahami hak-hak nya atas produk ...",
      kategori: ["Hak Cipta"],
      img: "./artikel/artikel9.jpg",
    },
    {
      penulis: "Agustin Rifki",
      tgl_up: "13 Jan 2022",
      judul: "Informasi melalui handphone bukan pelanggaran kode etik",
      content:
        "Pemerintah telah mencanangkaan Sistem Pemerintahan Berbasis  elektronik. Sist ...",
      kategori: ["Pengadilan"],
      img: "./artikel/artikel10.jpg",
    },
  ];

  return (
    <div className="flex justify-center mx-4 md:mx-[50px] lg:mx-[100px] my-8">
      <div>
        <div className="mb-10">
          <h5 className="mb-8 font-bold text-[23px] leading-[32px] text-[#0B146F]">
            Artikel Pilihan kami
          </h5>
          <div className="block lg:flex gap-10 h-full">
            <div className="mb-5 md:mb-0">
              <ArtikelCard data={ArtikelDummy[3]} />
            </div>
            <div className="flex flex-col gap-6">
              <ArtikelCardSideway data={ArtikelDummy[6]}/>
              <ArtikelCardSideway data={ArtikelDummy[8]} />
            </div>
          </div>
        </div>
        <div>
          <h5 className="mb-8 font-bold text-[23px] leading-[32px] text-[#0B146F]">
            Semua Artikel
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ArtikelDummy.map((Artikel, ArtikelIdx) => (
              <ArtikelCard data={Artikel} key={ArtikelIdx} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mx-auto my-12">
          <div className="flex gap-6">
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <NavigateBeforeIcon />
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-[#6982F1] text-white w-8 h-8 flex items-center justify-center cursor-pointer">
                <span className="text-[14px] font-semibold leading-[16px] tracking-[1.25px]">
                  1
                </span>
              </div>
              <div className="bg-white text-[#667085] w-8 h-8 flex items-center justify-center cursor-pointer">
                <span className="text-[14px] font-semibold leading-[16px] tracking-[1.25px]">
                  2
                </span>
              </div>
              <div className="bg-white text-[#667085] w-8 h-8 flex items-center justify-center cursor-pointer">
                <span className="text-[14px] font-semibold leading-[16px] tracking-[1.25px]">
                  3
                </span>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <NavigateNextIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtikelPages;
