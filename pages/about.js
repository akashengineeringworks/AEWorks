
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import About from "../components/About";

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
        </>
        </>
    );
}