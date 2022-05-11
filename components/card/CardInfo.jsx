// import * as icons from '@mui/icons-material/';

const CardInfo = () => {
  const leftColor = "#59BCFF"
  const rightColor = "#59D7FF"
  const text = "Client sedang ditangani"
  const value = "7"
  const type = "Client"

  return (
    <div className={`bg-gradient-to-r from-[${leftColor}] to-[${rightColor}]`}>
      <p>Icons</p>
      <p>{text}</p>
      <p><span>{value}</span> <span>{type}</span></p>
      {/* <icons.PersonOutlineOutlined/>
      <icons.GroupOutlined/>
      <icons.ArticleOutlined/>
      <icons.LocalAtmOutlined/> */}
    </div>
  )
}

export default CardInfo;