import React from 'react'
import data from "../data/education.json"
import dataExperience from "../data/experience.json"
const Experience = () => {
    console.log(data)
    return (
        <div className='back' id="experience">
            <div className='tablet:w-[900px] tablet:mx-auto mobile:mx-5 pb-20 tablet:flex justify-between'>
                <div className='tablet:w-[500px]'>
                    <h1 className='text-3xl font-bold  pt-32 pb-5 '>Education</h1>
                    {data ? data.map((item) => {
                        return <>
                            <div className='bg-[#00000015] p-5 shadow-xl mt-10 tablet:w-[400px]'>
                                <h1 className='font-bold text-lg flex '>{item.heading}  <h1 className='text-[#096254] ml-2 '>{item.school}</h1></h1>
                                <h1 className='text-[#096254] my-3'>{item.year}</h1>
                                <p className='text-xs'>{item.para}</p>
                            </div>
                        </>
                    }) : "loading"}

                </div>
                <div className='tablet:w-[500px]'>
                    <h1 className='text-3xl font-bold  pt-32 pb-5 '>Work Experience</h1>
                    {dataExperience ? dataExperience.map((item) => {
                        // eslint-disable-next-line react/jsx-key
                        return (<div className='bg-[#00000015] p-5 mt-10 shadow-xl mt-10 tablet:w-[400px]'>
                        <h1 className='font-bold text-md flex '>{item.heading}<h1 className='text-[#096254] ml-2 '>{item.uni}</h1></h1>
                        <p className='text-[#096254] my-2'>{item.year}</p>
                        <p className='text-xs font-bold'>Learning :</p>
                        <ul className='font-bold list-disc ml-4 text-sm'>
                            <li>{item.responsiblity}</li>
                        </ul>
                    </div>)
                    }) : "loading..."}

                </div>
            </div>
        </div>
    )
}

export default Experience