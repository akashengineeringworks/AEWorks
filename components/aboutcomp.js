import Container from "./container";

export default function About(){
    return (
        <>
        <Container className="grid md:grid-cols-1 sm:grid-cols-1 justify-items-center">
        <div class="md:w-3/4 sm:w-80 bg-gray-200 border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl ">
            
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 md:text-4xl italic sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The CEO's Vision</h5>
                </a>
                <p class="mb-3 italic text-gray-700 dark:text-gray-400 md:text-2xl sm:text-xl">"At Akash Engineering Works, our relentless focus is on pioneering advancements in scrap handling technology, all while maintaining an optimal price point. Our current portfolio includes the fabrication of Customised Length Stationary Cranes for Furnace Charging and Shearing Machine Feeding, alongside our expertise in converting Excavators to Electrical powerhouses. Additionally, we specialize in the fabrication and erection of Pollution Systems, ensuring environmental compliance. Guided by our vision, we aspire to be leaders in the manufacturing of heavy industrial machinery, driving innovation and excellence in the industry."</p>
                <h1 className="text-2xl font-bold italic">Akash Singh Rajput</h1>
                <p className="italic text-xl">Akash Engineering Works CEO</p>
            </div>
        </div>
            </Container>
        
        <div className="pt-6">
            <h1 className="md:text-4xl sm:text-2xl font-bold text-center">Our Values</h1>
        </div>
        <Container className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-8">
            <ExploreCard h="Integrity" img="https://www.nationaldefensemagazine.org/-/media/sites/magazine/02_regular_images/00_ethicscorner.jpg" desc="We always act with honesty and transparency in our dealings with our customers, suppliers, and partners."/>
            <ExploreCard h="Excellence" img="https://t4.ftcdn.net/jpg/00/64/92/53/360_F_64925352_VamaJfj3TyeQ1e9gLPtcy4XuudkryvkJ.jpg" desc="We strive to provide our customers with the best possible products and services."/>
            <ExploreCard h="Innovation" img="https://knowledge.wharton.upenn.edu/wp-content/uploads/2023/03/3.15.23-scott-snyder-esg-corporate-innovation-GettyImages-1410816388.png" desc="We are always looking for new ways to improve our products and services."/>
            <ExploreCard h="Sustainability" img="https://www.conserve-energy-future.com/wp-content/uploads/2022/08/Planet-earth.jpg" desc="We are committed to operating our business in a sustainable way."/>
        </Container>
        </>
    );
}

const ExploreCard = (props) => {
    return(
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl hover:scale-105">
            <a href="#">
                <img class="rounded-t-lg" src={props.img}  alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.h}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
                
            </div>
        </div>
    )
}