"use client"
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne} from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import AELogo from "../public/img/AELogo.jpeg";

const Home = () => {
    return (
      <>
        <Head>
          <title>AE Works</title>
          <meta
            name="description"
            content="Akash Engineering app is used for sharing the expenses with our friends."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Hero />
        <SectionTitle
          pretitle="Akash Engineering Benefits"
          title=" Why should you use this Machine?">
            World class Quality with Optimal Price.
        </SectionTitle>
        <Benefits data={benefitOne} />
      
        <SectionTitle
          pretitle=""
          title="">
        </SectionTitle>
        {/* <Video /> */}
        <SectionTitle
          pretitle=""
          title="Our customers">
        </SectionTitle>
        <Testimonials />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        </SectionTitle>
        <Faq />
        {/* <Cta /> */}
        <Footer />
        {/* <PopupWidget /> */}
      </>
    );
  
}

export default Home;