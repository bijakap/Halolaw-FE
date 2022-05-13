const NavbarPraktisi = () => {
  return (
      <div className="bg-white w-auto flex justify-between p-5 shadow-md">
        <div><button><img src="/sidebar/menu.svg" alt="menu" /></button></div>
        <div className="flex gap-6 items-center">
          <div><img src="/sidebar/lonceng.svg" alt="lonceng" /></div>
          <div className="flex flex-row items-center gap-4">
            <img src="/avatarPraktisi.png" alt="avatar" className="w-8" />
            <p className="font-semibold leading-5 tracking-[.25px] text-[#232D42] text-[14px]">Aditya</p>
          </div>
          
        </div>
      </div>
  );
};

export default NavbarPraktisi;
