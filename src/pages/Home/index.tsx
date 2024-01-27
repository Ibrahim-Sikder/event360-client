import EventSection from "./EventSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import PriceSection from "./PriceSection";
import ServiceSection from "./ServiceSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <ServiceSection/>
            <EventSection/>
            <GallerySection/>
            <PriceSection/>
        </div>
    );
};

export default Home;