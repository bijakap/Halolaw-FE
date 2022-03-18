import Head from "next/head";
import Checkout from "../components/Checkout/Checkout";

export default function checkout(){
    return(
        <>
            <Head>
            <title>Detail Produk</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Checkout />
        </>
    )
}