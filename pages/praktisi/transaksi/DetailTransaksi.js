import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import DetailTransaksi from "../../../components/praktisi/DetailTransaksi";
import useNavbarSidebar from "../../../hooks/useNavbarSidebar";

const TransaksiDetail = () => {
  const [active, {setIsMobile , setIsActive}] = useNavbarSidebar()
    return (
    <div className="bg-[#F6F7FB]">
      {
        active ?  <></> : <SidebarPraktisi ActiveNumber={1}/> 
      }
      <div className={setIsMobile()}>
        <div>
          {/* content */}
          <div className={active ? "ml-0 -z-10" : "md:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active}/>
          </div>
          <DetailTransaksi/>
        </div>
        <FooterPraktisi />
      </div>
    </div>
    );
  };
  
  export default TransaksiDetail;