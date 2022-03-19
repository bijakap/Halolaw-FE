import React from "react";
import Head from "next/head";

/* Page Component */
import DetailProduk from "../components/katalog/DetailProduk";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer"

function detailproduk(){
    return(
        <div>
            <Head>
            <title>Detail Produk</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <DetailProduk/>
            <Footer/>
        </div>
    )
}

export default detailproduk;