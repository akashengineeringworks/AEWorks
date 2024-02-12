import Container from "./container";
import Brochure from "../public/files/Brochure.pdf";
import Brochure1 from "../public/files/Brochure1.pdf";


export default function Brochures() {
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center bg-gray-300 rounded-lg">
                <embed src={Brochure} height="800" width="700" className="md:scale-95 sm:scale-75" />
                <embed src={Brochure1} height="800" width="700" className="md:scale-95 sm:scale-75" />
            </div>
        </>
    );
}