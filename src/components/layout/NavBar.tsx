import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"
const NavBar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="h-24  w-full text-white "
    >
      <nav className="  h-full  w-full max-w-[1280px] mx-auto flex justify-between items-center ">
        <span className="text-3xl">
          {" "}
          Event <b className="text-[#01DBF7]">360</b>
        </span>
        <ul className="space-x-5 md:block hidden ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Serivces</NavLink>
        </ul>
        <FaBars className="block md:hidden  " size={20} />
      </nav>
    </motion.header>
  )
}

export default NavBar
