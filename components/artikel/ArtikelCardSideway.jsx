

function ArtikelCardSideway({data}){
  return(
    <div className="flex justify-between gap-8 h-full lg:h-[220px] cursor-pointer">
      <img src={data.img} className="object-cover w-1/2 md:w-[313px]"/>
      <div>
        <p className="text-[#121F86] text-[8px] lg:text-[12px] font-bold my-[16px]">{data.penulis} . {data.tgl_up}</p>
        <h6 className="font-['Inter'] text-[12px] lg:text-[16px] font-semibold mb-[8px] lg:line-clamp-2 hover:underline hover:underline-offset-1">{data.judul}</h6>
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
  )
}

export default ArtikelCardSideway;