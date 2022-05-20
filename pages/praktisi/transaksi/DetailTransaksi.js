import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import DetailTransaksi from "../../../components/praktisi/DetailTransaksi";

const TransaksiDetail = () => {
    return (
      <div className="bg-[#F6F7FB]">
        <SidebarPraktisi />
        <div className="ml-[250px]">
          <div>
            {/* content */}
            <NavbarPraktisi />
            <DetailTransaksi />
          </div>
          <FooterPraktisi />
        </div>
      </div>
    );
  };
  
  export default TransaksiDetail;