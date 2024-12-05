'use server'

export const onFinish = async (prev: any, formData: FormData) => {
    let head = formData.get('head')
    let body = formData.get('body')
    try {
        await fetch(`http://localhost:8000/posts/`, {
            cache: 'no-store',
            method: "POST",
            body: JSON.stringify({ head, body }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
    catch (error) {
        console.log(error);
    }
};