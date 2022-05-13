import SidebarPraktisi from "../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import PrivacyPolicy from "../../components/praktisi/PrivacyPolicy";
import FooterPraktisi from "../../components/footer/FooterPraktisi";

const privacyPolicy = () => {
  return (
    <div className="bg-[#F6F7FB]">
      <SidebarPraktisi />
      <div className="ml-[250px]">
        <div>
          {/* content */}
          <NavbarPraktisi />
          <PrivacyPolicy />
        </div>
          <FooterPraktisi />
      </div>
    </div>
  );
};

export default privacyPolicy;
