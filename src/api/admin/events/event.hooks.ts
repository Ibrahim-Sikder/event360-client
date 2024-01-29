import { useQuery } from "@tanstack/react-query"
import { getEvents } from "./event.api";

export const useGetEvents = () => {

    const servicesData = useQuery({
        queryKey: ['events'],
        queryFn: getEvents,
        select: (data) => {
            const services = data?.data?.map((item) => ({
                id: item.id,
                name: item.eventName,
                description: item.description,
            }));
            return services
        },
    })
    return servicesData;
}
