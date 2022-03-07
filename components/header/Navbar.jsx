import react from "react";
import Image from "next/image";

function Navbar(){
    const nama = "Farizi"
    const ulr_img = "/avatardummy.png"

    return(
        <>
            <nav className="font-['Open Sans'] text-[#475467] font-[500] text-[14px] bg-white shadow-lg">
                <div className="flex justify-between bg-white mx-[100px]">
                    <div className="flex my-[22px]">
                        <img src="./logo.svg" className="mr-[48px] w-[128px]"></img>
                        <ul className="list-none flex self-center space-x-[32px]">
                            <li><a href="#">Pembuatan Dokumen</a></li>
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Artikel</a></li>
                        </ul>
                    </div>
                    <div className="flex self-center">
                        <img src="./Notification.svg" className="mr-[32px]"></img>
                        <div className="w-[40px] h-[40px] bg-black rounded-full">
                            <img src={ulr_img} className="object-cover w-full"></img>
                        </div>
                        <span className="self-center ml-[8px]">{nama}</span>
                    </div>
                </div>
            </nav>    
        </>
        
    )
}

export default Navbar;