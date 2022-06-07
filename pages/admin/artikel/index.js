import useNavbarSidebar from "../../../hooks/useNavbarSidebar";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import SidebarAdmin from "../../../components/sidebar/SidebarAdmin";
import ArtikelAdmin from "../../../components/admin/Artikel";

const Artikel = () => {
  const [active, { setIsMobile, setIsActive }] = useNavbarSidebar();

  return (
    <div className="bg-[#F6F7FB]">
      {active ? <></> : <SidebarAdmin ActiveNumber={4} />}
      <div className={setIsMobile()}>
        <div>
          {/* Navbar */}
          <div className={active ? "ml-0 -z-10" : "lg:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active} />
          </div>
          <ArtikelAdmin />
        </div>
        {/* Footer */}
        <FooterPraktisi />
      </div>
    </div>
  );
};

export default Artikel;
