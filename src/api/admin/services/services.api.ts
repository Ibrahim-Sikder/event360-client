
// export const getServices = async () => {
//     async () => {
//         const res = await fetch('https://event-360-3jlpessl0-ibrahim-sikder.vercel.app/services')
//             .then((res) => res.json())

//         if (!res.success) {
//             throw new Error('Something went to wrong')
//         }
//         return res;
//     }

// }

export const getServices = async () => {
    return fetch('https://event-360-3jlpessl0-ibrahim-sikder.vercel.app/services')
        .then((res) => res.json())
}

