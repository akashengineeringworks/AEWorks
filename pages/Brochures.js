import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Brochure from "../components/Brochures";


export default function(){
    return (
        <>
        <Head>
          <title>Brochures</title>
          <meta
            name="description"
            content="Akash Engineering Works Brochures"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Brochure/>
        <Footer />
        {/* <PopupWidget /> */}
        </>
    )
}