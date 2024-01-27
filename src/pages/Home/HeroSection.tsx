import Container from "../../ui/Container";
import hero from '../../assets/images/hero.jpg'
import event from '../../assets/images/event2.png'
import NavBar from "../../components/layout/NavBar";
import { HiOutlineCheck } from "react-icons/hi";
const HeroSection = () => {
    return (
        <div className="bg-[#02011B]  px-8 h-[898px] overflow-hidden">
            <Container className="">
                <NavBar/>
                <div className="flex gap-5  mt-6  justify-between ">
                    <div className="w-[736px] h-[708px] mx-atuo">
                    <img className="w-full h-full object-cover" src={hero} alt="hero" />
                    </div>
                    <div className="text-white bg-[#01000D]  p-4 w-[520px] h-[708px] mx-auto flex flex-col  items-center  ">
                        <h2 className="text-xl  uppercase">Our most popular services</h2>
                        <hr className="mb-5 mt-3 w-[424px]"/>
                        <div className="w-[362px] h-[497px] mx-auto">
                        <img className="w-full object-cover " src={event} alt="" />
                        <div>
                            <h4 className="text-2xl font-bold mt-3 mb-2">Corporate event</h4>
                            <div className="space-y-3">
                                <div className="flex items-center "> 
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> One day pas access all lecture </div>
                                <div className="flex items-center "> 
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Lunch and Snack </div>
                                <div className="flex items-center "> 
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Meet Event Speaker </div>
                                <span>Front Seat</span>
                                
                            </div>
                           
                            <button className="bg-[#01DAF8] w-[362px] h-[52px] text-black mt-5">View Details</button>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
            
        </div>
    );
};

export default HeroSection;