'use client'
import { useAppContext } from "@/context/indexConext";
import { useRouter } from "next/navigation";
// import { useActionState } from "react";
import { IoMdClose } from "react-icons/io";
import toast from 'react-hot-toast';


export default function FormToEdit() {
    let { index, setIndex } = useAppContext()
    // console.log(index);
    let router = useRouter()

    const onEdit = async (formData: FormData) => {
        let head = formData.get('head')
        let body = formData.get('body')
        try {
            await fetch(`http://localhost:8000/posts/${index}`, {
                cache: 'no-store',
                method: "PUT",
                body: JSON.stringify({ head, body }),
                headers: { 'Content-Type': 'application/json' },
            })
            toast.success('blog edit was successed', {
                position: 'top-right',
                duration: 4000,
            })
            router.refresh();
            setIndex(0)
        }
        catch (error) {
            console.log(error);
        }
    }



    return (<>
        <div className={`${index > 0 ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 bg-red-500 z-[999] bg-opacity-40`}>
            <div className={`flex w-full absolute top-0 left-0 right-0 bottom-0 z-[999] bg-slate-700 bg-opacity-40 justify-center items-center`}>
                <IoMdClose onClick={() => setIndex(0)} size={50} cursor={'pointer'} className={`absolute top-5 right-5`} />
                <form action={onEdit} className=" w-1/2 h-1/2">
                    <div className="mb-5">
                        <input required name='head' id="valueOne" className="block w-full p-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-blue-500" placeholder='Edit a Title' />
                    </div>
                    <div>
                        <textarea required name='body' id="valueTwo" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500" placeholder="Edit a comment..." defaultValue={""} />
                    </div>
                    <button type='submit' className='bg-emerald-500 rounded-lg px-10 w-full py-2 text-lg mt-5'>Edit Blog</button>
                </form>
            </div>
        </div>
    </>)
}

