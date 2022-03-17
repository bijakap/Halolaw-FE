import React from "react";
import Image from "next/image";

function SignUp(){
    return(
        <div className="flex w-screen h-auto font-['Inter']">
            <div className="w-full md:w-1/2 mx-[25px] md:mx-0 flex justify-center items-center h-auto md:h-screen">
                <div className="pt-8 md:pt-0">
                    <p className="text-[33px] font-[700] leading-[40px] tracking-[0.25px] pb-[40px]">Daftar</p>
                    <form action="#" className="space-y-[16px]">
                        <div class="">
                            <label class="text-sm font-medium text-gray-700 tracking-wide pb-2">Nama Lengkap <span className="text-[#3A57E8]">*</span></label>
                            <input class=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]" type="text" placeholder="Nama Lengkap Anda"></input>
                        </div>
                        <div class="">
                            <label class="text-sm font-medium text-gray-700 tracking-wide pb-2">Email <span className="text-[#3A57E8]">*</span></label>
                            <input class=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]" type="email" placeholder="mail@gmail.com"></input>
                        </div>
                        <div class="">
                            <label class="text-sm font-medium text-gray-700 tracking-wide pb-2">Password <span className="text-[#3A57E8]">*</span></label>
                            <input class=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]" type="password" placeholder="***********"></input>
                        </div>
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"></input>
                            <label for="remember_me" class="ml-2 block text-sm text-gray-800">Saya setuju dengan <a href="#" className="text-[#2A41C7]">syarat & ketentuan</a></label>
                        </div>
                        <div className="pt-[40px] pb-4">
                            <button type="submit" class="w-full flex justify-center bg-[#3A57E8] text-gray-100 p-3 rounded-[8px] tracking-wide font-semibold cursor-pointer">
                            Daftar
                            </button>
                        </div>
                    </form>
                    <button className="bg-white border-2 rounded-[8px] w-full py-[12px] flex justify-center font-[700] text-[#475467]"><img src="/google.svg" className="flex self-center h-auto pr-2"></img>Sign up with Google</button>
                    <p className="text-sm mt-[40px]">Sudah memiliki akun? <a href="#" className="text-[#2A41C7] font-[600]">Masuk</a></p>
                </div>
            </div>
            <div className="hidden lg:block w-1/2 h-screen bg-[url('/login.png')] bg-cover">
                
            </div>

        </div>   
    )
}

export default SignUp;