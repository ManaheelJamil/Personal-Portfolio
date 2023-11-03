"use client"
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import { BsLinkedin } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import { AiFillGithub } from "react-icons/ai"
import { useState, useEffect } from 'react';
import Link from 'next/link'
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' pt-[0.1px]  '>
            <div className={`  flex justify-between  w-full fixed left-0 right-0 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'
                }`}
            >
                <div className='tablet:w-[1000px] py-5  grid tablet:grid-cols-3 mobile:grid-cols-4  tablet:mx-auto mobile:mx-5 '>
                    <div>
                        <button className=' bg-[#096254] rounded-md text-white text-sm p-2 w-24 '>RESUME</button>
                    </div>
                    <ul className='flex space-x-5 text-md justify-items-end items-center '>
                        <li className='  hover:border-b-2 pb-2 tablet:block mobile:hidden'><Link href="/">Home</Link></li>
                        <li className='  hover:border-b-2 pb-2 tablet:block mobile:hidden'><Link href="/aboutpage">About</Link></li>
                        <li className='  hover:border-b-2 pb-2 tablet:block mobile:hidden'><Link href="/aboutpage">Experience</Link></li>
                        <li className='  hover:border-b-2 pb-2 tablet:block mobile:hidden'><Link href="/projectpage">Project</Link> </li>
                        <li className='  hover:border-b-2 pb-2 tablet:block mobile:hidden'><Link href="/contactpage">Contact</Link></li>
                    </ul>
                    <div className='flex space-x-5 items-center text-md   justify-end'>
                        <BiLogoFacebook className='tablet:block  mobile:hidden ' />
                        <BsLinkedin className='tablet:block  mobile:hidden ' />
                        <AiFillGithub className='tablet:block  mobile:hidden ' />
                        <BiLogoGmail className='tablet:block  mobile:hidden ' />
                    </div>
                    <div className={`i ${isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}grid place-content-end`} onClick={toggleDropdown}>
                        <AiOutlineMenu className='tablet:hidden  mobile:block mx-auto  mt-2' />

                    </div>
                    {isOpen && (
                        <ul className='mt-10 absolute text-center space-y-4 w-72 py-10 text-sm tablet:hidden mobile:block bg-gray-200 '>
                            <li className='  hover:border-b-2 pb-2 tablet:hidden mobile:block' onClick={handleClick}><Link href="/">Home</Link></li>
                            <li className='  hover:border-b-2 pb-2 tablet:hidden mobile:block' onClick={handleClick}><Link href="/aboutpage">About</Link></li>
                            <li className='  hover:border-b-2 pb-2 tablet:hidden mobile:block' onClick={handleClick}><Link href="/aboutpage">Experience</Link></li>
                            <li className='  hover:border-b-2 pb-2 tablet:hidden mobile:block' onClick={handleClick}><Link href="/projectpage">Project</Link> </li>
                            <li className='  hover:border-b-2 pb-2 tablet:hidden mobile:block' onClick={handleClick}><Link href="/contactpage">Contact</Link></li>
                        </ul>)}
                </div>
                <div>
                </div>

            </div>
            {/* <Header /> */}
        </div>
    )
}

export default Navbar