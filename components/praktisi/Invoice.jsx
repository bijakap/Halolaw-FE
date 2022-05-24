function Invoice() {
  return (
    <div className="bg-[#E4E7EC] w-full h-auto p-8 relative">
      <div className="flex justify-center mx-auto w-full sm:w-[623px] h-[879px] bg-white py-10 px-8">
        <div className="w-full text-[12px] leading-[20px] tracking-[0.4px]">
          <img src="/logo.svg" className="mb-4" />
          <div className="pb-8 border-b">
            <h5 className="font-semibold text-[#1D2939]">
              PT. Farizi Membangun Indonesia
            </h5>
            <p className="font-normal text-[#475467]">
              Bandung Technoplex, Jl. Telekomunikasi <br /> no.1, Kabupaten
              Bandung <br /> (1234) 123 456
            </p>
          </div>
          <div className="pt-8 text-[#252A31]">
            <p className="mb-8">INV/20220311/PPT/001</p>
            <div className="flex gap-16">
              <div className="w-[202px]">
                <p className="font-semibold ">Diterbitkan Oleh:</p>
                <div className="flex">
                  <div className="flex gap-1">
                    <div className="flex flex-col justify-between">
                      <p>Nama</p>
                      <p>Tanggal</p>
                    </div>
                    <div className="flex flex-col justify-between">
                      <p>: Aditya Zhafir Dhiaulhaq</p>
                      <p>: 11/03/2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[202px]">
                <p className="font-semibold">Penerima:</p>
                <div className="flex">
                  <div className="flex gap-1">
                    <div className="flex flex-col justify-between">
                      <p>Nama</p>
                      <p>Tanggal</p>
                    </div>
                    <div className="flex flex-col justify-between">
                      <p>: Farizi Andira</p>
                      <p>: 11/03/2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 w-full">
              <table className="table-auto border-collapse border w-full">
                <thead>
                  <tr className="font-semibold bg-[#0000000D]">
                    <td className="border-collapse border py-2 px-[10px]">
                      No
                    </td>
                    <td className="border-collapse border py-2 px-[10px]">
                      Dokumen
                    </td>
                    <td className="border-collapse border py-2 px-[10px]">
                      Jumlah Satuan
                    </td>
                    <td className="border-collapse border py-2 px-[10px]">
                      Harga
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-collapse border py-2 px-[10px]">1</td>
                    <td className="border-collapse border py-2 px-[10px]">
                      Sertifikat Tanah
                    </td>
                    <td className="border-collapse border py-2 px-[10px]">
                      1 (Satu)
                    </td>
                    <td className="border-collapse border py-2 px-[10px]">
                      Rp 700.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-16 flex justify-end">
              <div className="mr-[85px]">
                <p className="font-semibold mb-2">Total :</p>
                <p className="font-semibold">Rp700.000</p>
                <p className="font-normal">(Tujuh Ratus Ribu Rupiah)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:absolute lg:top-0 lg:right-0 lg:p-8 mt-10 lg:mt-0 w-full md:w-auto justify-center">
        <button className="py-[10px] px-6 bg-[#47BF37] font-medium text-white rounded-lg w-full md:w-auto">
          Cetak Invoice
        </button>
      </div>
    </div>
  );
}

export default Invoice;
