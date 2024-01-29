export const getEvents = async () => {
    return fetch('http://localhost:5000/events')
        .then((res) => res.json())
}
