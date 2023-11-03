import Image from 'next/image'
import React from 'react'
import Skills from "../component/Skills"
import Education from "../component/Education"
const AboutMe = () => {
    return (
        <>
            <div className=' bg-[#00000015] ' id="aboutMe">
                <div className='tablet:flex items-center  tablet:w-[1100px] tablet:py-40 mobile:pt-32 tablet:mx-auto mobile:mx-5 '>
                    <div className='tablet:w-[50%]'>
                        <Image width={400} height={200} alt='aboutme-image' src='/section1.png' className='tablet:w-[500px]' />
                    </div>
                    <div className='tablet:w-[400px] tablet:mt-0 mobile:mt-10'>
                        <h1 className='text-4xl font-bold'>About Me</h1>
                        <p className='mt-3 text-sm'> Hello, I’m a Manaheel jamil, web-developer based on Pakistan. I have hands-on experience in
                            web site design and customization. Also I am good at</p>
                        <div className='grid tablet:grid-cols-5 text-sm mobile:grid-cols-3 mo gap-3 mt-3'>
                            <p className='border border-2  text-center w-16 rounded-md border-[#096254] opacity-[80%] py-1'>HTML</p>
                            <p className='border border-2  text-center w-16 rounded-md border-[#096254] opacity-[80%] py-1'>CSS</p>
                            <p className='border border-2  text-center w-16 rounded-md border-[#096254] opacity-[80%] py-1'>Next</p>
                            <p className='border border-2  text-center w-16 rounded-md border-[#096254] opacity-[80%] py-1'>React</p>
                            <p className='border border-2 text-center w-24  rounded-md border-[#096254] opacity-[80%] py-1'>Typescript</p>
                            <p className='border border-2  text-center w-16  rounded-md  border-[#096254] opacity-[80%] py-1'>Tailwind</p>
                            <p className='border border-2  text-center w-24 rounded-md border-[#096254] opacity-[80%] py-1'>Javascript</p>
                        </div>
                    </div>
                </div>
            </div>
            <Skills />
            <Education />
        </>
    )
}

export default AboutMe