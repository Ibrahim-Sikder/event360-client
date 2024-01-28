import Container from "../../ui/Container";
import event from '../../assets/images/event2.png'
import event2 from '../../assets/images/event3.png'
import event3 from '../../assets/images/event5.png'
import event4 from '../../assets/images/event6.png'
import event5 from '../../assets/images/event7.png'
import event6 from '../../assets/images/event8.png'
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const EventSection = () => {
    const eventItems = [
        {
            id:1,
            item: 'Event Item - 1',
            img: event
        },
        {
            id:1,
            item: 'Event Item - 2',
            img: event2
        },
        {
            id:1,
            item: 'Event Item - 3',
            img: event3
        },
        {
            id:1,
            item: 'Event Item - 4',
            img: event4
        },
        {
            id:1,
            item: 'Event Item - 5',
            img: event5
        },
        {
            id:1,
            item: 'Event Item - 6',
            img: event6
        },
    ]
    return (
        <div className="bg-[#0F172A] py-10 text-white ">
            <Container className="">
                <div className="w-full max-w-[1060px] mx-auto ">
               <SectionTitle title='Events Items ' desc='Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[54px] place-content-center place-items-center">
                  {
                    eventItems.map((event)=>  <div key={event.id} className="  md:w-[320px] xl:w-[340px] h-[282px] p-5 bg-[#000000] rounded-md ">
                    <h5 className="mb-2">{event.item}</h5>
                <img className="" src={event.img} alt="event" />

                </div>)
                  }
                </div>
                </div>
            </Container>
        </div>
    );
};

export default EventSection;