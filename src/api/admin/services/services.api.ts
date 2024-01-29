
// export const getServices = async () => {
//     async () => {
//         const res = await fetch('http://localhost:5000/services')
//             .then((res) => res.json())

//         if (!res.success) {
//             throw new Error('Something went to wrong')
//         }
//         return res;
//     }

// }

export const getServices = async()=>{
    return fetch('http://localhost:5000/services')
    .then((res)=>res.json())
  }
