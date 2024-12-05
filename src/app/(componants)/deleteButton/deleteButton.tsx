'use client'
import { IoCloseOutline } from "react-icons/io5";
import toast from 'react-hot-toast';



import { useRouter } from "next/navigation";

interface deleteType {
    id: string;
}

export default function DeleteButton({ blogId }: any) {
    let router = useRouter()

    let AddBlog = async (id: deleteType) => {
        try {
            let res = await fetch(`http://localhost:8000/posts/${id}`, {
                cache: 'no-store',
                method: "DELETE",
            })
            if (res.status == 200) {
                router.refresh();
            }
            toast.success('blog was deleted successfully', {
                position: 'top-right',
                duration: 4000,
            })
        }
        catch (error) {
            console.log(error);
            toast.error(error)
        }
    }

    return (
        <IoCloseOutline onClick={() => AddBlog(blogId)} size={35} cursor={'pointer'} color="tomato" className="hover:rotate-90 duration-300" />
    )
}
