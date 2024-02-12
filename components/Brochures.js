import Container from "./container";


export default function Brochures() {
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center bg-gray-300 rounded-lg">
                <iframe src="/files/StationaryCrane.pdf" height="800" width="700" className="md:scale-95 sm:scale-75" />
                <iframe src="/files/OrangePeelCrab.pdf" height="800" width="700" className="md:scale-95 sm:scale-75" />
            </div>
        </>
    );
}