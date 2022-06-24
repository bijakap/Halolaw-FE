import SidebarAdmin from "../../../components/sidebar/SidebarAdmin";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import TermCondition from "../../../components/praktisi/TermCondition";
import useNavbarSidebar from "../../../hooks/useNavbarSidebar";

const TermConditionPage = () => {

  const [active, {setIsMobile , setIsActive}] = useNavbarSidebar()

  return (
    <div className="bg-[#F6F7FB]">
      {
        active ?  <></> : <SidebarAdmin ActiveNumber={5} childActiveNumber={2}/> 
      }
      <div className={setIsMobile()}>
        <div>
          {/* content */}
          <div className={active ? "ml-0 -z-10" : "lg:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active}/>
          </div>
          <TermCondition/>
        </div>
        <FooterPraktisi user='admin' />
      </div>
    </div>
  );
};

export default TermConditionPage;
