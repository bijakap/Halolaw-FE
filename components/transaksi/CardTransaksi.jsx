import PrintIcon from '@mui/icons-material/Print';
import Link from 'next/link';

function CardTransaksi({props}){

    const showStatus = (status) => {
        if (status.toLowerCase() === "aktif" ){
            return(
                <p className={`px-2 py-1 text-[8px] lg:text-[12px] font-[700] text-[#6E9E31]`}>{status}</p>
            )
        } else if (status.toLowerCase() === "selesai"){
            return(
                <p className={`px-2 py-1 text-[8px] lg:text-[12px] font-[700] text-[#667085]`}>{status}</p>
            )
        } else {
            return(
                <p className={`px-2 py-1 text-[8px] lg:text-[12px] font-[700] text-[#784D05]`}>{status}</p>
            )
        }
    }

    const ShowButton = (status) => {
        if (status.toLowerCase() === "aktif" ){
            return(
                <div className='flex justify-end py-2 md:py-4 px-2 md:px-6 gap-4'>
                    <p className='self-center hover:underline cursor-pointer text-xs lg:text-[14px]'><PrintIcon/> Invoice</p>
                    <Link href={'/DetailTransaksi'}>
                        <button className={`bg-[#47BF37] hover:bg-[#40a932] text-white px-6 py-3 rounded-lg`}>
                            <span className='text-xs leading-[20px] tracking-[0.15px] lg:text-[14px]'>Update Progress</span>
                        </button>
                    </Link>
                </div>
            )
        } else if (status.toLowerCase() === "selesai"){
            return(
                <div className='flex justify-end py-2 md:py-4 px-2 md:px-6 gap-4'>
                <p className='self-center hover:underline cursor-pointer text-xs lg:text-[14px]'><PrintIcon/> Invoice</p>
                <Link href={'/DetailTransaksi'}>
                    <button className={`border bg-white text-[#3A57E8] hover:bg-[#2c48cf] hover:text-white px-6 py-3 rounded-lg`}>
                        <span className='text-xs leading-[20px] tracking-[0.15px] lg:text-[14px]'>Lihat Detail</span>
                    </button>
                </Link>
            </div>
            )
        } else {
            return(
                <div className='flex justify-end py-2 md:py-4 px-2 md:px-6 gap-4'>
                    <button className={`bg-[#3A57E8] hover:bg-[#2c48cf] px-6 py-3 rounded-lg text-white`}>
                        <span className='text-xs leading-[20px] tracking-[0.15px] lg:text-[14px]'>Upload Bukti Bayar</span>
                    </button>
                </div>
            )
        }
    }
    return (
        <>
        <div className='border rounded-lg drop-shadow-sm mb-4'>
            <div className='border-b'>
                <div className='flex justify-between md:py-4 py-1 md:px-6 px-2'>
                    <div className='flex'>
                        <img src={props.img} className='md:h-[85px] h-12 md:w-[85px] w-12 self-center object-cover rounded'/>
                        <div className='flex flex-col justify-between md:ml-6 ml-2'>
                            <div className='flex items-start'>
                                {
                                    props.status.toLowerCase() === "pending" ? 
                                    <></> 
                                    :  
                                    <p className="text-[#667085] text-[10px] md:text-[12px] font-bold tracking-normal md:tracking-[0.4px] self-center mr-2">{props.invoice}</p>
                                }
                                <div className={`rounded-full  ${props.status.toLowerCase() === "pending" ? "bg-[#FEEDA3]" : "bg-[#FAF4FF]" } font-sans`}>
                                    {showStatus(props.status)}
                                </div>
                            </div>
                            <div className="space-y-[4px]">
                                <p className="text-[#1D2939] font-medium text-[12px] md:text-[19px] leading-[24px] tracking-normal md:tracking-[0.15px]">{props.judul}</p>
                                <p className="text-[#1B8920] font-bold text-[10px] md:text-[14px] leading-[20px] tracking-normal md:tracking-[0.25px]">{props.harga}</p>
                            </div>
                        </div>
                    </div>
                    {
                        props.status.toLowerCase() === "pending" ? 
                        <></> 
                        : 
                        <div className='flex flex-col justify-between w-[20%]'>
                            <p className="text-[#475467] text-[10px] md:text-[12px] font-medium leading-[18px] tracking-[0.4px]">Praktisi:</p>
                            <div className="space-y-[4px]">
                                <p className="text-[#475467] text-[12px] md:text-[16px] font-semibold leading-[20px] tracking-normal md:tracking-[0.5px]">{props.praktisi}</p>
                                <p className="text-[#3A57E8] text-[10px] md:text-[14px] font-medium leading-[20px] cursor-pointer">Lihat alamat</p>
                            </div>
                        </div>
                 }
                </div>
            </div>
            {ShowButton(props.status)}
        </div>
        </>
    )
}

export default CardTransaksi;