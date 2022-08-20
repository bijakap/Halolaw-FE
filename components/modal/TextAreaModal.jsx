import { useState } from "react";


const TextAreaModal = ({active, setCancel, setConfirm, value, title, placeholder, confirmText, cancelText, cancelColor, confirmColor}) => {
  const [Value, setValue] = useState(value)
  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[547px]" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div className="px-6 py-4">
            <p className="mt-4 font-['Inter'] text-[#1D2939] text-[16px] leading-5 font-normal tracking-[0.25px] text-left">{title}</p>
            <textarea value={Value} onChange={(e) => setValue(e.target.value)} className="mt-[16px] w-full bg-white border border-[#98A2B3] rounded-lg resize-none px-4 py-[10px] text-[14px] font-normal leading-5 trancking-[0.25px] outline-none" placeholder={placeholder} rows="6">
              
            </textarea>
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
TextAreaModal.defaultProps = {
  active : false,
  title : "Title Modal",
  placeholder : "Insert Placeholder Text",
  cancelText : "Cancel",
  confirmText : "Confirm",
  cancelColor : "#F2F4F7",
  confirmColor : "#3A57E8",
  value : "",
}

export default TextAreaModal;