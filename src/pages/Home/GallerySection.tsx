import { HiOutlineCheck } from "react-icons/hi"
import Container from "../../ui/Container"
import gallery from "../../assets/images/gallery9.png"
import gallery2 from "../../assets/images/gallery4.png"
import gallery3 from "../../assets/images/gallery.png"
import gallery4 from "../../assets/images/gallery5.png"
import gallery5 from "../../assets/images/gallery13.png"
import gallery6 from "../../assets/images/gallery12.png"
import gallery7 from "../../assets/images/gallery7.png"
import gallery8 from "../../assets/images/gallery3.png"
import gallery9 from "../../assets/images/gallery6.png"
import gallery10 from "../../assets/images/gallery10.png"
import { motion } from "framer-motion"

const GallerySection = () => {
  const galleryAnimation = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        ease: "linear",
        duration: 2,
        repeat: Infinity,
        type: "spring",
      },
    },
  }

  return (
    <div className="bg-[#0F172A] py-14 text-white ">
      <Container className="">
        <div className="grid grid-cols-12 place-items-center gap-5 lg:gap-1 ">
          <div className="col-span-12 md:col-span-6 ">
            <div className="text-white  ">
              <h2 className="text-3xl sm:text-[64px] font-bold ">Gallery </h2>
              <p className="my-5 max-w-[45ch]">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
                nibh ornare viverra. Ultrices faucibus neque velit risus ac id
                lorem.Ut posuere felis arcu tellus tempus in in ultricies.
                Gravida id nibh ornare viverra. Ultrices faucibus neque velit
                risus ac id lorem.
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
                <div className="flex items-center ">
                  <span className="mr-2 w-5 h-5 text-center bg-[#262931]  rounded-full flex items-center justify-center ">
                    <HiOutlineCheck className=" text-[#63d4cc]" />
                  </span>{" "}
                  One day pas access all lecture{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12   md:col-span-6 ">
            <div className="grid grid-cols-4  place-items-center justify-center place-content-center ">
              <div>
                <motion.img
                  variants={galleryAnimation}
                  initial="hidden"
                  animate="visible"
                  src={gallery}
                  alt="gallery"
                />
                <motion.img src={gallery2} alt="gallery" />
              </div>
              <div>
                <img src={gallery3} alt="gallery" />
                <img src={gallery4} alt="gallery" />
                <img src={gallery5} alt="gallery" />
              </div>
              <div>
                <img src={gallery6} alt="gallery" />
                <img src={gallery7} alt="gallery" />
                <img src={gallery8} alt="gallery" />
              </div>
              <div>
                <img src={gallery9} alt="gallery" />
                <img src={gallery10} alt="gallery" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default GallerySection
