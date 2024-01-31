import { useQuery } from "@tanstack/react-query"
import { getRecentEvent } from "./recent.event.api"


export const useGetEvents = () => {
    type TEvent = {
        id: string,
        eventName: string,
        description: string
    }
    const servicesData = useQuery({
        queryKey: ['events'],
        queryFn: getRecentEvent,
        select: (data) => {
            const services = data?.data?.map((item: TEvent) => ({
                id: item.id,
                name: item.eventName,
                description: item.description,
            }));
            return services
        },
    })
    return servicesData;
}
