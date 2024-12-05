import { deleteType, paramsType } from "../interFaces/interFace";


// this function alternative to old function getServerSideProps its not supported in app router
export async function getAllBlogs() {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            // cache: 'no-store',
            next: { revalidate: 2 }
        })
        const data = await res.json()

        return data;
    }
    catch (error) {
        console.log(error);
    }
}


// this function alternative to old function getServerSideProps its not supported in app router
export async function getBlogDetails({ params }: { params: { blogId: paramsType } }) {

    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.blogId}`, {
            // cache: 'no-store',
        })
        const data = await res.json()
        return data;
    }
    catch (error) {
        console.log(error);
    }
}


// this function alternative to old function getServerSideProps its not supported in app router
export async function getAllMyBlogs() {
    try {
        let res = await fetch(`http://localhost:8000/posts`, {
            // cache: 'no-store',
        })
        const data = await res.json()
        return data;
    }
    catch (error) {
        console.log(error);
    }
}


// this function alternative to old function getServerSideProps its not supported in app router
export async function getMyBlogDetails({ params }: { params: { myBlogId: paramsType } }) {

    try {
        let res = await fetch(`http://localhost:8000/posts/${params?.myBlogId}`, {
            // cache: 'no-store',
        })
        const data = await res.json()
        // console.log(res);

        return data;
    }
    catch (error) {
        console.log(error);
    }
}



// delete funcion

export async function deleteMyBlog(id: deleteType) {
    try {
        let res = await fetch(`http://localhost:8000/posts/${id}`, {
            cache: 'no-store',
            method: "DELETE",
        })
        return res
    }
    catch (error) {
        console.log(error);
    }
}