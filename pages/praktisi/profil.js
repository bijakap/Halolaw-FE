import SidebarPraktisi from "../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import FooterPraktisi from "../../components/footer/FooterPraktisi";
import ProfilPraktisi from "../../components/praktisi/ProfilPraktisi";

const profil = () => {
  return (
    <div className="bg-[#F6F7FB]">
      <SidebarPraktisi />
      <div className="ml-[250px]">
        <div>
          {/* content */}
          <NavbarPraktisi />
          <ProfilPraktisi />
        </div>
        <FooterPraktisi />
      </div>
    </div>
  );
};

export default profil;
