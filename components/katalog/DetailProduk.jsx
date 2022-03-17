import HomeIcon from '@mui/icons-material/Home';

export default function DetailProduk() {
    const PageName = "Sertifikat Tanah"
    return(
        <div className=''>
            <div>
                <div className="relative">
                    <div className="absolute -z-10 bg-gradient-to-r from-[#3D8DFF] to-[#2A41C7] h-[150px] lg:h-[212px] w-full">
                        
                    </div>
                </div>
            </div>
            <div className='mx-[100px] relative'>
                <div className='pt-8 pb-[100px] text-white'>
                    <p><a href="#" className=""><HomeIcon className="mb-1 scale-[0.7]"/>Home</a>
                    /
                    <a href="#">Pembuatan Dokumen</a>
                    /Properti/{PageName}
                    </p>
                    <h3 className="font-['Inter'] text-[47px] font-[600] pt-6">Sertifikat Tanah</h3>
                </div>     
                <div className='bg-white border shadow-[0px_4px_10px_rgba(0,0,0,0.25)] absolute top-[160px] right-0 w-[336px] mr-[61px]'>
                    <div className='bg-[#E4E7EC]'>
                        <h5 className='py-4 px-6 font-bold text-[23px] text-[#1D2939]'>Pemesanan</h5>
                    </div>
                    <div className='p-6 text-[14px] text-[#1D2939]'>
                        <div className='space-y-[8px] mb-8'>
                            <p className='text-[#667085] font-bold'>Mulai dari</p>
                            <h4 className='text-[#2A41C7] text-[33px] font-bold'>Rp700.000</h4>
                        </div>
                        <div className='space-y-[20px]'>
                            <p className='font-[500]'>Anda dapat melakukan konsultasi secara gratis sebelum memesan dokumen legalitas ini.</p>
                            <p><a href='#' className='text-[#3A57E8] font-[600]'>Jadwalkan Kosultasi →</a></p>
                            <p>Pesan sekarang untuk dapat mengurus dokumen legalitas ini.</p>
                        </div>
                        
                    </div>
                    <div>
                        <button className='bg-[#3A57E8] w-full text-white py-6 font-[700]'>Pesan Sekarang</button>
                    </div>
                </div>
                <div className="font-['Open Sans'] w-[713px] text-justify text-[#475467] pb-12">
                    <div className="text-[16px] leading-[32px] tracking-[0.5px]">
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Deskripsi</h5>
                        <p>Sertifikat tanah adalah surat keterangan sebagai bukti kepemilikan serta hak seseorang atas tanah atau lahan. Sertifikat ini adalah salah satu dokumen negara yang dangat penting.  Kami sudah berpengalaman dalam mengurus surat-surat tanah lebih dari 5 tahun dengan berbagai kasus yang berbeda.</p><br/>
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Apa yang akan kami Kerjakan?</h5>
                        <ul>
                            <li>1. Sertifikat Hak Milik (SHM)</li>
                            <li>2. Pembuatan Izin Mendirikan Bangunan (IMB)</li>
                            <li>3. Sertifikat Hak Guna Usaha (SHGU)</li>
                            <li>4. Sertifikat Hak Pakai</li>
                        </ul><br/>
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Apa yang Perlu dipersiapkan</h5>
                        <ul>
                            <li>1. Scan/foto Nomor Pokok Wajib Pajak (NPWP)</li>
                            <li>2. Scan/foto Kartu Keluarga (KK) asli</li>
                            <li>3. Scan/foto kartu Tanda Penduduk (KTP) asli</li>
                            <li>4. Scan/foto SPPT PBB</li>
                            <li>5. Scan/foto Surat Pernyataan Kepemilikan Lahan asli</li>
                        </ul><br/>
                        <div>
                            <h5 className="text-[23px] font-bold text-[#1D2939]">Gambar/foto</h5>
                            <div className="h-[100px] flex">
                                <img src="./Dokumen/Properti/Pemasukan.jpg" className="h-auto"/>
                                <img src="./Dokumen/Properti/Hibah.jpg" />
                                <img src="./Dokumen/Properti/Jual_Beli.jpg" />
                            </div>
                        </div><br/>
                        <h5 className="text-[23px] font-bold text-[#1D2939]">Pertanyaan</h5>
                        <p>Bila Anda memiliki pertanyaan / kendala dalam melakukan transaksi menggunakan Halo Law, Anda dapat membaca pertanyaan-pertanyaan yang sering diajukan di <a href="#" className="text-blue-500">FAQ</a></p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}