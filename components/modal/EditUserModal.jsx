

const EditUserModal = ({active, setActive, setReset}) => {
  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[520px]" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div className="w-full flex py-3 px-9 border-b">
            <p className="text-[#344054] text-center font-bold text-[19px] leading-6 tracking-[0.15px] w-full">
              Edit User
            </p>
            <button
              onClick={setActive}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3 5.70973C17.91 5.31973 17.28 5.31973 16.89 5.70973L12 10.5897L7.10997 5.69973C6.71997 5.30973 6.08997 5.30973 5.69997 5.69973C5.30997 6.08973 5.30997 6.71973 5.69997 7.10973L10.59 11.9997L5.69997 16.8897C5.30997 17.2797 5.30997 17.9097 5.69997 18.2997C6.08997 18.6897 6.71997 18.6897 7.10997 18.2997L12 13.4097L16.89 18.2997C17.28 18.6897 17.91 18.6897 18.3 18.2997C18.69 17.9097 18.69 17.2797 18.3 16.8897L13.41 11.9997L18.3 7.10973C18.68 6.72973 18.68 6.08973 18.3 5.70973Z" fill="#667085"/>
              </svg>
            </button>
          </div>
          <div className="py-2 px-4">
            <div className="mb-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide pb-2">Nama Lengkap </label>
              <input className=" w-full text-base px-4 py-2 border border-[#D0D5DD] bg-[#E4E7EC] rounded-lg focus:outline-none focus:border-[#3A57E8]" type="text" disabled placeholder="Aditya Zhafir Dhiaulhaq"></input>
            </div>
            <div className="mb-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide pb-2">Email </label>
              <input className=" w-full text-base px-4 py-2 border border-[#D0D5DD] bg-[#E4E7EC] rounded-lg focus:outline-none focus:border-[#3A57E8]" type="text" disabled placeholder="adiyazhafir@gmail.com"></input>
            </div>
            <div className="flex justify-end mt-2 mb-2">
              <p className="text-[#2A41C7] text-[14px] leading-[20px] font-semibold cursor-pointer" onClick={setReset}>Reset Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
EditUserModal.defaultProps = {
  active : false,
  cancelText : "Cancel",
  confirmText : "Confirm",
  cancelColor : "#F2F4F7",
  confirmColor : "#3A57E8",
}

export default EditUserModal;