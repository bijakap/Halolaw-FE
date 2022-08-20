

const SuccesModal = ({active, setActive, message}) => {
  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[459px] p-6" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div>
            <div className="flex justify-center">
              <img src="/modal/checklist 1.svg" alt="success"></img>
            </div>
            <p className="text-center mt-4 font-['Inter'] text-[#344054] text-[16px] leading-5 font-normal">{message}</p>
          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-[#47BF37] rounded-lg py-[10px] px-6 text-white" onClick={setActive}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}
SuccesModal.defaultProps = {
  active : false,
  message : "Sucess Modal"
}

export default SuccesModal