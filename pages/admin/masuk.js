import React from "react";
import LoginAdmin from "../../components/admin/LoginPraktisi";
import Head from "next/head";

function MasukAdmin(){
    return(
        <div>
            <Head>
            <title>Masuk</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LoginAdmin/>
        </div>
    )
}

export default MasukAdmin;