import Link from "next/link";
import { useRouter } from 'next/router'

const NavbarPraktisi = ({close, setClose}) => {
  const router = useRouter()
  // console.log(router.pathname);
  
  return(
    <div className={`bg-white w-auto p-5 shadow-md`}>
      {/* Desktop */}
      <div className="lg:flex hidden justify-between">
        <button onClick={() => setClose(!close)}><img src="/sidebar/menu.svg" alt="menu" /></button>
        <div className="block">
          <div className="flex gap-6 mr-5">
              <img src="/sidebar/lonceng.svg" alt="lonceng" />
              {
                router.pathname.includes("admin") ? 
                <a className="flex gap-4">
                  <img src='/avatarAdmin.png' className='rounded-full h-8 w-8 object-cover'/>
                  <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Admin</p>
                </a>
                :
                <Link href={"/praktisi/profil"}>
                  <a className="flex gap-4">
                    <img src='/avatarPraktisi.png' className='rounded-full h-8 w-8 object-cover'/>
                    <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Aditya</p>
                  </a>
                </Link>
              }
              
            </div>
        </div>
      </div>
      {/* mobile */}
      {
        close ?
        <div className="lg:hidden flex justify-between">
          <button onClick={() => setClose(!close)}><img src="/sidebar/menu.svg" alt="menu" /></button>
          <div className="block">
            <div className="flex gap-6 mr-5">
                <img src="/sidebar/lonceng.svg" alt="lonceng" />
                {
                router.pathname.includes("admin") ? 
                  <Link href={"/admin/pengaturan/pengaturanAkun"}>
                    <a className="flex gap-4">
                      <img src='/avatarPraktisi.png' className='rounded-full h-8 w-8 object-cover'/>
                      <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Aditya</p>
                    </a>
                  </Link>
                  :
                  <Link href={"/praktisi/profil"}>
                    <a className="flex gap-4">
                      <img src='/avatarPraktisi.png' className='rounded-full h-8 w-8 object-cover'/>
                      <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Aditya</p>
                    </a>
                  </Link>
                }
              </div>
          </div>
        </div>
        :
        <div className="lg:hidden flex justify-start">
          <button onClick={() => setClose(!close)} className="my-1"><img src="/sidebar/menu.svg" alt="menu" /></button>
        </div>
      }
    </div>
  );
};

export default NavbarPraktisi;