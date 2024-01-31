export const getRecentEvent = async () => {
    return fetch('https://event-360-liart.vercel.app/recent-events')
        .then((res) => res.json())
}
