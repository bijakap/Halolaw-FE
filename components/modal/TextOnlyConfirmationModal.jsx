

const TextOnlyConfirmationModal = ({active, setActive, title, message, confirmText, cancelText, cancelColor, confirmColor}) => {
  return (
    <div className={active ? "hidden" : 'fixed z-10 inset-0 overflow-y-auto bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[540px] p-6" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div>
            <p className="mb-2 font-['Inter'] text-[#252A31] text-[16px] leading-5 font-semibold">{title}</p>
            <p className="font-['Inter'] text-[#4F5E71] text-[16px] leading-5 font-normal">{message}</p>
          </div>
          <div className="flex justify-end mt-8 gap-2">
            <button className="rounded-lg py-[10px] px-6 text-[#667085]" style={{ backgroundColor : cancelColor }} onClick={() => setActive(!active)}>{cancelText}</button>
            <button className="rounded-lg py-[10px] px-6 text-white" style={{ backgroundColor : confirmColor }} onClick={() => setActive(!active)}>{confirmText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
TextOnlyConfirmationModal.defaultProps = {
  active : false,
  title : "Confirmation Title?",
  message : "description Confirmation",
  cancelText : "Cancel",
  confirmText : "Confirm",
  cancelColor : "#F2F4F7",
  confirmColor : "#3A57E8",
}

export default TextOnlyConfirmationModal;