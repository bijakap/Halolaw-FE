import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import PrivacyPolicy from "../../../components/praktisi/PrivacyPolicy";
import useStateNavSide from "../../../hooks/useStateNavSide";

const PrivacyPolicy = () => {
  const [active, {setIsMobile , setIsActive}] = useStateNavSide()
  return (
    <div className="bg-[#F6F7FB]">
      {
        active ?  <></> : <SidebarPraktisi ActiveNumber={2} childActiveNumber={1}/> 
      }
      <div className={setIsMobile()}>
        <div>
          {/* content */}
          <div className={active ? "ml-0 -z-10" : "md:ml-0 ml-[250px]"}>
            <NavbarPraktisi setClose={setIsActive} close={active}/>
          </div>
          <PrivacyPolicy/>
        </div>
        <FooterPraktisi />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
