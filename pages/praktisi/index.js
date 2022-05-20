import Dashboard from "../../components/praktisi/Dashboard";
import SidebarPraktisi from "../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import FooterPraktisi from "../../components/footer/FooterPraktisi";
import { useState } from "react";

const praktisi = () => {
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
        <Dashboard/>
      </div>
      <FooterPraktisi />
    </div>
  </div>
  )
}

export default praktisi;