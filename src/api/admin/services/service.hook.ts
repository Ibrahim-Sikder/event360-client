import { useQuery } from "@tanstack/react-query"
import { getServices } from "./services.api"

export const useGetEvents = ()=>{
 
    const servicesData = useQuery({
        queryKey:['services'],
        queryFn: getServices,
        select: (data)=>{
            const services = data?.data?.map((item)=>({
                id:item.id,
                name:item.eventName,
                description:item.description,
            }));
            return services
        },
    })
    return servicesData;
}
