import useNavbarSidebar from "../../hooks/useNavbarSidebar";
import FooterPraktisi from "../../components/footer/FooterPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import SidebarAdmin from "../../components/sidebar/SidebarAdmin";

const Admin = () => {
  const [active, {setIsMobile , setIsActive}] = useNavbarSidebar()
  return(
    <div className="bg-[#F6F7FB]">
    {
      active ?  <></> : <SidebarAdmin ActiveNumber={0}/> 
    }
    <div className={setIsMobile()}>
      <div>
        {/* Navbar */}
        <div className={active ? "ml-0 -z-10" : "md:ml-0 ml-[250px]"}>
          <NavbarPraktisi setClose={setIsActive} close={active}/>
        </div>
        {/* content */}
        <p>Contentnya</p>
      </div>
      {/* Footer */}
      <FooterPraktisi />
    </div>
  </div>
  )
}

export default Admin;