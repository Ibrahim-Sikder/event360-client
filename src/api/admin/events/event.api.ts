export const getEvents = async () => {
    return fetch('https://event-360-3jlpessl0-ibrahim-sikder.vercel.app/events')
        .then((res) => res.json())
}
