'use server'

// export const onEdit = async (prev: any, formData: FormData) => {
//     console.log(prev);
    
//     let head = formData.get('head')
//     let body = formData.get('body')
//     try {
//         await fetch(`http://localhost:8000/posts/${id}`, {
//             cache: 'no-store',
//             method: "PUT",
//             body: JSON.stringify({ head, body }),
//             headers: { 'Content-Type': 'application/json' },
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
// };