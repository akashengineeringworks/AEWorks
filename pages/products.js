"use client"
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Products from "../components/productsCategories";

const Home = () => {
    return (
      <>
        <Head>
          <title>Products</title>
          <meta
            name="description"
            content="Akash Engineering Works Products"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Products/>
        <Footer />
        {/* <PopupWidget /> */}
      </>
    );
  
}

export default Home;