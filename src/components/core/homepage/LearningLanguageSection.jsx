import React from 'react'
import HighlightText from './HighlightText'
import Pixel1 from "../../../Assets/images/Pixel1.jpg"
import Pixel2 from "../../../Assets/images/Pixel2.jpg"
import Pixel3 from "../../../Assets/images/Pixel3.jpg"
import CTAButton from "../homepage/Button"
const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center '>
        <div className='text-4xl font-semibold items-center'>
            Your swiss knife for 
            <HighlightText text={"learning  about any medicine"}/>

      </div>
      <div className='text-center text-white mx-auto text-base mt-3 font-medium w-[70%]'>
        Use mediguide to learn about multiple medicine and its uses
      </div>

      <div className='flex flex-row items-center justify-center mt-5'>
        <img
        src = {Pixel1}
        alt = "Pixel1"
        className='object-contain -mr-32'
        />

        <img
        src = {Pixel2}
        alt = "Pixel2"
        className='object-contain'
        />

        <img
        src = {Pixel3}
        alt = "Pixel3"
        className='object-contain -ml-36'
        />



      </div>
      <div className='w-fit'>
        <CTAButton active={true} linkto={"/signup"}>
        <div>
            Learn more
        </div>

        </CTAButton>
      </div>
    </div>
    </div>
  )
}

export default LearningLanguageSection
