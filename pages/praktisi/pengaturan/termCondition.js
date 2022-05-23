import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import TermCondition from "../../../components/praktisi/TermCondition";
import useStateNavSide from "../../../hooks/useStateNavSide";

const termCondition = () => {
  const [active, {setIsMobile , setIsActive}] = useStateNavSide()
  return (
    <div className="bg-[#F6F7FB]">
      {
        active ?  <></> : <SidebarPraktisi ActiveNumber={2} childActiveNumber={2}/> 
      }
      <div className={setIsMobile()}>
        <div>
          {/* content */}
          <div className={active ? "ml-0 -z-10" : "md:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active}/>
          </div>
          <TermCondition/>
        </div>
        <FooterPraktisi />
      </div>
    </div>
  );
};

export default termCondition;
