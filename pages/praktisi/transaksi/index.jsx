import NavbarPraktisi from "../../../components/header/NavbarPraktisi";
import SidebarPraktisi from "../../../components/sidebar/SidebarPraktisi";
import FooterPraktisi from "../../../components/footer/FooterPraktisi";
import TransaksiPraktisi from "../../../components/praktisi/TransaksiPraktisi";

const transaksi = () => {
  return(
    <div className="bg-[#F6F7FB]">
    <SidebarPraktisi />
    <div className="ml-[250px]">
      <div>
        {/* content */}
        <NavbarPraktisi />
        <TransaksiPraktisi/>
      </div>
      <FooterPraktisi />
    </div>
  </div>
  )
}

export default transaksi;