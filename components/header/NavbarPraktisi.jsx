
const NavbarPraktisi = ({close, setClose}) => {
  return(
    <div className={`bg-white w-auto p-5 shadow-md`}>
      {/* Desktop */}
      <div className="md:flex hidden justify-between">
        <button onClick={() => setClose(!close)}><img src="/sidebar/menu.svg" alt="menu" /></button>
        <div className="block">
          <div className="flex gap-6 mr-5">
              <img src="/sidebar/lonceng.svg" alt="lonceng" />
              <img src='/profiledummy.png' className='rounded-full h-8 w-8 object-cover'/>
              <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Aditya</p>
            </div>
        </div>
      </div>
      {/* mobile */}
      {
        close ?
        <div className="md:hidden flex justify-between">
          <button onClick={() => setClose(!close)}><img src="/sidebar/menu.svg" alt="menu" /></button>
          <div className="block">
            <div className="flex gap-6 mr-5">
                <img src="/sidebar/lonceng.svg" alt="lonceng" />
                <img src='/profiledummy.png' className='rounded-full h-8 w-8 object-cover'/>
                <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Aditya</p>
              </div>
          </div>
        </div>
        :
        <div className="md:hidden flex justify-start">
          <button onClick={() => setClose(!close)} className="my-1"><img src="/sidebar/menu.svg" alt="menu" /></button>
        </div>
      }
    </div>
  );
};

export default NavbarPraktisi;