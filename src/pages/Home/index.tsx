import EventSection from "./EventSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <ServiceSection/>
            <EventSection/>
            <GallerySection/>
        </div>
    );
};

export default Home;