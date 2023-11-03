import React from 'react'
import Link from 'next/link'
import PostData from "../data/project.json"
import Image from 'next/image'

const page = () => {
  return (
    <div>
         <div className='bg-gray-200 pt-20 pb-5'>
            <div className='tablet:w-[1000px] tablet:mx-auto mobile:mx-5 '>
                <h1 className='font-bold text-2xl py-10 text-center'>Featured Posts</h1>
                <div className='tablet:flex gap-10 pb-10'>
                    {PostData ? PostData.map((item) => {
                        return (<>
                            <div className='w-80 tablet:mt-0 mobile:mt-10 shade pb-4'>
                                <Image width={300} height={200} alt="posts" src={item.image} />
                                <h1 className='font-bold text-lg text-[#202026] p-3'>{item.heading}</h1>
                                <p className='text-sm font-semibold px-3'>{item.description}</p><br/>
                                <Link href={item.link} className='text-md px-3 py-4 font-bold text-[#096254] mt-10'>Demo</Link>
                            </div>
                        </>)
                    }) : "loading...."}

                </div>
            </div>
        </div>
    </div>
  )
}

export default page