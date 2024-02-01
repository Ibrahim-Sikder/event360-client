import Container from "../../ui/Container"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { useQuery } from "@tanstack/react-query"
import { getEvents } from "../../api/admin/events/event.api"
import { Key } from "react"
import img from "../../../src/assets/images/g.png"
import img2 from "../../../src/assets/images/g2.png"
import img3 from "../../../src/assets/images/g3.png"
import img4 from "../../../src/assets/images/g4.png"
import img5 from "../../../src/assets/images/g5.png"
import img6 from "../../../src/assets/images/g6.png"

const EventSection2 = () => {
  type TEvent = {
    _id: Key | null | undefined
    id: Key | null | undefined
    name: string | number | boolean
    image: string | undefined
  }

  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  })
  const eventData = [
    {
      id: 1,
      image: img,
    },
    {
      id: 1,
      image: img2,
    },
    {
      id: 1,
      image: img3,
    },
    {
      id: 1,
      image: img4,
    },
    {
      id: 1,
      image: img5,
    },
    {
      id: 1,
      image: img6,
    },
  ]

  return (
    <div className="bg-[#0F172A] py-10 text-white overflow-hidden ">
      <Container className="">
        <div className="w-full max-w-[1060px] mx-auto ">
          <SectionTitle
            title="Events Items2 "
            desc="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                        ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          />
          <div className="galleryWrapss grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[54px] h-[526px] overflow-hidden ">
            <div className=" galleryCol">
              <div className="smallCol">
                <img className="h-full" src={img} alt="image" />
                <h5>Event Items </h5>
              </div>
              <div className="smallCol">
                <div className="grid grid-cols-2 gap-2 smallestCol">
                  <div className="smallestCol">
                    <img src={img3} alt="image" />
                    <h5>Event Items </h5>
                  </div>
                  <div className="smallestCol">
                    <img
                     
                      src={img4}
                      alt="image"
                    />
                    <h5>Event Items </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="galleryCol">
              <div className="smallCol">
                <img src={img5} alt="image" />
                <h5>Event Items </h5>
              </div>
              <div className="smallCol">
                <img src={img2} alt="image" />
                <h5>Event Items </h5>
              </div>
            </div>

            <div className="galleryCol">
              <img className=" overflow-hidden" src={img6} alt="image" />
              <h5>Event Items </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default EventSection2
