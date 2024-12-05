'use client'

import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { onFinish } from '../useServerForForm/onFinish';
import toast from 'react-hot-toast';




export default function FormToAdd() {
    let router = useRouter()
    const [data, action, isPending] = useActionState(onFinish, undefined)
    console.log(data);

    useEffect(() => {
        if (isPending) {
            toast.success('blog added successfully', {
                position: 'top-right',
                duration: 4000,
            })
        }
        router.refresh()
    }, [isPending])


    return (
        <form action={action}>
            <div className="mb-5">
                <input required name='head' id="valueOne" className="block w-full p-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-blue-500" placeholder='Leave a Title' />
            </div>
            <div>
                <textarea required name='body' id="valueTwo" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500" placeholder="Leave a comment..." defaultValue={""} />
            </div>

            <button disabled={isPending} type='submit' className='bg-emerald-500 rounded-lg px-10 w-full py-2 text-lg mt-5'>Add Blog</button>
            {data?.error && <h1 className='py-3 px-4 w-full my-3 bg-red-600 rounded-lg text-white'>{data?.error}</h1>}
            {data?.message && <h1 className='py-3 px-4 w-full my-3 bg-emerald-600 rounded-lg text-slate-950'>{data?.message}</h1>}
        </form>
    )
}