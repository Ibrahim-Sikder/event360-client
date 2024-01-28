import Container from "../../ui/Container"
import hero from "../../assets/images/hero.jpg"
import event from "../../assets/images/event2.png"
import NavBar from "../../components/layout/NavBar"
import { HiOutlineCheck } from "react-icons/hi"
const HeroSection = () => {
  return (
    <div className="bg-[#02011B] pb-10  ">
      <Container className="">
        <NavBar />
        <div className="block lg:flex md:flex-nowrap gap-5 justify-between ">
          <div className="w-full md:w-[700px] lg:w-[736px]  md:h-[708px] mx-atuo relative">
            <img
              className="w-full h-full  object-cover"
              src={hero}
              alt="hero"
            />
            <div className="text-white absolute bottom-0   heroContent md:p-8 p-5">
              <h3 className="text-xl mb-3 md:text-[40px] font-extrabold">
                New Packages For Winter.
              </h3>
              <p className="text-sm">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
                nibh ornare viverra. Ultrices faucibus neque velit risus ac id
                lorem.
              </p>
            </div>
          </div>
          <div className="text-white bg-[#01000D]  p-4 w-full md:w-[500px]  lg:w-[520px] h-full md:h-[708px] mx-auto flex flex-col  items-center mt-5 lg:mt-0 ">
            <h2 className="text-xl  uppercase">Our most popular services</h2>
            <hr className="mb-5 mt-3 w-[424px]" />
            <div className="w-[320px] md:w-[362px] h-[497px] mx-auto">
              <img className="w-full object-cover " src={event} alt="" />
              <div>
                <h4 className="text-2xl font-bold mt-3 mb-2">
                  Corporate event
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center ">
                    <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                      <HiOutlineCheck className=" text-[#63d4cc]" />
                    </span>{" "}
                    One day pas access all lecture{" "}
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                      <HiOutlineCheck className=" text-[#63d4cc]" />
                    </span>{" "}
                    Lunch and Snack{" "}
                  </div>
                  <div className="flex items-center ">
                    <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                      <HiOutlineCheck className=" text-[#63d4cc]" />
                    </span>{" "}
                    Meet Event Speaker{" "}
                  </div>
                  <span>Front Seat</span>
                </div>

                <button className="btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
