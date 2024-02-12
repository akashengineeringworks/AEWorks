import Container from "./container";
import Stationary from "../public/files/StationaryCrane.pdf";
import OrangePeel from "../public/files/OrangePeelCrab.pdf";

export default function Brochures() {
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center bg-gray-300 rounded-lg">
                <iframe src={Stationary} height="800" width="700" className="md:scale-95 sm:scale-75" />
                <iframe src={OrangePeel} height="800" width="700" className="md:scale-95 sm:scale-75" />
            </div>
        </>
    );
}