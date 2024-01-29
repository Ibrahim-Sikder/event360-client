import customer from "../../assets/images/customer.webp"
import { FaQuoteLeft } from "react-icons/fa"
import Container from "../../ui/Container"
const CustomerSupport = () => {
  return (
    <div className="bg-[#0F172A] py-14 text-white ">
      <Container className="">
        <div className="grid grid-cols-1 place-items-center place-content-center md:grid-cols-2 ">
          <img src={customer} alt="managment" />
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold">
              <span className="text-[#01DBF7]">24/7</span> Customer Support{" "}
            </h2>
            <div className="flex items-center mt-8">
              <div className=" border border-dotted  mr-5 h-[150px] bg-white"></div>
              <div>
                <div className="flex relative ">
                  <FaQuoteLeft
                    size={40}
                    className="-z-2  -top-3 relative z-0 opacity-15 "
                  />
                  <p className="z-[99] italic max-w-[50ch] leading-7 -ml-8">
                    We were really thrilled with the steps the team took to hold
                    our hands as first-time customers, and we really felt that
                    level of support.
                  </p>
                </div>
                <div className="mt-3">
                  <h5>Jhon Doe </h5>
                  <small>Bangladeshi Entreprenure </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CustomerSupport
