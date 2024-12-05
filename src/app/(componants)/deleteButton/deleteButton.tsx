'use client'
import { IoCloseOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { deleteType } from "@/app/interFaces/interFace";
import { deleteMyBlog } from "@/app/apis/blogs";


export default function DeleteButton({ blogId }: deleteType) {
    let router = useRouter()


    async function deleteBlog(id: number) {
        deleteMyBlog(id) as any
        let res = await deleteMyBlog(id) as any
        // console.log(res);
        if (res?.status == 404) {
            toast.success('blog has beed deleted ',
                {
                    position: 'top-right',
                    duration: 4000,
                }
            )
            router.refresh()
        }

    }

    return (
        <IoCloseOutline onClick={() => deleteBlog(blogId)} size={35} cursor={'pointer'} color="tomato" className="hover:rotate-90 duration-300" />
    )
}
