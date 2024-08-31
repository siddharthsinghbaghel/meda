import React from 'react'

import Logo1 from "../../../Assets/images/Logo1.png"
import Logo2 from "../../../Assets/images/Logo2.png"
import Logo3 from "../../../Assets/images/Logo3.png"
import Logo4 from "../../../Assets/images/Logo4.png"
import timelineImage from "../../../Assets/images/TimelineImage.jpg"
const timeline =[
    {
        Logo:Logo1,
        heading:"selfcare",
        Description:"your care is in your hand",
    },

    {
        Logo:Logo2,
        heading:"decision making",
        Description:"for easy decision making",
    },

    {
        Logo:Logo3,
        heading:"awareness",
        Description:"health demands awareness",
    },

    {
        Logo:Logo4,
        heading:"information hub ",
        Description:"collect needed info for your health",
    },

]

const TimelineSection = () => {
  return (
    <div>
        <div className='flex flex-row gap-15 items-center'>

            <div className='w-[45%] flex flex-col gap-5 '>
                {
                    timeline.map((element, index)=>{
                        return(
                            <div className='flex flex-row gap-6' key={index}>
                                <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                    <img src={element.Logo}/>

                                </div>

                                <div>
                                    <h2 className='font-semibold text-[18px]'>
                                        {element.heading}
                                    </h2>
                                    <p className='text-base'>
                                        {element.Description}
                                    </p>
                                </div>

                            </div>

                        )
                    })
                }

            </div>

            <div className='relative shadow-blue-200'>
                <img src={timelineImage} alt="timelineimage"
                className='shadow-white object-cover h-fit'
                />
                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>1 Million</p>
                        <p className='text-caribbeangreen-300 text-sm'>Type of medicines</p>
                    </div>

                    <div className='flex gap-5 items-center px-7'>
                    <p className='text-3xl font-bold'>With</p>
                    <p className='text-caribbeangreen-300 text-sm'>precautions</p>


                </div>

            </div>

        </div>
      
    </div>
    
    </div>
  )
}

export default TimelineSection
