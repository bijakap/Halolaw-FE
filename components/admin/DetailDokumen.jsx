import Link from "next/link";

function DetailDokumen() {
  const PageName = "Setifikat Tanah";

  return (
    <div className="flex justify-center mx-4 md:mx-10 w-auto">
      <div className="w-full">
        {/* START: breadcrumbs */}
        <div className="py-8 pb-[10px] text-[#6C757D] mb-6">
          <div className="text-[14px] md:text-[16px] md:leading-[175%]">
            <p>
              <Link href="/admin">
                <a href="#" className="">
                  Dashboard{" "}
                </a>
              </Link>
              /
              <Link href="/admin/layanan">
                <a href="#"> Layanan </a>
              </Link>
              /
              <Link href="/admin/layanan/properti">
                <a href="#"> Properti </a>
              </Link>
              / <span className="text-[#2E46BA]">{PageName}</span>
            </p>
          </div>
        </div>
        {/* END: Breadcrumbs */}
        <div className="py-8 px-8 lg:px-16 bg-white shadow-lg rounded-lg mb-6 flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-1 items-start">
            <h4 className="font-semibold text-[#252A31] text-[33px] leading-10 tracking-[0.25px]">
              Sertifikat Tanah
            </h4>
            <p className="font-regular text-[14px] leading-5 tracking-[0.25px] text-[#3A57E8]">
              Mulai dari Rp700.000
            </p>
          </div>
          <hr className="self-stretch border-[#98A2B3]" />
          <div className="font-['Open Sans'] w-full text-left lg:text-justify text-[#475467]">
            <div className="text-[16px] leading-[32px] tracking-[0.5px]">
              <h5 className="text-[23px] font-bold text-[#1D2939]">
                Deskripsi
              </h5>
              <p>
                Sertifikat tanah adalah surat keterangan sebagai bukti
                kepemilikan serta hak seseorang atas tanah atau lahan.
                Sertifikat ini adalah salah satu dokumen negara yang dangat
                penting. Kami sudah berpengalaman dalam mengurus surat-surat
                tanah lebih dari 5 tahun dengan berbagai kasus yang berbeda.
              </p>
              <br />
              <h5 className="text-[23px] font-bold text-[#1D2939]">
                Apa yang akan kami Kerjakan?
              </h5>
              <ul>
                <li>1. Sertifikat Hak Milik (SHM)</li>
                <li>2. Pembuatan Izin Mendirikan Bangunan (IMB)</li>
                <li>3. Sertifikat Hak Guna Usaha (SHGU)</li>
                <li>4. Sertifikat Hak Pakai</li>
              </ul>
              <br />
              <h5 className="text-[23px] font-bold text-[#1D2939]">
                Apa yang Perlu dipersiapkan
              </h5>
              <ul>
                <li>1. Scan/foto Nomor Pokok Wajib Pajak (NPWP)</li>
                <li>2. Scan/foto Kartu Keluarga (KK) asli</li>
                <li>3. Scan/foto kartu Tanda Penduduk (KTP) asli</li>
                <li>4. Scan/foto SPPT PBB</li>
                <li>5. Scan/foto Surat Pernyataan Kepemilikan Lahan asli</li>
              </ul>
              <br />
              <div>
                <h5 className="text-[23px] font-bold text-[#1D2939]">
                  Gambar/foto
                </h5>
                <div className="w-auto h-[100px] gap-2 flex overflow-auto">
                  <img src="/Dokumen/Properti/Pemasukan.jpg" className="" />
                  <img src="/Dokumen/Properti/Hibah.jpg" />
                  <img src="/Dokumen/Properti/Jual_Beli.jpg" />
                </div>
              </div>
              <br />
              <h5 className="text-[23px] font-bold text-[#1D2939]">
                Pertanyaan
              </h5>
              <p>
                Bila Anda memiliki pertanyaan / kendala dalam melakukan
                transaksi menggunakan Halo Law, Anda dapat membaca
                pertanyaan-pertanyaan yang sering diajukan di{" "}
                <a href="#" className="text-blue-500">
                  FAQ
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDokumen;
