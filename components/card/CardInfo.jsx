// import * as icons from '@mui/icons-material/';

const CardInfo = ({Icons, LinearColorLeft, LinearColorRight, text, value, type}) => {
  //example
  // const leftColor = "from-[#59BCFF]"
  // const rightColor = "to-[#59D7FF]"
  // const text = "Client sedang ditangani"
  // const value = "7"
  // const type = "Client"

  return (
    <div className={`w-full text-white text-sm leading-20 tracking-[0.25px] rounded-xl p-4 bg-gradient-to-r ${LinearColorLeft} ${LinearColorRight}`}>
      <Icons className="w-8 h-8 mb-3"/>
      <p className="font-bold mb-[2px]">{text}</p>
      <p className="font-normal"><span>{value}</span> <span>{type}</span></p>
    </div>
  )
}
CardInfo.defaultProps = {
  LinearColorLeft : "from-[#59BCFF]",
  LinearColorRight : "to-[#59D7FF]",
  text : "Insert Text Here",
  value : "0",
  type : "Type Value",
}


export default CardInfo;