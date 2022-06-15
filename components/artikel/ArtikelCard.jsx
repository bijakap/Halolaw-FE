function ArtikelCard(props){
  const data = props.data;

  return(
  <div className="w-full">
    <a href="#">
      <div className="w-full">
        <img src={data.img} className="object-cover w-full h-full"></img>
      </div>
      <div className="flex justify-center">
        <div className="w-full mx-5">
          <p className="text-[#121F86] text-[8px] md:text-[12px] font-bold my-[16px]">{data.penulis} . {data.tgl_up}</p>
          <h6 className="font-['Inter'] text-[12px] md:text-[16px] font-semibold mb-[8px] lg:line-clamp-2 hover:underline hover:underline-offset-1">{data.judul}</h6>
          <div className="h-[60px] text-[12px] lg:text-[16px] font-sans font-thin mb-0 lg:mb-[24px]">
            <p className="line-clamp-3 lg:line-clamp-2">{data.content}</p>
          </div>
          {data.kategori.map((data, idx) =>{
            let text_color
            if(data == "Pengadilan"){
              text_color = "text-[#C83491]";
            } else if (data == "Hak Cipta"){
              text_color = "text-[#724AB2]"
            } else if(data == "Perdata"){
              text_color = "text-[#6E9E31]"
            } else {
              text_color = "text-[#2B87A7]"
            }
            return (
              <div key={idx} className={`inline-block rounded-full bg-[#FAF4FF] font-sans mx-2 mb-2`}>
                <p className={`px-2 py-1 text-[8px] lg:text-[12px] ${text_color} font-[700]`}>{data}</p>
              </div>
              ) 
            })
          }
        </div>
      </div>
    </a>
  </div>
      
  )
}

export default ArtikelCard;