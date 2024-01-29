import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const useScrollGrow = () => {
    const componentRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: componentRef,
        offset:['0 1', '1.2 1'],
    })

    const scaleValue = useTransform(scrollYProgress,[0, 1], [0.5, 1 ])
    const opacityValues = useTransform(scrollYProgress,[0, 1], [0.1, 1])

    const  style={
        scale:scaleValue,
        opacity: opacityValues,

    }
    // const xValues = useTransform(scrollYProgress,[0, 1], [-1000, 1])


    return {componentRef, style}
};

export default useScrollGrow;