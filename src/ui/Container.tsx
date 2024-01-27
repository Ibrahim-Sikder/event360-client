import { ReactNode } from "react";
import { cn } from '@/lib/utils';



type TContainer = {
    children: ReactNode,
    className: string,
}


const Container = ({children, className}:TContainer) => {
    return (
        <div className={cn("p-[10px] w-full max-w-[1280px] max-auto ", className)}>
            {children}
        </div>
    );
};

export default Container;