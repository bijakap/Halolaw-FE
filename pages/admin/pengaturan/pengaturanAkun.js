import PengaturanAkun from "../../../components/praktisi/pengaturanAkun";
import SidebarAdmin from "../../../components/sidebar/SidebarAdmin";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import useNavbarSidebar from "../../../hooks/useNavbarSidebar";

const PengaturanAkunPage = () => {

  const [active, {setIsMobile , setIsActive}] = useNavbarSidebar()
  
  return (
    <div className="bg-[#F6F7FB]">
      {
        active ?  <></> : <SidebarAdmin ActiveNumber={5} childActiveNumber={0}/> 
      }
      <div className={setIsMobile()}>
        <div>
          {/* content */}
          <div className={active ? "ml-0 -z-10" : "lg:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active}/>
          </div>
          <PengaturanAkun/>
        </div>
        <FooterPraktisi user='admin' />
      </div>
    </div>
    );
  };
  
  export default PengaturanAkunPage;
  