import React from 'react'

const Skills = () => {
    return (
        <div className=' bg-[#00000015] 'id="skills">
            <div className='tablet:w-[1000px] tablet:mx-auto mobile:mx-5 tablet:flex pb-32  justify-between'>
                <div>
                    <h1 className='text-3xl font-bold text-center pt-32 pb-20'>Technical Skills</h1>
                    {/* //HTML CSS */}
                    <div className='tablet:w-[470px] flex justify-between mt-3 font-bold'>
                        <h1>HTML,CSS</h1>
                        <h1>86%</h1>
                    </div>
                    <div className='flex mt-2 '>
                        <div className='w-96 bg-[#096254] rounded-l-full  py-1'></div>
                        <div className='w-24 rounded-r-full bg-gray-400'></div>
                    </div>
                    {/* Typescript */}
                    <div className='tablet:w-[470px] flex justify-between mt-3 font-bold'>
                        <h1>Typescript</h1>
                        <h1>30%</h1>
                    </div>
                    <div className='flex mt-2 '>
                        <div className='w-24 bg-[#096254] rounded-l-full  py-1'></div>
                        <div className='w-96 rounded-r-full bg-gray-400'></div>
                    </div>
                    {/* React */}
                    <div className='tablet:w-[470px] flex justify-between mt-3 font-bold'>
                        <h1>React</h1>
                        <h1>40%</h1>
                    </div>
                    <div className='flex mt-2 '>
                        <div className='w-40 bg-[#096254] rounded-l-full  py-1'></div>
                        <div className='w-80 rounded-r-full bg-gray-400'></div>
                    </div>
                    {/* Next js */}
                    <div className='tablet:w-[470px] flex justify-between mt-3 font-bold'>
                        <h1>Nextjs</h1>
                        <h1>40%</h1>
                    </div>
                    <div className='flex mt-2 '>
                        <div className='w-40 bg-[#096254] rounded-l-full  py-1'></div>
                        <div className='w-80 rounded-r-full bg-gray-400'></div>
                    </div>
                    {/* Tailwind ui */}
                    <div className='tablet:w-[470px] flex justify-between mt-3 font-bold'>
                        <h1>Tailwind UI</h1>
                        <h1>70%</h1>
                    </div>
                    <div className='flex mt-2 '>
                        <div className='w-80 bg-[#096254] rounded-l-full  py-1'></div>
                        <div className='w-40 rounded-r-full bg-gray-400'></div>
                    </div>
                   
                    {/* JAVASCRIPT */}
                    <div className='tablet:w-[470px] flex justify-between mt-3 font-bold'>
                        <h1>Javascript</h1>
                        <h1>46%</h1>
                    </div>
                    <div className='flex mt-2 '>
                        <div className='w-40 bg-[#096254] rounded-l-full  py-1'></div>
                        <div className='w-80 rounded-r-full bg-gray-400'></div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-center pt-32 pb-20'>Professional Skills</h1>
                    <div className='grid grid-cols-2 gap-20  '>
                        <div className='w-28 h-28 rounded-full  text-center  align-middle border border-4 border-[#096254] '>
                            <p className='font-bold mt-10'>75%</p>
                            <h1 className='font-bold mt-14'>Communication</h1>
                        </div>
                        <div className='w-28 h-28 rounded-full  text-center  align-middle border border-4 border-[#096254] '>
                            <p className='font-bold mt-10'>75%</p>
                            <h1 className='font-bold mt-14'>Team Work</h1>
                        </div>
                        <div className='w-28 h-28 rounded-full  text-center  align-middle border border-4 border-[#096254] '>
                            <p className='font-bold mt-10'>80%</p>
                            <h1 className='font-bold mt-14'>Project Management</h1>
                        </div>
                        <div className='w-28 h-28 rounded-full  text-center  align-middle border border-4 border-[#096254] '>
                            <p className='font-bold mt-10'>60%</p>
                            <h1 className='font-bold mt-14'>Creativity</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills