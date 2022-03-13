import {react, Fragment} from "react";
import { Menu, Transition } from '@headlessui/react'
import Image from "next/image";

function Navbar(){
    const nama = "Farizi"
    const url_img = "/avatardummy.png"

    return(
        <>
            <nav className="font-['Open Sans'] text-[#475467] font-[500] text-[14px] bg-white shadow-lg">
                <div className="flex justify-between bg-white mx-[100px]">
                    <div className="flex py-[22px] m-0">
                        <img src="./logo.svg" className="mr-[48px] w-[128px]"></img>
                        <ul className="list-none flex py-2 self-center space-x-[32px]">
                            <li className="hover:text-[#3D87DE]"><a href="#">Pembuatan Dokumen</a></li>
                            <li className="hover:text-[#3D87DE]"><a href="#">Tentang Kami</a></li>
                            <li className="hover:text-[#3D87DE]"><a href="#">Artikel</a></li>
                        </ul>
                    </div>
                    <Menu as="div" className="relative self-center font-['Inter']">
                        <div className="flex">
                            <img src="./Notification.svg" className="mr-[32px] cursor-pointer"></img>
                            <Menu.Button className="flex">
                                <div className="w-[40px] h-[40px] bg-black rounded-full">
                                    <img src={url_img} className="object-cover w-full"></img>
                                </div>
                                <span className="self-center ml-[8px]">{nama}</span>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right z-50 w-[228px] border absolute rounded-[8px] bg-white mt-6">
                                <div className="p-[16px] space-y-[16px] ">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 hover:text-blue-500'
                                    )}
                                    >
                                    Profil Saya
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 hover:text-blue-500'
                                    )}
                                    >
                                    Support
                                    </a>
                                )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                   <button
                                        type="submit"
                                        className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 hover:text-blue-500'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                    )}
                                </Menu.Item>
                                </form>
                                </div>
                                </Menu.Items>
                            
                            {/* <div className="w-[228px] h-[208px] border absolute rounded-[8px]bg-white mt-6">
                                <ul className="list-none p-[16px] space-y-[16px]">
                                    <li className="py-[14px] pl-[4px]"><a href="#">Profil Saya</a></li>
                                    <li className="py-[14px] pl-[4px]"><a href="#">Transaksi Saya</a></li>
                                    <li className="py-[14px] pl-[4px]"><a href="#">Logout</a></li>
                                </ul>
                            </div> */}
                        </Transition>
                    </Menu>
                </div>
            </nav>    
        </>
        
    )
}

export default Navbar;