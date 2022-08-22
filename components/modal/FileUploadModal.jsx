import { useState } from "react";


const FileUploadModal = ({active, setConfirm, setCancel, title, message, confirmText, cancelText, cancelColor, confirmColor, status}) => {
  const [file, setFile] = useState(null)

  const handleFile = (e) => {
    // console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  const handleDelete = () => {
    setFile(null)
  }

  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[756px] p-10" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div>
            <p className="mb-2 font-['Inter'] text-[#4A4A68] text-[16px] leading-5 tracking-[0.15px] font-semibold text-left">{title}</p>
            <p className="font-['Inter'] text-[#667085] text-[12px] leading-[18px] tracking-[0.4px] font-normal text-left">{message}</p>
          </div>
          <div className="flex justify-between mt-10 gap-6">
            <div className="flex w-full">
              <div className="px-6 py-3 border border-[#ECF1F4] w-full rounded-l-lg">
                <p className="text-[#8C8CA2] font-normal text-[14px] leading-5 tracking-[0.25px]">
                  {
                    file === null ? 
                    "Upload"
                    :
                    file?.name
                  }
                </p>
              </div>
              <button className="px-8 py-3 border border-[#ECF1F4] bg-[#E8ECEF] rounded-r-lg" onClick={() => {document.getElementById("inputFile").click()}}>
                Browse
              </button>
              <input type={"file"} id="inputFile" className="hidden" accept="image/png, image/jpg, application/pdf" onChange={(e) => handleFile(e)}>

              </input>
            </div>
            <button disabled={file === null ? true : false} className={` ${file === null ? "bg-[#FFF6F2]" : "bg-[#E55124]"}  self-center  p-2 rounded-lg min-h-[40px] h-[40px]  min-w-[40px] w-[40px]`} onClick={() => handleDelete()}>
              <img src={file === null ? "./modal/delete_outline.svg" : "./modal/delete_outline_active.svg"}/>
            </button>
          </div>
          <div className="flex justify-between mt-10 gap-8">
            <button className="w-full rounded-lg py-[10px] px-6 text-[#667085]" style={{ backgroundColor : cancelColor }} onClick={setCancel}>{cancelText}</button>
            <button className="w-full rounded-lg py-[10px] px-6 text-white" style={{ backgroundColor : confirmColor }} onClick={setConfirm}>{confirmText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
FileUploadModal.defaultProps = {
  active : false,
  title : "Confirmation Title?",
  message : "description Confirmation",
  cancelText : "Cancel",
  confirmText : "Confirm",
  cancelColor : "#F2F4F7",
  confirmColor : "#3A57E8",
  status : false,
}

export default FileUploadModal;