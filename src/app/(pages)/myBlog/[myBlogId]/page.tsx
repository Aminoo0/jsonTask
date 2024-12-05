import { getMyBlogDetails } from "@/app/apis/blogs";
import { paramsType } from "@/app/interFaces/interFace";
import { Button, Card } from "antd";
import { Suspense } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function MyBlogDetails({ params }: { params: { myBlogId: paramsType } }) {
    const data = await getMyBlogDetails({ params })
    // console.log(await params);

    return (
        <Suspense fallback={<div className="loader mt-72 mx-auto"></div>}>
            <div className=" w-10/12 mx-auto lg:w-8/12">
                <Card className="hover:scale-105 duration-300">
                    <div className="flex justify-between border-b-2 border-t-black mb-8 pb-5">
                        <h2 className='text-2xl font-semibold'>{data?.head}</h2>
                        <div className="flex gap-5 items-center">
                            <Button href='/myBlog' type="primary">
                                <FaArrowRightLong size={20} className="hover:scale-110 hover:pl-1 duration-300" />
                            </Button>
                        </div>
                    </div>
                    <p className="text-emerald-900 text-xl">{data?.body}</p>
                </Card>
            </div>
        </Suspense>
    )
}
