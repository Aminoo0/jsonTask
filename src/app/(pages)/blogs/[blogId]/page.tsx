import { getBlogDetails } from "@/app/apis/blogs";
import { paramsType } from "@/app/interFaces/interFace";
import { Button, Card } from "antd";
import { Suspense } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


export default async function BlogDetails({ params }: { params: { blogId: paramsType } }) {
    const data = await getBlogDetails({ params })

    return (
        <Suspense fallback={<div className="loader mt-72 mx-auto"></div>}>
            <div className="flex justify-center w-10/12 mx-auto lg:w-7/12">
                <Card className="hover:scale-105 duration-300" style={{ fontSize: 18 }}>
                    <div className="flex justify-between border-b-2 border-t-black mb-8 pb-5">
                        <h2 className='text-2xl font-semibold'>{data?.title}</h2>
                        <Button href='/' type="primary">
                            <FaArrowRightLong size={20} className="hover:scale-110 hover:pl-1 duration-300" />
                        </Button>
                    </div>
                    <p className="text-emerald-900">{data?.body}</p>
                </Card>
            </div>
        </Suspense>
    )
}
