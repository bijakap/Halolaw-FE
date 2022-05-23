import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import DetailTransaksi from "../../../components/praktisi/DetailTransaksi";
import useStateNavSide from "../../../hooks/useStateNavSide";

const TransaksiDetail = () => {
  const [active, {setIsMobile , setIsActive}] = useStateNavSide()
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