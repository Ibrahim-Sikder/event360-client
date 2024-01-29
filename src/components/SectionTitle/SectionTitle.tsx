import useScrollGrow from "../../hooks/useScrollGrow"
import "./SectionTitle.css"
import { motion } from 'framer-motion';

export type TTitle = {
  title: string
  desc: string
}

const SectionTitle = ({ title, desc }: TTitle) => {
  const {componentRef, style} = useScrollGrow()

  return (
    <motion.div
    ref={componentRef}
    style={style}

    >
      <div className="text-white w-full sm:max-w-[600px] mx-auto text-center ">
        <h2 className=" serviceTitle">{title} </h2>
        <p className="text-[18px]">{desc}</p>
      </div>
    </motion.div>
  )
}

export default SectionTitle
