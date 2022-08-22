

const DetailConsulModal = ({active, setActive, title, clientName, date, phoneNumber, category, message}) => {
  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-[#E4E7EC] w-[520px]" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div className="px-6 py-3 flex justify-between bg-white rounded-t-lg">
            <p className="text-center w-full">{title}</p>
            <button onClick={setActive}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3 5.70973C17.91 5.31973 17.28 5.31973 16.89 5.70973L12 10.5897L7.10997 5.69973C6.71997 5.30973 6.08997 5.30973 5.69997 5.69973C5.30997 6.08973 5.30997 6.71973 5.69997 7.10973L10.59 11.9997L5.69997 16.8897C5.30997 17.2797 5.30997 17.9097 5.69997 18.2997C6.08997 18.6897 6.71997 18.6897 7.10997 18.2997L12 13.4097L16.89 18.2997C17.28 18.6897 17.91 18.6897 18.3 18.2997C18.69 17.9097 18.69 17.2797 18.3 16.8897L13.41 11.9997L18.3 7.10973C18.68 6.72973 18.68 6.08973 18.3 5.70973Z" fill="#667085"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-col px-4 pb-3 pt-2 gap-2">
            <div className="bg-white p-4 flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="text-[#116E1C] font-semibold text-[12px] leading-[18px] tracking-[0.4px]">Client :</p>
                  <p className="text-[#101828] font-normal text-[14px] leading-[20px] tracking-[0.25px]">{clientName}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-[#116E1C] font-semibold text-[12px] leading-[18px] tracking-[0.4px]">Tanggal Reservasi :</p>
                  <p className="text-[#101828] font-normal text-[14px] leading-[20px] tracking-[0.25px]">{date}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="text-[#116E1C] font-semibold text-[12px] leading-[18px] tracking-[0.4px]">Nomor HP :</p>
                  <p className="text-[#101828] font-normal text-[14px] leading-[20px] tracking-[0.25px]">{phoneNumber}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-[#116E1C] font-semibold text-[12px] leading-[18px] tracking-[0.4px]">Kategori :</p>
                  <p className="text-[#101828] font-normal text-[14px] leading-[20px] tracking-[0.25px]">{category}</p>
                </div>
              </div>
            </div>
            <div className="bg-white ">
              <div className="w-full p-4">
                <p className="text-[#116E1C] font-semibold text-[12px] leading-[18px] tracking-[0.4px]">Detail Permasalahan :</p>
                <p className="text-[#101828] font-normal text-[14px] leading-[20px] tracking-[0.25px] text-justify">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
DetailConsulModal.defaultProps = {
  active : false,
  title : "Title Modal",
  clientName : "Farizi Andira",
  date : "11 Maret 2022",
  phoneNumber : "0822195342323",
  category : "Properti, HAKI",
  message : "Selamat pagi Halo Law, Saya ingin bertanya bolehkah saya memiliki jaminan (hak tanggungan) berupa tanah bila orang yang meminjam uang ke saya tidak mampu membayar utangnya?",
}

export default DetailConsulModal;