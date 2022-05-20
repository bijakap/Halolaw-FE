
const NavbarPraktisi = () => {
  return(
    <div className="bg-white w-auto flex justify-between p-5 shadow-md">
      <button><img src="/sidebar/menu.svg" alt="menu" /></button>
      <div className="flex gap-6 mr-5">
        <img src="/sidebar/lonceng.svg" alt="lonceng" />
        <img src='/profiledummy.png' className='rounded-full h-8 w-8 object-cover'/>
        <p className='self-center text-[#232D42] font-semibold text-sm leading-5 tracking-[0.25px]'>Aditya</p>
      </div>
    </div>
  );
};

export default NavbarPraktisi;
