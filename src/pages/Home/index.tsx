import CustomerSupport from "./CustomerSupport"
import EventManagement from "./EventManagement"
import EventSection from "./EventSection"
import GallerySection from "./GallerySection"
import HeroSection from "./HeroSection"
import PriceSection from "./PriceSection"
import RecentEventSection from "./RecentEventSection"
import RevewSection from "./RevewSection"
import ServiceSection from "./ServiceSection"
import EventSection2 from "./EventSection2"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <EventSection2 />
      <EventSection />
      <GallerySection />
      <PriceSection />
      <RevewSection />
      <RecentEventSection />
      <EventManagement />
      <CustomerSupport />
    </div>
  )
}

export default Home
