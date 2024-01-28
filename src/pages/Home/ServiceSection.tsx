/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "../../ui/Container"
import event from "../../assets/images/event6.png"
import { HiOutlineCheck } from "react-icons/hi"
import SectionTitle from "../../components/SectionTitle/SectionTitle"


const ServiceSection = ({title, desc} ) => {

  return (
    <div className="bg-[#0F172A] py-8">
      <Container className="">
        <SectionTitle title='Our Services ' desc=' Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.'/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-[54px] ">
          <div className="serviceCard">
            <div>
              <img
                className="w-[362px] h-[253px] object-cover "
                src={event}
                alt=""
              />
              <div>
                <h4 className="text-3xl font-bold mt-3 mb-2">
                  Corporate event
                </h4>
                <div className="space-y-5 ">
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>{" "}
                    One day pas access all lecture
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Lunch and Snack{" "}
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Meet Event Speaker
                  </div>

                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Front Seat
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    One day pas access all lecture
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          

          <div className="serviceCard">

         



            <div>
             <div>
             <h4 className="text-3xl font-bold mt-3 mb-2">
             Wedding event
                </h4>
                <p className="max-w-[38ch] leading-7 mb-5  ">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.
                </p>
             </div>
              <div>
               
                <div className="space-y-5 ">
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>{" "}
                    One day pas access all lecture
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Lunch and Snack{" "}
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Meet Event Speaker
                  </div>

                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Front Seat
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    One day pas access all lecture
                  </div>
                </div>
              </div>
              <button className="btn">View Details</button>
            </div>
          </div>

          <div className="serviceCard">
            <div>
              <img
                className="w-[362px] h-[253px] object-cover "
                src={event}
                alt=""
              />
              <div>
                <h4 className="text-3xl font-bold mt-3 mb-2">
                Organization event
                </h4>
                <div className="space-y-5 ">
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>{" "}
                    One day pas access all lecture
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Lunch and Snack{" "}
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Meet Event Speaker
                  </div>

                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    Front Seat
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-4 h-4 text-center bg-red-800 rounded-full ">
                      <HiOutlineCheck className="mr-2 text-[#00F6E7]" />
                    </span>
                    One day pas access all lecture
                  </div>




                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ServiceSection
