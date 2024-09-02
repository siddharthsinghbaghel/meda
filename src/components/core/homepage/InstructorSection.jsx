import React from 'react'
import Instructorpic from '../../../Assets/images/Instructorpic.jpg'
import HighlightText from './HighlightText'
import { FaArrowRight } from 'react-icons/fa'
import CTAButton from '../homepage/Button'
const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>
        <div className='w-[50%]'>
            <img

            src={Instructorpic}
            className='shadow-black'
            
            />
        </div>
<div className='w-[50%] flex flex-col gap-10'>
<div className='text-4xl font-semibold w-[50%]'>
    Become a part of 
    <HighlightText text={"Mediguide"}/>


</div>
<p className='font-medium text-[16px] w-[80%] text-richblack-800'>
    let's start a journey of mediguide and take a step for our future 
</p>

<div className='w-fit'>

<CTAButton active={true} linkto ={"/signup"}>
<div className='flex flex-row gap-2 items-center'>
    Start learning Today
    <FaArrowRight/>

</div>

</CTAButton>



</div>

</div>
      </div>
    </div>
  )
}

export default InstructorSection
