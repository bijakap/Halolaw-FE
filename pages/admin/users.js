import useNavbarSidebar from "../../hooks/useNavbarSidebar";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import SidebarAdmin from "../../components/sidebar/SidebarAdmin";
import FooterPraktisi from "../../components/footer/FooterPraktisi";
import ManageUsers from "../../components/admin/ManageUsers";

const Users = () => {
  const [active, { setIsMobile, setIsActive }] = useNavbarSidebar();

  return (
    <div className="bg-[#F6F7FB]">
      {active ? <></> : <SidebarAdmin ActiveNumber={3} />}
      <div className={setIsMobile()}>
        <div>
          {/* Navbar */}
          <div className={active ? "ml-0 -z-10" : "lg:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active} />
          </div>
          <ManageUsers />
        </div>
        {/* Footer */}
        <FooterPraktisi privacy="/admin/pengaturan/privacyPolicy" term='/admin/pengaturan/termCondition'/>
      </div>
    </div>
  );
};

export default Users;
