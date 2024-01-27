import { ReactNode } from "react";
import { cn } from "../lib/utils";

type TContainer = {
    children: ReactNode,
    className: string,
}


const Container = ({children, className}:TContainer) => {
    return (
        <div className={cn("px-[20px] w-full max-w-[1230px] mx-auto", className)}>
           {children} 
        </div>
    );
};

export default Container;