import react from "react";
import Image from "next/image";

function ArtikelCard(props){
    const data = props.data;


    // const kategori_temp = ["Pengadilan", "Perdata"]

    return(
        <>
            <div className="w-[292px]">
                <a href="#">
                    <div className="w-[292px]">
                        <img src={data.img} className="h-full"></img>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[260px]">
                            <p className="text-[#121F86] text-[12px] font-bold my-[16px]">{data.penulis} . {data.tgl_up}</p>
                            <h6 className="font-['inter'] text-[16px] font-semibold mb-[8px]">{data.judul}</h6>
                            <div className="h-[60px] font-sans font-thin mb-[24px]">
                                <p className="line-clamp-2">{data.content}</p>
                            </div>
                            {data.kategori.map((data, idx) =>{
                                let text_color
                                if(data == "Pengadilan"){
                                    text_color = "text-[#C83491]";
                                } else if (data == "Hak Cipta"){
                                    text_color = "-text-[#724AB2]"
                                } else if(data == "Perdata"){
                                    text_color = "text-[#6E9E31]"
                                } else {
                                    text_color = "text-[#2B87A7]"
                                }
                                return (
                                        <div key={idx} className={`inline-block rounded-full bg-[#FAF4FF] font-sans mx-2 mb-2`}>
                                            <p className={`px-2 py-1 text-[12px] ${text_color} font-[700]`}>{data}</p>
                                        </div>
                                    ) 
                                })
                            }
                        </div>
                    </div>
                </a>
                
            </div>
        </>
        
    )
}

export default ArtikelCard;