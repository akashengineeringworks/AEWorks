"use client"
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Contact from "../components/Contact";

const Home = () => {
    return (
      <>
        <Head>
          <title>Contact</title>
          <meta
            name="description"
            content="Contact"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
       <Contact/>
        <Footer />
      </>
    );
  
}

export default Home;