import { HiOutlineCheck } from "react-icons/hi";
import Container from "../../ui/Container";

const PriceSection = () => {
    return (
        <div className="bg-[#070B15] pt-14 pb-10 text-white ">
            <Container className="">
                <div className="text-center mx-auto">
                    <span>pricing</span>
                    <h3 className="text-4xl font-bold">Package Pricing </h3>
                </div>
                <div className="grid grid-cols-3 place-items-center mt-14 ">
                    <div className="w-full max-w-[373px] h-[530px] p-5 bg-[#11151E] rounded-md pl-10 pt-10 pb-10   flex flex-col justify-between ">
                        <div>
                        <b className="uppercase">standart</b>
                        <h3 className="text-4xl font-bold mt-5">$120</h3>
                       <div className="space-y-10">
                       <div className="mt-10">
                            <div className="flex items-center ">
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                    <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Lunch and Snack 
                                </div>
                        </div>
                        <div className="flex items-center "> 
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Lunch and Snack 
                             </div>

                       </div>
                        </div>

                        
                       <button className="bg-[#242830] w-[277px] h-[52px] text-white   ">Get Your Ticket </button>

                    </div>
                    <div className="w-full max-w-[373px] h-[557px] p-5 bg-[#0038B4] rounded-md pl-10 pt-10 pb-10   flex flex-col justify-between -mt-5 ">
                        <div>
                        <b className="uppercase">Premium </b>
                        <h3 className="text-4xl font-bold mt-5">$180</h3>
                       <div className="space-y-10 mt-5">
                       <div className="flex items-center "> 
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> One day pas access all lecture </div>
                       <div className="">
                        
                            <div className="flex items-center ">
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                    <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Lunch and Snack 
                                </div>
                        </div>
                        <div className="flex items-center "> 
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Lunch and Snack 
                             </div>

                       </div>
                        </div>

                        
                       <button className="bg-[#00F8E6] w-[277px] h-[52px] text-white   ">Get Your Ticket </button>

                    </div>
                    <div className="w-full max-w-[373px] h-[530px] p-5 bg-[#11151E] rounded-md pl-10 pt-10 pb-10   flex flex-col justify-between ">
                        <div>
                        <b className="uppercase">basic</b>
                        <h3 className="text-4xl font-bold mt-5">$120</h3>
                       <div className="space-y-10">
                       <div className="mt-10">
                            <div className="flex items-center ">
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                    <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Lunch and Snack 
                                </div>
                        </div>
                        <div className="flex items-center "> 
                                <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                                <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                                </span> Lunch and Snack 
                             </div>

                       </div>
                        </div>

                        
                       <button className="bg-[#242830] w-[277px] h-[52px] text-white   ">Get Your Ticket </button>

                    </div>

                </div>
            </Container>
        </div>
    );
};

export default PriceSection;