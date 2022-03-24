import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Checkout(){
    return(
        <div className='flex justify-end mr-[313px] mt-[64px]'>
            <div className='mr-[86px]'>
                <button className='flex justify-center bg-[#F2F4F7] px-6 py-[6px] rounded-[8px] w-[128px]'>
                    <ArrowBackIcon/> <span className='pl-2'>Kembali</span>
                </button>
            </div>
            <div className='flex'>
                <div className='mr-[80px] w-[397px]'>
                    <div className='space-y-[8px] mb-10'>
                        <h1 className='text-[33px] font-[700] leading-[40px] tracking-[0.25px] text-[#1D2939]'>Checkout</h1>
                        <p className='text-[14px] leading-[20px] tracking-[0.25px] text-[#475467]'>Lengkapi data diri & pastikan semuanya sudah benar</p>    
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Nama Lengkap <span className="text-[#3A57E8]">*</span></label>
                        <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4" type="text" placeholder="nama lengkap anda"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Nomor Telepon <span className="text-[#3A57E8]">*</span></label>
                        <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4" type="number" placeholder="08*********"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Alamat Lengkap <span className="text-[#3A57E8]">*</span></label>
                        <textarea className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-2 mb-4 resize-none" type="text" placeholder="Contoh:  jl. Telekomunkasi no.1, Dayeuhkolot, kabupaten Bandung, kode pos 40257" rows="4"/>
                    </div>
                   
                </div>
                <div className='w-[336px] border'>
                    <div className='bg-[#E4E7EC] text-left'>
                        <h1 className='text-[#1D2939] text-[23px] leading-[32px] font-[700] px-6 py-4'>Pembayaran</h1>
                    </div>
                    <div className='p-6'>
                        <div className='mb-[32px]'>
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Metode Pembayaran <span className="text-[#3A57E8]">*</span></label>
                            <select className='w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-4'>
                                <option disabled selected>-- Pilih --</option>
                                <option value="1">Transfer - Bank Mandiri</option>
                                <option value="2">Transfer - Bank BNI</option>
                                <option value="3">Transfer - Bank BRI</option>
                                <option value="4">Transfer - Bank Cimb Niaga</option>
                            </select>    
                        </div>
                        <div className='mb-[32px]'>
                            <label className="text-sm font-medium text-gray-700 tracking-wide">Domisili Pengurusan <span className="text-[#3A57E8]">*</span></label>
                            <select className='w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] mt-4'>
                                <option disabled selected>-- Pilih --</option>
                                <option value="1">Transfer - Bank Mandiri</option>
                                <option value="2">Transfer - Bank BNI</option>
                                <option value="3">Transfer - Bank BRI</option>
                                <option value="4">Transfer - Bank Cimb Niaga</option>
                            </select>
                        </div>
                        
                        <div className='border-b-2 pb-4'>
                            <h1 className='text-sm font-medium text-gray-700 tracking-wide pb-4'>Ringkasan Belanja</h1>
                            <div className='space-y-[8px]'>
                                <div className='flex justify-between text-sm text-[#475467]'>
                                    <p>Pembuatan Dokumen</p>
                                    <p className='font-semibold'>Rp 700.000</p>
                                </div>
                                <div className='flex justify-between text-sm text-[#475467]'>
                                    <p>Pembuatan Dokumen</p>
                                    <p className='font-semibold'>Rp 700.000</p>
                                </div>
                                <div className='flex justify-between text-sm text-[#475467]'>
                                    <p>Pembuatan Dokumen</p>
                                    <p className='font-semibold'>Rp 700.000</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex justify-between pt-5 text-[16px] font-[700] leading-[20px] tracking-[0.15px]'>
                            <p>Total</p>
                            <p>Rp 700.000</p>
                        </div>
                    </div>
                    <div className='text-center bg-[#3A57E8]'>
                        <button className='text-white text-[16px] font-[700] leading-[20px] tracking-[0.15px] py-6'>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}