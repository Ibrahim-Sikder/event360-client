import Container from "../../ui/Container";
import event from '../../assets/images/mangement.webp'
import { FaQuoteLeft } from "react-icons/fa";
const EventManagement = () => {
    return (
        <div className="bg-[#050D14] py-14 text-white ">
            <Container className="">
                <div className="grid grid-cols-1 place-items-center place-content-center md:grid-cols-2">
                <div>
                    <h2 className="text-5xl font-bold"><span className="text-[#01DBF7]">9M+</span> Events Management </h2>
                    <div className="flex items-center mt-8">
                       <div className=" border border-dotted  mr-5 h-[150px] bg-white"></div>
                      <div>
                        <div className="flex relative ">
                        <FaQuoteLeft size={40} className="-z-2  -top-3 relative z-0 opacity-15 "/>
                      <p className="z-[99] italic max-w-[50ch] leading-7 -ml-8">We have a great partnership with Cvent. Cvent is our primary registration tool for virtual, hybrid, and in-person meetings, and is our one-stop shop.</p>
                        </div>
                        <div className="mt-3">
                        <h5>Jhon Doe </h5>
                        <small>Entreprenure </small>
                        </div>
                      </div>
                    </div>
                </div>
                <img src={event} alt="managment" />
                </div>
            </Container>
        </div>
    );
};

export default EventManagement;