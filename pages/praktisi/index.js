import SidebarPraktisi from "../../components/sidebar/SidebarPraktisi";
import NavbarPraktisi from "../../components/header/NavbarPraktisi";
import CardInfo from "../../components/card/CardInfo";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';

const praktisi = () => {
  return(
    <div className="">
      <SidebarPraktisi/>
      <div className="ml-[250px]">
        <div className="">
          <NavbarPraktisi/>
          {/* Content */}
          <div className="px-10 py-6">
            <div className="flex gap-6">
              <CardInfo 
                Icons={PersonOutlineIcon} 
                text={"Client sedang ditangani"}
                value={7}
                type={"Client"}
                />
              <CardInfo 
                Icons={GroupOutlinedIcon}
                text={"Total Client ditangani"}
                LinearColorLeft={"from-[#4AD994]"}
                LinearColorRight={"to-[#57F998]"}
                value={118}
                type={"Client"}
                />
              <CardInfo 
                Icons={ArticleOutlinedIcon}
                text={"Total dokumen ditangani"}
                LinearColorLeft={"from-[#FDB765]"}
                LinearColorRight={"to-[#FFE485]"}
                value={24}
                type={"Jenis Dokumen"}
              />
              <CardInfo 
                Icons={MoneyOutlinedIcon}
                text={"Pendapatan bulan ini"}
                LinearColorLeft={"from-[#FF6D59]"}
                LinearColorRight={"to-[#FFD584]"}
                value={"Rp.10.000.000"}
                type={""}
              />
            </div>
          </div>
          {/* end Content */}
        </div>
      </div>
    </div>
  )
}

export default praktisi;