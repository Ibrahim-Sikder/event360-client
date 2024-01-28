import Container from "../../ui/Container";
import { FaEuroSign, FaFacebook, FaGlobe } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#0F172A] text-white ">
            <Container className="">
            {/* <span className='text-3xl'> Event <b className='text-[#01DBF7]'>360</b></span> */}
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 place-content-center place-items-center py-10">
           
                <ul className="space-y-5 ">
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Overview </li>
                    <li>Browse</li>
                    <li>Accessiblity </li>
                </ul>
                <ul className="space-y-5 ">
                    <li>Solutions </li>
                    <li>Brainstorming </li>
                    <li>Ideation </li>
                    <li>Wireframing </li>
                    <li>Research  </li>
                </ul>
                <ul className="space-y-5 ">
                    <li>Resource </li>
                    <li>Help Center </li>
                    <li>Blog </li>
                    <li>Tutorials </li>
                    <li>FAQs </li>
                </ul>
                <ul className="space-y-5 ">
                    <li>Support </li>
                    <li>Contact Us </li>
                    <li>Developers  </li>
                    <li>Decumentation </li>
                    <li>Integrations  </li>
                </ul>
                <ul className="space-y-5 ">
                    <li>Company </li>
                    <li>About </li>
                    <li>Press  </li>
                    <li>Events</li>
                    <li>Request Demo </li>
                </ul>
            </div>
            <hr />
            <div className="flex justify-between py-6">
                <small> @ 2023. All rights reserved.</small>
                <div className="flex space-x-8">
                    <small>Terms</small>
                    <small>Privacy </small>
                    <small>Contact</small>
                    <small className="flex">
                        <FaGlobe className="mr-2"/>
                        <small>EN</small>
                    </small>
                    <small className="flex">
                        <FaEuroSign className="mr-2"/>
                        <small>EN</small>
                    </small>
                    <small><FaFacebook/></small>
                     
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Footer;