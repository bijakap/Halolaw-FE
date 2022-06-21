import Link from "next/link";

function TermCondition() {
  const PageName = "Term & Condition";
  return (
    <div className="flex justify-center mx-10 w-auto">
      <div className="w-full">
        {/* START: breadcrumbs */}
        <div className="py-8 pb-[10px] text-[#6C757D]">
          <div className="text-[14px] md:text-[16px] md:leading-[175%]">
            <p>
              <Link href="/praktisi">
                <a href="#" className="">
                  Dashboard
                </a>
              </Link>
              /
              <Link href="/praktisi/pengaturan">
                <a href="#"> Pengaturan </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        <div className="p-8 bg-white shadow-lg rounded-lg mb-6">
          <div className="flex justify-start mx-auto pb-10 md:pb-[56px]">
            <img src="/logoSidebar.svg" className="h-[70px] md:h-[100px]" />
          </div>
          <div className="flex flex-col gap-4 w-full pb-12">
            <div className="border-b pb-[16px]">
              <h1 className="text-[24px] md:text-[33px] font-normal leading-[32px] md:leading-[40px] tracking-[0.25px] m-0">
                Syarat & Ketentuan
              </h1>
            </div>
            <div className="w-auto lg:w-[924px] flex flex-col gap-4 text-[12px] md:text-[16px] leading-[20px] md:leading-[28px] tracking-[0.5px] text-justify">
              <div className="">
                <h5 className="font-bold">
                  1. Ketentuan Umum dan Ketentuan Pengguna.
                </h5>
                <p className="">
                  Ketentuan pengguna adalah persetujuan antara pengguna situs
                  HaloLaw dengan kami. Sedangkan pihak ketiga adalah mitra yang
                  bekerjasama dengan kami. Syarat dan ketentuan dapat kami ubah
                  sesuai dengan perkembangan bisnis maupun sesuai dengan
                  peraturan perundang-undangan yang berlaku.
                </p>
              </div>
              <div>
                <h5 className="font-bold">
                  2. Penggunaan Situs dan Layanan Kami
                </h5>
                <p>
                  Situs kami menyediakan layanan jasa hukum yang langsung
                  ditangani oleh praktisi hukum yang bermitra dengan kami. Untuk
                  layanan konsultasi dan pertanyaan lainnya hanya kami layani
                  pada hari kerja dari jam 8 pagi hingga jam 5 sore Waktu
                  Indonesia Barat.
                </p>
              </div>
              <div>
                <h5 className="font-bold">3. Penggunaan Data Pribadi</h5>
                <p>
                  Data pribadi anda kami gunakan dan kami lindungi sesuai dengan
                  peraturan perundang-undangan yang berlaku. Data pribadi anda
                  kami gunakan untuk melakukan verifikasi data melalui situs
                  HaloLaw, mempermudah proses transaksi, mengolah data untuk
                  kepuasan pelanggan, kepentingan strategi pemasaran dan
                  pengembangan bisnis kami.
                </p>
              </div>
              <div>
                <h5 className="font-bold">4. Harga dan Pembayaran</h5>
                <p>
                  Anda bertanggung jawab penuh atas setiap informasi yang anda
                  berikan melalui situs kami, serta atas kelalaian anda dalam
                  menggunakan situs kami. Anda setuju untuk menerima konsekuensi
                  yang akan ditimbulkan atas tindakan anda khususnya yang dapat
                  merugikan kami dan mitra kami.
                </p>
              </div>
              <div>
                <h5 className="font-bold">5. Tanggung Jawab Anda</h5>
                <p>
                  Ketentuan pengguna adalah persetujuan antara pengguna situs
                  HaloLaw dengan kami. Sedangkan pihak ketiga adalah mitra yang
                  bekerjasama dengan kami. Syarat dan ketentuan dapat kami ubah
                  sesuai dengan perkembangan bisnis maupun sesuai dengan
                  peraturan perundang-undangan yang berlaku.
                </p>
              </div>
              <div>
                <h5 className="font-bold">6. Tanggung Jawab Mitra Kami</h5>
                <p>
                  Mitra kami bertanggung jawab penuh dalam menjalankan tugasnya
                  sesuai dengan kontrak kerja dengan tetap mentaati peraturan
                  perundang-undangan yang berlaku di Indonesia serta sesuai
                  dengan sumpah profesi mereka. Mitra kami akan diberi sanksi
                  atas setiap pelanggaran yang mereka lakukan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermCondition;
