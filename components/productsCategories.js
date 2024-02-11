import Container from "./container";
import Image from "next/image";
import JCB11 from "../public/img/JCB11.jpeg";
import JCB12 from "../public/img/JCB12.jpeg";
import JCB13 from "../public/img/JCB13.jpeg";
import JCB14 from "../public/img/JCB14.jpeg";
import JCB15 from "../public/img/JCB15.jpeg";
import JCB16 from "../public/img/JCB16.jpeg";
import JCB17 from "../public/img/JCB17.jpeg";
import JCB18 from "../public/img/JCB18.jpeg";
import JCB19 from "../public/img/JCB19.jpeg";
import JCB20 from "../public/img/JCB20.jpeg";
import JCB21 from "../public/img/JCB21.jpeg";
import JCB22 from "../public/img/JCB22.jpeg";
import JCB23 from "../public/img/JCB23.jpeg";

export default function productsCategory() {
    return (
        <Container className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 justify-items-center items-center">
            <ExploreCard img={JCB23} desc="Electrical converted Excavator"/>
            
            
            <ExploreCard img={JCB13} desc="Stationary Crane"/>
            <ExploreCard img={JCB14} desc="Fabrication and Erection of pollution System"/>
            <ExploreCard img={JCB15} desc="Fabrication and Erection of pollution System"/>
            <ExploreCard img={JCB16} desc="Stationary Crane"/>
            <ExploreCard img={JCB17} desc="Stationary Crane"/>
            <ExploreCard img={JCB18} desc="Stationary Crane"/>
            <ExploreCard img={JCB19} desc="Stationary Crane"/>
            <ExploreCard img={JCB20} desc="Electrical converted Excavator"/>
            <ExploreCard img={JCB21} desc="Stationary Crane"/>
            <ExploreCard img={JCB22} desc="Stationary Crane"/>
            <ExploreCard img={JCB11} desc="Grapple"/>
            <ExploreCard img={JCB12} desc="Grapple"/>
            
        </Container>
    );
}

const ExploreCard = (props) => {
    return(
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image class="rounded-t-lg hover:scale-105" src={props.img} alt="" />
            </a>
            <div class="p-5 bg-gray-200">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.desc}</h5>
                </a>
            </div>
        </div>
    )
}