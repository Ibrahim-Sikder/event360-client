/* eslint-disable no-var */
import Container from "../../ui/Container";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import recent from '../../assets/images/recent.png'
import recent2 from '../../assets/images/recent2.png'
import recent3 from '../../assets/images/recent3.png'
import recent4 from '../../assets/images/recent4.png'
const RecentEventSection = () => {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="bg-[#0F172A] py-8  ">
            <Container className="">
                <div className="text-white text-center ">
                    <h2 className="text-6xl font-bold ">Recent Events  </h2>
                    <p className="my-5 max-w-[80ch] mx-auto ">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
                </div>
                <div className="mt-10">
                    <Slider {...settings}>
                    <div className=" recentEventCard">
                            <img className=" object-cover" src={recent} alt="recent" />
                            <div className="bg-[#070B15] text-white p-3 text-left ">
                                <p> Flower Decorations</p>
                                <small className="lead text-[#374254]">by Melvina Spring</small>
                            </div>
                        </div>
                        <div className=" recentEventCard">
                            <img className=" object-cover" src={recent2} alt="recent" />
                            <div className="bg-[#070B15] text-white p-3 text-left ">
                                <p>Colorful Place </p>
                                <small className="lead text-[#374254]">by Melvina Spring</small>
                            </div>
                        </div>
                        <div className=" recentEventCard">
                            <img className=" object-cover" src={recent3} alt="recent" />
                            <div className="bg-[#070B15] text-white p-3 text-left ">
                                <p> Flower Decorations</p>
                                <small className="lead text-[#374254]">by Melvina Spring</small>
                            </div>
                        </div>
                        <div className=" recentEventCard">
                            <img className=" object-cover" src={recent4} alt="recent" />
                            <div className="bg-[#070B15] text-white p-3 text-left ">
                                <p> Splash</p>
                                <small className="lead text-[#374254]">by Melvina Spring</small>
                            </div>
                        </div>
                        
                      
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default RecentEventSection;