/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useForm } from 'react-hook-form';
import {useState} from "react"
import React from 'react'
import { FaLocationArrow } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const contact = () => {
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        (data.email && data.name ) ? console.log(data) : alert("Fields are empty")
      if (!data.name) {
        setNameError('Name is required');
        return;
      } else {
        setNameError('');
      }
  
      if (!data.email) {
        setEmailError('Email is required');
        return;
      } else {
        setEmailError('');
      }
  
  
      console.log(data);
      reset()
    };
  
  
  
    return (
        <div className='bg-gray-100' >
            <div className='tablet:w-[900px] tablet:mx-auto mobile:mx-5 pt-28  py-20'>
                <h1 className='text-2xl font-bold text-center'>Contact Me</h1>
                <div className='tablet:flex gap-10 mt-10'>
                    <div className='space-y-10 mt-5'>
                        <div className='tablet:w-[450px] h-32 flex gap-10 shade p-5'>
                            <div className='w-20 h-20 rounded-full border-2 border-[#096254] flex items-center justify-center'><FaLocationArrow /></div>
                            <div>
                                <h1 className='font-bold text-xl mt-2'>Address</h1>
                                <p className='text-xs mt-2'>House No 8, Sector 33/B KORANGI nO2, KARACHI<br />
                                    New york</p>
                            </div>
                        </div>
                        <div className='tablet:w-[450px] h-32 flex gap-10 shade p-5'>
                            <div className='w-20 h-20 rounded-full border-2 border-[#096254] flex items-center justify-center'><AiOutlineMail className='text-2xl'/></div>
                            <div>
                                <h1 className='font-bold text-xl mt-2'>Email</h1>
                                <p className='text-xs mt-2'>manaheeljamil20@email.com<br />
                                    </p>
                            </div>
                        </div>
                </div>
                    <form className='flex flex-col space-y-5 ' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="firstname" className='hidden'>Name:</label>
                    {nameError && <p className='text-red-900  font-bold  text-xs'>{nameError}</p>}
                        <input  aria-label="firstname"type='text' placeholder='First Name' id="name"  {...register('name')} className='tablet:w-[420px] p-3 bg-gray-100 border-1 shades border-gray-200 '/>
                        <label className='hidden' htmlFor="email">Email</label>
                        {emailError && <p className='text-red-900 font-bold  text-xs'>{emailError}</p>}
                        <input aria-label="email" type='text' placeholder='Your Email' id="email"  {...register('email')} className='tablet:w-[420px] p-3 bg-gray-100 border-1 shades border-gray-200'/>
                        <label className='hidden' htmlFor="text">Message</label>
                        <textarea aria-label="message" type='text' className='h-24 bg-gray-100  border-1 shades  border-gray-200 '></textarea>
                        <button type="submit" className='bg-[#096254] rounded-full mt-5 text-white py-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact