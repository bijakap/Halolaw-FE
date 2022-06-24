import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import TransaksiPraktisi from "../../../components/praktisi/TransaksiPraktisi";
import useNavbarSidebar from "../../../hooks/useNavbarSidebar";

const Transaksi = () => {
  const [active, {setIsMobile , setIsActive}] = useNavbarSidebar()

  return(
    <div className="bg-[#F6F7FB]">
    {
      active ?  <></> : <SidebarPraktisi ActiveNumber={1}/> 
    }
    <div className={setIsMobile()}>
      <div>
        {/* content */}
        <div className={active ? "ml-0 -z-10" : "lg:ml-0 ml-[250px]"}>
          <NavbarPraktisi setClose={setIsActive} close={active}/>
        </div>
        <TransaksiPraktisi/>
      </div>
      <FooterPraktisi privacy="/praktisi/pengaturan/privacyPolicy" term='/praktisi/pengaturan/termCondition'/>
    </div>
  </div>
  )
}

export default Transaksi;