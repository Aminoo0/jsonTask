'use client'
import { CiEdit } from "react-icons/ci";
import { useAppContext } from "@/context/indexConext";


export default function EditButton({ id }: any) {
    let { setIndex } = useAppContext()
    // console.log(index);

    return (<>
        <CiEdit onClick={() => setIndex(id)} size={35} cursor={'pointer'} color="green" className="hover:scale-110 duration-300" />
    </>)
}
