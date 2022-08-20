import PrintIcon from '@mui/icons-material/Print';
import TextOnlyConfirmationModal from '../modal/TextOnlyConfirmationModal';
import Link from 'next/link';
import { useState } from 'react';

function CardTransaksi({props, href, setActive, active}){
    const [show, setShow] = useState(false)
    const [modal, setModal] = useState(false)
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
                    <Link href={href[1]}>
                        <p className='self-center hover:underline cursor-pointer text-xs lg:text-[14px]'><PrintIcon/> Invoice</p>
                    </Link>
                    <Link href={href[0]}>
                        <button className={`bg-[#47BF37] hover:bg-[#40a932] text-white md:px-6 px-3 md:py-3 py-1 rounded-lg`}>
                            <span className='text-xs lg:leading-[20px] tracking-[0.15px] lg:text-[14px]'>Update Progress</span>
                        </button>
                    </Link>
                </div>
            )
        } else if (status.toLowerCase() === "selesai"){
            return(
                <div className='flex justify-end py-2 md:py-4 px-2 md:px-6 gap-4'>
                <p className='self-center hover:underline cursor-pointer text-xs lg:text-[14px]'><PrintIcon/> Invoice</p>
                <Link href={href[0]}>
                    <button className={`border bg-white text-[#3A57E8] hover:bg-[#2c48cf] hover:text-white md:px-6 px-3 md:py-3 py-1 rounded-lg`}>
                        <span className='text-xs lg:leading-[20px] tracking-[0.15px] lg:text-[14px]'>Lihat Detail</span>
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
        <div className='border rounded-lg bg-white drop-shadow-sm mb-4'>
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
                        <div className='flex justify-between w-[20%]'>
                            <div className='flex flex-col justify-between '>
                                <p className="text-[#475467] text-[10px] md:text-[12px] font-medium leading-[18px] tracking-[0.4px]">Praktisi:</p>
                                <div className="space-y-[4px]">
                                    <p className="text-[#475467] text-[12px] md:text-[16px] font-semibold leading-[20px] tracking-normal md:tracking-[0.5px]">{props.praktisi}</p>
                                    <p 
                                        onClick={setActive}
                                        className="text-[#3A57E8] text-[10px] md:text-[14px] font-medium leading-[20px] cursor-pointer">
                                        Lihat alamat
                                    </p>
                                </div>
                            </div>
                            {
                                props.status.toLowerCase() === "aktif" ? 
                                <div className='relative'>
                                    <button onClick={() => setShow(!show)}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#323232"/>
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={() => setModal(!modal)}
                                        className={`${show ? "" : "hidden"} absolute p-[10px] whitespace-nowrap -translate-x-[100%] bottom-3 bg-[#F2F4F7] border border-[#D0D5DD]`} style={{ boxShadow: "0px 2px 4px rgba(61, 141, 255, 0.15)"}}>
                                        <p className='text-[#344054] font-medium text-[16px] leading-[20px] font-["Inter"] tracking-[0.5px]'>
                                            Tutup transaksi
                                        </p>
                                    </button>
                                </div>
                                :
                                <></> 
                            }
                        </div>
                 }
                </div>
            </div>
            {ShowButton(props.status)}
        </div>
        <TextOnlyConfirmationModal
            active={modal}
            setConfirm={() => setModal(!modal)}
            setCancel={() => setModal(!modal)}
            title="Apakah Anda ingin menyelesaikan transaksi ini?"
            message="Setelah Anda menutup transaksi ini maka Anda tidak dapat melakukan update progres kembali. Anda hanya dapat melihat progres yang telah Anda lakukan sebelumnya"
            confirmText="Tutup Transaksi"
        />
        </>
    )
}

export default CardTransaksi;