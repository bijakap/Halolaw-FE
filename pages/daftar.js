import react from "react";
import Head from "next/head";
import SignUp from "../components/LoginAndSignUp/SignUp";

function daftar(){
    return(
        <div>
            <Head>
            <title>Daftar</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SignUp/>
        </div>
    )
}

export default daftar;