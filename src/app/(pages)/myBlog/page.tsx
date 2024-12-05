import DeleteButton from "../../(componants)/deleteButton/deleteButton";
import FormToAdd from "../../(componants)/formToAdd/form";
import Link from "next/link";
import EditButton from "../../(componants)/editButton/editButton";
import FormToEdit from "../../(componants)/formToEdit/formToEdit";
import { getAllMyBlogs } from "@/app/apis/blogs";
import { blogsTypes } from "@/app/interFaces/interFace";


export default async function MyBlogs() {
    const data = await getAllMyBlogs();
    // console.log(data);

    return (<>
        <div className="w-3/4 md:w-1/2 lg:w-1/3 my-10 mx-auto">
            <FormToAdd />
        </div>
        <div className="flex flex-wrap justify-between items-center mb-20 w-10/12 mx-auto">
            {data?.length > 0 &&
                data?.map((blog: blogsTypes) =>
                    <div key={blog?.id} className="relative w-full lg:w-1/2 p-3 hover:scale-105 duration-300 overflow-hidden">
                        <Link href={`/myBlog/${blog.id}`} className=" min-w-min overflow-hidden cursor-pointer">
                            <div key={blog?.id} className="overflow-hidden bg-white p-7 rounded-lg">
                                <div className="flex justify-between border-b-2 border-t-black mb-8 pb-5">
                                    <h2 className='text-2xl font-semibold'>{blog?.head.split(' ').slice(0, 4).join(' ')}</h2>
                                </div>
                                <p className="text-emerald-900 text-lg">{blog?.body.split(' ').slice(0, 6).join(' ')} <span className="text-blue-500 hover:mr-5"> Read More... </span></p>
                            </div>
                        </Link>
                        <div className="absolute top-7 right-20">
                            <EditButton id={blog?.id} />
                        </div>
                        <div className="absolute top-7 right-10 z-10">
                            <DeleteButton blogId={blog?.id} />
                        </div>
                    </div>)}
            <FormToEdit />
        </div>
    </>)
}
