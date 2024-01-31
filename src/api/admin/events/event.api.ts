export const getEvents = async () => {
    return fetch('https://event-360-liart.vercel.app/events')
        .then((res) => res.json())
}
