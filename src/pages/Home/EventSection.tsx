import Container from "../../ui/Container";
import event from '../../assets/images/event4.png'
import event2 from '../../assets/images/event.png'
import event3 from '../../assets/images/event4.png'
import event4 from '../../assets/images/event.png'
import event5 from '../../assets/images/event.png'
import event6 from '../../assets/images/event4.png'
const EventSection = () => {
    return (
        <div className="bg-[#0F172A] py-10">
            <Container className="">
                <div className="w-full max-w-[1060px] mx-auto ">
                <div className="text-white max-w-[600px] mx-auto text-center ">
                    <h2 className="text-4xl font-bold ">Our Service </h2>
                    <p>
                        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[54px]">
                    <img className="w-full max-w-[339px] object-cover" src={event} alt="event" />
                    <img className="w-full max-w-[339px] object-cover" src={event2} alt="event" />
                    <img className="w-full max-w-[339px] object-cover" src={event3} alt="event" />
                    <img className="w-full max-w-[339px] object-cover" src={event4} alt="event" />
                    <img className="w-full max-w-[339px] object-cover" src={event5} alt="event" />
                    <img className="w-full max-w-[339px] object-cover" src={event6} alt="event" />
                </div>
                </div>
            </Container>
        </div>
    );
};

export default EventSection;