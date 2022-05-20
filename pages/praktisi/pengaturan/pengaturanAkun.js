import PengaturanAkun from "../../../components/praktisi/pengaturanAkun";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";

const pengaturanAkun = () => {
    return (
      <div className="bg-[#F6F7FB]">
        <SidebarPraktisi />
        <div className="ml-[250px]">
          <div>
            {/* content */}
            <NavbarPraktisi />
            <PengaturanAkun />
          </div>
          <FooterPraktisi />
        </div>
      </div>
    );
  };
  
  export default pengaturanAkun;
  