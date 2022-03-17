import React from "react";
import Login from "../components/LoginAndSignUp/Login";
import Head from "next/head";

function masuk(){
    return(
        <div>
            <Head>
            <title>Masuk</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Login/>
        </div>
    )
}

export default masuk;