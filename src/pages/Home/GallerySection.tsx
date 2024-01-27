import { HiOutlineCheck } from "react-icons/hi";
import Container from "../../ui/Container";
import gallery from '../../assets/images/gallery9.png';
import gallery2 from '../../assets/images/gallery4.png';
import gallery3 from '../../assets/images/gallery.png';
import gallery4 from '../../assets/images/gallery5.png';
import gallery5 from '../../assets/images/gallery13.png';
import gallery6 from '../../assets/images/gallery12.png';
import gallery7 from '../../assets/images/gallery7.png';
import gallery8 from '../../assets/images/gallery3.png';
import gallery9 from '../../assets/images/gallery6.png';
import gallery10 from '../../assets/images/gallery10.png';
const GallerySection = () => {
    return (
        <div className="bg-[#0F172A] pt-[54px] text-white ">
            <Container className="">
                <div className="grid grid-cols-12 place-items-center gap-1">
                   <div className="col-span-5">
                   <div className="text-white  ">
                        <h2 className="text-4xl font-bold ">Our Service </h2>
                        <p className="my-5 max-w-[45ch]">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
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
                   </div>
                   <div className="col-span-7">
                        <div className="grid grid-cols-4  place-items-center justify-center place-content-center ">
                            <div>
                                <img src={gallery} alt="gallery" />
                                <img src={gallery2} alt="gallery" />
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
    );
};

export default GallerySection;