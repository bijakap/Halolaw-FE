import TermCondition from "../../components/praktisi/TermCondition";
import SidebarPraktisi from "../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../components/footer/FooterPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";

const termCondition = () => {
  return (
    <div className="bg-[#F6F7FB]">
      <SidebarPraktisi />
      <div className="ml-[250px]">
        <div>
          {/* content */}
          <NavbarPraktisi />
          <TermCondition />
        </div>
        <FooterPraktisi />
      </div>
    </div>
  );
};

export default termCondition;
