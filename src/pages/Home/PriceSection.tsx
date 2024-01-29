import { HiOutlineCheck } from "react-icons/hi"
import Container from "../../ui/Container"
import { motion } from "framer-motion"
import { buttonAnimation } from "../../hooks/buttonAnimation"

const PriceSection = () => {

  return (
    <div className="bg-[#070B15] pt-14 pb-10 text-white ">
      <Container className="">
        <div className="text-center mx-auto">
          <span>pricing</span>
          <h3 className="text-3xl sm:text-[64px] font-bold">
            Package Pricing{" "}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-14 ">
          <div className="priceCard">
            <div>
              <b className="uppercase">standart</b>
              <h3 className="text-4xl font-bold mt-5">$120</h3>
              <div className="space-y-10">
                <div className="mt-10">
                  <div className="flex items-center ">
                    <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                      <HiOutlineCheck className=" text-[#63d4cc]" />
                    </span>{" "}
                    Lunch and Snack
                  </div>
                </div>
                <div className="flex items-center ">
                  <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                    <HiOutlineCheck className=" text-[#63d4cc]" />
                  </span>{" "}
                  Lunch and Snack
                </div>
              </div>
            </div>

            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              className="btn2 "
            >
              Get Your Ticket{" "}
            </motion.button>
          </div>
          <div className="priceCard bg-[#0038B4] ">
            <div>
              <b className="uppercase">Premium </b>
              <h3 className="text-4xl font-bold mt-5">$180</h3>
              <div className="space-y-10 mt-5">
                <div className="flex items-center ">
                  <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                    <HiOutlineCheck className=" text-[#63d4cc]" />
                  </span>{" "}
                  One day pas access all lecture{" "}
                </div>
                <div className="">
                  <div className="flex items-center ">
                    <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                      <HiOutlineCheck className=" text-[#63d4cc]" />
                    </span>{" "}
                    Lunch and Snack
                  </div>
                </div>
                <div className="flex items-center ">
                  <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                    <HiOutlineCheck className=" text-[#63d4cc]" />
                  </span>{" "}
                  Lunch and Snack
                </div>
              </div>
            </div>

            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              className="btn2 bg-[#00F8E6] "
            >
              Get Your Ticket{" "}
            </motion.button>
          </div>
          <div className="priceCard">
            <div>
              <b className="uppercase">basic</b>
              <h3 className="text-4xl font-bold mt-5">$120</h3>
              <div className="space-y-10">
                <div className="mt-10">
                  <div className="flex items-center ">
                    <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                      <HiOutlineCheck className=" text-[#63d4cc]" />
                    </span>{" "}
                    Lunch and Snack
                  </div>
                </div>
                <div className="flex items-center ">
                  <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                    <HiOutlineCheck className=" text-[#63d4cc]" />
                  </span>{" "}
                  Lunch and Snack
                </div>
              </div>
            </div>

            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              className="btn2"
            >
              Get Your Ticket{" "}
            </motion.button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PriceSection
