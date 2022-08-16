


const InformationModal = ({active, setActive, message, title}) => {
  return (
    <div className={active ? "hidden" : 'fixed z-10 inset-0 overflow-y-auto bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[520px]" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div className="flex justify-between border-b px-6 py-3">
            <p className="text-center font-['Inter'] text-[#344054] text-[23px] leading-[32px] font-semibold">{title}</p>
            <button className="self-center" onClick={() => setActive(!active)}>
              <img src="./modal/close.svg"/>
            </button>
          </div>
          <div className="px-6 py-4">
            <p className="text-[#344054] text-[16px] leading-[24px] font-normal tracking-[0.5px]">{message}</p>
          </div>
        </div>
    </div>
  </div>
  )
}
InformationModal.defaultProps = {
  active : false,
  title : "title information",
  message : "bla bla bla ........."
}

export default InformationModal