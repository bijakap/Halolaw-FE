import react from "react";
import Homepage from "../components/katalog/Homepage";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer"
import Head from "next/head";

function homepage(){
    return(
        <div>
             <Head>
            <title>Homepage</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <Homepage/>
            <Footer/>
        </div>
       
    )
}

export default homepage;