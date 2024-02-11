
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import About from "../components/AboutComp";

export default function AboutPage() {
    return(
        <>
        <>
        <Head>
          <title>About</title>
          <meta
            name="description"
            content="Akash Engineering Works"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <About/>
        <Footer />
        {/* <PopupWidget /> */}
        </>
        </>
    );
}