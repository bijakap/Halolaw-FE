import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import TransaksiPraktisi from "../../../components/praktisi/TransaksiPraktisi";
import { useState } from "react";

const transaksi = () => {
  const [active, setActive] = useState(false)
  return(
    <div className="bg-[#F6F7FB]">
    {
      active ? <></> : <SidebarPraktisi /> 
    }
    <div className={active ? "ml-0" : "ml-[250px]"}>
      <div>
        {/* content */}
        <NavbarPraktisi setClose={setActive} close={active}/>
        <TransaksiPraktisi/>
      </div>
      <FooterPraktisi />
    </div>
  </div>
  )
}

export default transaksi;