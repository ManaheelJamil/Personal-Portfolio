import React from 'react'
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { BiLogoFacebook } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { BiBasketball } from "react-icons/bi"
import { AiFillGithub } from "react-icons/ai"
import Image from 'next/image'
const HomePage = () => {
    return (
        <>
            <div className='back tablet:pt-0 mobile:pt-20'>
                <div className=' text-[#000000] h-screen items-center tablet:mx-auto mobile:mx-5 tablet:flex justify-center gap-40'>
                    <div className='space-y-4 mt-10'>
                        <button className='bg-[#096254] rounded-t-2xl rounded-r-2xl text-white text-sm px-7 py-2 '>Hello I, am</button>
                        <h1 className='tablet:text-5xl mobile:text-4xl font-bold'>Manaheel Jamil</h1>
                        <p className='font-bold text-lg'>Frontend Developer</p>
                        <p className='text-sm tablet:w-[500px] '>I am a student pursuing a Bachelor of Science in Mathematics at Federal Urdu University. I am also a web developer. I have completed a <b>Web and App development</b> course at Sylani,
                            and I am currently taking a course in<b>Web 3.0 and the Metaverse</b>  with PIAIC. I have one year of hands-on experience in frontend development,
                            including a five-month internship at the Lahore-based company <b>MAYONITY</b>. I am currently employed as a frontend developer at <b>MAYONITY</b>.
                            My hobbies include learning, programming, and observation, and I have a strong passion for coding.</p>
                    </div>
                    <div className=' tablet:mx-0 mobile:mx-10 tablet:mt-0 mobile:mt-12 '>
                        <Image src='/mine.jpg' width={350} height={350} alt="header-image" className='ring-offset-2 ring-[#096254] rounded-full ring-[20px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage