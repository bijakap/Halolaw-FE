import SidebarPraktisi from "../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import CardInfo from "../../components/card/CardInfo";

const praktisi = () => {
  return(
    <div className="">
      <SidebarPraktisi/>
      <div className="ml-[250px]">
        <div>
          {/* content */}
          <NavbarPraktisi/>
          <CardInfo/>
        </div>
      </div>
    </div>
  )
}

export default praktisi;