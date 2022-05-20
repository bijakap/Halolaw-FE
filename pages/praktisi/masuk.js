import React from "react";
import LoginPraktisi from "../../components/praktisi/LoginPraktisi";
import Head from "next/head";

function masukPraktisi(){
    return(
        <div>
            <Head>
            <title>Masuk</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LoginPraktisi/>
        </div>
    )
}

export default masukPraktisi;