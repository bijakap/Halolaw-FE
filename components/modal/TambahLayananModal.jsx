import {useState } from "react";

const TambahLayanaModal = ({active, setConfirm, setCancel, confirmText, cancelText, cancelColor, confirmColor}) => {
  const [input, setInput] = useState("");
  
  const handleInput = (e) =>{
    setInput(e.target.files[0])
  }

  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[520px]" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div className="w-full py-3 px-9 border-b">
            <p className="text-[#344054] text-center font-bold text-[19px] leading-6 tracking-[0.15px] ">
              Tambah Layanan
            </p>
          </div>
          <div className="py-2 px-4">
            <div className="mb-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide pb-2">Nama Layanan <span className="text-[#C4351A]">*</span></label>
              <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]" type="text" placeholder="Nama Layanan"></input>
            </div>
            <div>
                <label className="text-sm font-medium text-gray-700 tracking-wide pb-2">
                  Deskripsi <span className="text-[#C4351A]">*</span>
                </label>
                <textarea
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8] resize-none placeholder:text-sm placeholder:tracking-[0.25px] placeholder:text-[#98A2B3]"
                  rows={7}
                  placeholder="Deskripsi Singkat"
                ></textarea>
            </div>
            <div className="mb-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide pb-2">
                  Deskripsi <span className="text-[#C4351A]">*</span>
                </label>
                <input type="file" className="hidden" id="image" onChange={(e) => {handleInput(e)}} accept="image/png, image/jpeg, image/jpg"/>
                <div className="flex gap-4">
                  <button onClick={() => document.getElementById("image").click()} className="border border-[#D0D5DD] bg-[#F2F4F7] py-[6px] px-4 rounded-lg">
                  {
                    input === "" ?
                    <span>Choose File</span> :
                    <span>Change File</span>

                  }
                  </button>
                  {
                    input.length != 0 ? 
                    <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">{input.name}</span>
                    :
                    <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">No file chosen</span> 
                  }
                </div>
            </div>
            <div className="flex gap-4 mt-6 mb-2">
              <button className="rounded-lg py-[10px] px-6 text-[#667085] w-full" style={{ backgroundColor : cancelColor }} onClick={setCancel}>{cancelText}</button>
              <button className="rounded-lg py-[10px] px-6 text-white w-full" style={{ backgroundColor : confirmColor }} onClick={setConfirm}>{confirmText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
TambahLayanaModal.defaultProps = {
  active : false,
  cancelText : "Cancel",
  confirmText : "Confirm",
  cancelColor : "#F2F4F7",
  confirmColor : "#3A57E8",
}

export default TambahLayanaModal;