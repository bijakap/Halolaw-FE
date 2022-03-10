import react from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer"
import Kategori from "../components/katalog/kategori";
import Head from "next/head";

function homepage(){
    return(
        <div>
             <Head>
            <title>Homepage</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <Kategori/>
            <Footer/>
        </div>
       
    )
}

export default homepage;