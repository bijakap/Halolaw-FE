import Invoice from "../../../components/praktisi/Invoice";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import useNavbarSidebar from "../../../hooks/useNavbarSidebar";

const InvoicePraktisi = () => {
  const [active, {setIsMobile , setIsActive}] = useNavbarSidebar()

  return(
    <div className="bg-[#F6F7FB]">
    {
      active ?  <></> : <SidebarPraktisi ActiveNumber={0}/> 
    }
    <div className={setIsMobile()}>
      <div>
        {/* content */}
        <div className={active ? "ml-0 -z-10" : "lg:ml-0 ml-[250px]"}>
          <NavbarPraktisi setClose={setIsActive} close={active}/>
        </div>
        <Invoice/>
      </div>
    </div>
  </div>
  )
}

export default InvoicePraktisi;