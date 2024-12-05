'use server'

export const editBlog = async (prev: any, formData: FormData) => {
    let head = formData.get('head')
    let body = formData.get('body')
    let index = formData.get('index')
    // console.log('index', index);
    
    try {
        await fetch(`http://localhost:8000/posts/${index}`, {
            cache: 'no-store',
            method: "PUT",
            body: JSON.stringify({ head, body }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
    catch (error) {
        console.log(error);
    }
};