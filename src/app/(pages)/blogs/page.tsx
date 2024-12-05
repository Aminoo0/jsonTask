import { Card } from "antd";
import Link from "next/link";
import { Suspense } from "react";

interface blogsTypes {
    title: string;
    body: string;
    id: number;
}

// this function alternative to old function getServerSideProps its not supported in app router
async function getAllBlogs() {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            // cache: 'no-store',
            next: { revalidate: 2 }
        })
        const data = await res.json()
        console.log(data);

        return data;
    }
    catch (error) {
        console.log(error);
    }
}


export default async function Blogs() {
    const allBlogs = await getAllBlogs()
    // console.log(allBlogs);

    return (
        <Suspense fallback={<div className="loader mt-72 mx-auto"></div>}>
            <div className="flex flex-wrap gap-5 justify-center mb-20">
                {
                    allBlogs.slice(0, 20).map((blog: blogsTypes) =>
                        <Link href={`/blogs/${blog.id}`} key={blog.id}>
                            <Card title={blog.title} className="hover:scale-105 duration-300 hover:bg-slate-200" style={{ width: 600, height: 180, cursor: "pointer" }}>
                                <p>{blog.body}</p>
                                <span className=" text-[16px] text-blue-700">see more ...</span>
                            </Card>
                        </Link>
                    )}
            </div>
        </Suspense>
    );
}

// export async function getServerSideProps() {
//   try {
//     const res = await fetch(`http://localhost:4000/posts`);
//     const data = await res.json();
//     return {
//       props: { data }
//     }
//   }
//   catch (error) {
//     console.log(error);
//   }
// }
