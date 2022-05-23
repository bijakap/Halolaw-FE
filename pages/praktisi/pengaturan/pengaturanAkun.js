import PengaturanAkun from "../../../components/praktisi/pengaturanAkun";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import useStateNavSide from "../../../hooks/useStateNavSide";

const PengaturanAkun = () => {
  const [active, {setIsMobile , setIsActive}] = useStateNavSide()
  return (
    <div className="bg-[#F6F7FB]">
      {
        active ?  <></> : <SidebarPraktisi ActiveNumber={2} childActiveNumber={0}/> 
      }
      <div className={setIsMobile()}>
        <div>
          {/* content */}
          <div className={active ? "ml-0 -z-10" : "md:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active}/>
          </div>
          <PengaturanAkun/>
        </div>
        <FooterPraktisi />
      </div>
    </div>
    );
  };
  
  export default PengaturanAkun;
  