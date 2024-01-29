import Container from "../../ui/Container"
import { HiOutlineCheck } from "react-icons/hi"
import { useQuery } from "@tanstack/react-query"
import { getServices } from "../../api/admin/services/services.api"
import useScrollGrow from "../../hooks/useScrollGrow"
import { motion } from "framer-motion"
import { buttonAnimation } from "../../hooks/buttonAnimation"

const ServiceSection = () => {
  type TEvent = {
    _id: string
    name: string | number | boolean
    image: string | undefined
  }
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  })

  const { componentRef, style } = useScrollGrow()

  return (
    <div className="bg-[#0F172A] py-8">
      <Container className="">
        <motion.div ref={componentRef} style={style}>
          <div className="text-white w-full sm:max-w-[600px] mx-auto text-center ">
            <h2 className=" serviceTitle">Our Services</h2>
            <p className="text-[18px]">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.
            </p>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-[54px] ">
          {data?.map((item: TEvent) => (
            <div key={item._id} className="serviceCard">
              <div>
                <img
                  className="w-[362px] h-[253px] object-cover "
                  src={item.image}
                  alt=""
                />
                <div>
                  <h4 className="text-3xl font-bold mt-3 mb-3 capitalize">
                    {item.name}
                  </h4>
                  <div className="space-y-5 ">
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
                    <div className="flex items-center ">
                      <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                        <HiOutlineCheck className=" text-[#63d4cc]" />
                      </span>{" "}
                      Front Seat{" "}
                    </div>
                    <motion.button
                      variants={buttonAnimation}
                      whileHover="hover"
                      className="btn"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}

export default ServiceSection

{
  /* <div className="serviceCard">
            <div>
              <div>
                <h4 className="text-3xl font-bold mt-3 mb-2">Wedding event</h4>
                <p className="max-w-[38ch] leading-7 mb-5  ">
                  Ut posuere felis arcu tellus tempus in in ultricies. Gravida
                  id nibh ornare viverra. Ultrices faucibus neque velit risus ac
                  id lorem.Ut posuere felis arcu tellus tempus in in
                  ultricies.Ut posuere felis arcu tellus tempus in in ultricies.
                </p>
              </div>
              <div>
                <div className="space-y-5 ">
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
                  <div className="flex items-center ">
                    <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                      <HiOutlineCheck className=" text-[#63d4cc]" />
                    </span>{" "}
                    Front Seat{" "}
                  </div>
                </div>
              </div>
              <button className="btn">View Details</button>
            </div>
          </div> */
}
