

const ConfirmationModal = ({active, setCancel, setConfirm, message, image, confirmText, cancelText, cancelColor, confirmColor}) => {
  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[547px]" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div className="px-6 py-4">
            <div className="flex justify-center">
              <img className="object-cover w-full" src={`./modal/` + image} alt="images modal"/>
            </div>
            <p className="mt-4 font-['Inter'] text-[#1D2939] text-[16px] leading-5 font-normal">{message}</p>
          </div>
          <div className="flex justify-end border-t px-6 py-3 gap-4">
            <button className="rounded-lg py-[10px] px-6 text-[#667085]" style={{ backgroundColor : cancelColor }} onClick={setCancel}>{cancelText}</button>
            <button className="rounded-lg py-[10px] px-6 text-white" style={{ backgroundColor : confirmColor }} onClick={setConfirm}>{confirmText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
ConfirmationModal.defaultProps = {
  active : false,
  message : "Confirmation Modal",
  image : "checkdate.jpg",
  cancelText : "Cancel",
  confirmText : "Confirm",
  cancelColor : "#F2F4F7",
  confirmColor : "#3A57E8",
}

export default ConfirmationModal;