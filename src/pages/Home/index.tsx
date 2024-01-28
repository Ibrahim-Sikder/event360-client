import EventSection from "./EventSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import PriceSection from "./PriceSection";
import RecentEventSection from "./RecentEventSection";
import RevewSection from "./RevewSection";
import ServiceSection from "./ServiceSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <ServiceSection/>
            <EventSection/>
            <GallerySection/>
            <PriceSection/>
            <RevewSection/>
            <RecentEventSection/>
        </div>
    );
};

export default Home;