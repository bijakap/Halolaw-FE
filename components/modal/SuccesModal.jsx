

const SuccesModal = ({active, setActive, message}) => {
  return (
    <div className={active === false ? "hidden" : 'fixed z-10 inset-0 overflow-hidden bg-black/30'}>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="rounded-lg bg-white w-[459px] p-6" style={{ boxShadow : "0px 12px 24px rgba(37, 42, 49, 0.24), 0px 8px 60px rgba(37, 42, 49, 0.32)" }}>
          <div>
            <div className="flex justify-center">
              <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1921_22426)">
                  <path d="M36.5 72C56.3823 72 72.5 55.8823 72.5 36C72.5 16.1177 56.3823 0 36.5 0C16.6177 0 0.5 16.1177 0.5 36C0.5 55.8823 16.6177 72 36.5 72Z" fill="#47BF37"/>
                  <path d="M35.0014 51C32.5905 51 30.2151 50.4188 28.0765 49.3058C25.9379 48.1928 24.0991 46.5807 22.7158 44.606C21.3326 42.6314 20.4458 40.3524 20.1304 37.9622C19.815 35.572 20.0804 33.141 20.9041 30.8752C21.7278 28.6094 23.0855 26.5755 24.8622 24.9458C26.6389 23.3161 28.7823 22.1388 31.1107 21.5134C33.439 20.888 35.8839 20.8331 38.238 21.3533C40.5921 21.8735 42.7861 22.9535 44.6342 24.5017C44.7879 24.6274 44.9152 24.7824 45.0085 24.9576C45.1019 25.1329 45.1595 25.3249 45.1781 25.5226C45.1967 25.7203 45.1758 25.9197 45.1167 26.1093C45.0577 26.2988 44.9615 26.4748 44.8339 26.6269C44.7063 26.779 44.5498 26.9043 44.3734 26.9955C44.197 27.0867 44.0043 27.1419 43.8064 27.158C43.6085 27.1741 43.4093 27.1508 43.2205 27.0893C43.0317 27.0279 42.857 26.9295 42.7064 26.8C40.6457 25.0752 38.0656 24.0921 35.3796 24.0083C32.6937 23.9244 30.0573 24.7446 27.8929 26.3375C25.7286 27.9304 24.1617 30.2037 23.4432 32.7932C22.7247 35.3826 22.8963 38.1383 23.9304 40.6187C24.9645 43.099 26.8014 45.1604 29.1466 46.4725C31.4917 47.7846 34.2095 48.2715 36.8644 47.8551C39.5192 47.4387 41.9574 46.1432 43.7883 44.1761C45.6191 42.209 46.7367 39.6842 46.9618 37.0064C46.9758 36.8092 47.0292 36.6169 47.1186 36.4407C47.208 36.2644 47.3318 36.1079 47.4825 35.9801C47.6333 35.8524 47.8081 35.7561 47.9967 35.6968C48.1852 35.6376 48.3837 35.6167 48.5804 35.6352C48.7767 35.6515 48.9677 35.7063 49.1428 35.7965C49.3178 35.8867 49.4734 36.0105 49.6006 36.1608C49.7278 36.3111 49.8241 36.485 49.8841 36.6726C49.944 36.8601 49.9665 37.0576 49.9501 37.2538C49.6182 40.9954 47.9017 44.4783 45.1368 47.0208C42.3719 49.5633 38.7576 50.9823 35.0014 51ZM38.3822 40.7373L52.5604 26.5605C52.8336 26.2776 52.9848 25.8987 52.9814 25.5054C52.978 25.1121 52.8202 24.7359 52.5421 24.4578C52.264 24.1797 51.8878 24.0219 51.4945 24.0185C51.1012 24.0151 50.7223 24.1663 50.4394 24.4395L36.2611 38.6161C36.1143 38.7646 35.9378 38.8803 35.7432 38.9558C35.5486 39.0313 35.3402 39.0648 35.1317 39.0541C34.9305 39.0475 34.7329 38.9994 34.5511 38.9128C34.3694 38.8263 34.2075 38.7031 34.0756 38.5511L30.179 33.575C29.9318 33.2674 29.5734 33.0696 29.1814 33.0245C28.7894 32.9794 28.3954 33.0906 28.0848 33.3339C27.7742 33.5773 27.572 33.9333 27.522 34.3247C27.472 34.7161 27.5783 35.1114 27.8177 35.425L31.742 40.4363C32.1428 40.9163 32.6389 41.3077 33.199 41.5857C33.7591 41.8638 34.3709 42.0223 34.9955 42.0513C35.0629 42.0542 35.1303 42.0556 35.1976 42.0556C36.3918 42.0551 37.5371 41.581 38.3822 40.7373Z" fill="white"/>
                </g>
                <defs>
                {/* <clipPath id="clip0_1921_22426"> */}
                <rect width="72" height="72" fill="white" transform="translate(0.5)"/>
                {/* </clipPath> */}
                </defs>
              </svg>

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