import Container from "../../ui/Container"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { useQuery } from "@tanstack/react-query"
import { getEvents } from "../../api/admin/events/event.api"
import { Key } from "react"

const EventSection = () => {
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

  return (
    <div className="bg-[#0F172A] py-10 text-white overflow-hidden ">
      <Container className="">
        <div className="w-full max-w-[1060px] mx-auto ">
          <SectionTitle
            title="Events Items "
            desc="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                        ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          />
          <div
        
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[54px] place-content-center place-items-center">
            {data?.map((event: TEvent) => (
              <div
              data-aos="zoom-in"
                key={event._id}
                className="  md:w-[320px] xl:w-[340px] h-[282px] p-5 bg-[#000000] rounded-md "
              >
                <h5 className="mb-2">{event.name}</h5>
                <img className="" src={event.image} alt="event" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default EventSection
