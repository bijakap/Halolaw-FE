import Dashboard from "../../components/praktisi/Dashboard";
import SidebarPraktisi from "../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import FooterPraktisi from "../../components/footer/FooterPraktisi";
import useNavbarSidebar from "../../hooks/useNavbarSidebar";

const Praktisi = () => {
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
        <Dashboard/>
      </div>
      <FooterPraktisi />
    </div>
  </div>
  )
}

export default Praktisi;