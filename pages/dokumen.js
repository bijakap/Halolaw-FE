import react from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer"
import Dokumen from "../components/katalog/Dokumen";
import Head from "next/head";

function dokumen(){
    return(
        <div>
             <Head>
            <title>Homepage</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <Dokumen/>
            <Footer/>
        </div>
       
    )
}

export default dokumen;