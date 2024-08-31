import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from '../components/core/homepage/HighlightText'
import CTAButton from "../components/core/homepage/Button"
import Banner from "../Assets/images/banner.mp4"
import CodeBlocks from "../components/core/homepage/CodeBlocks"
import TimelineSection from '../components/core/homepage/TimelineSection'
import LearningLanguageSection from '../components/core/homepage/LearningLanguageSection'

const Home = () => {
  return (
    <div>
      {/*section1*/}
<div className='relative mx-auto flex flex-col w-11/12 items-center text-black justify-between'>
    <Link to ={"/signup"}>
    <div className='mt-16 p-1 mx-auto rounded-full bg-richblack-600 font-bold text-black transition-all duration-200  hover:scale-95 w-fit'>
        <div className='flex flex-row items-center gap-rounded-full px-1 py-[5px]'>
            <p>become an user</p>
            <FaArrowRight />
        </div>
    </div>
    </Link>
    <div className='text-center text-4xl font-semibold mt-4'>
        guide yourself with 
        <HighlightText text={"mediguide"} />
    </div>
<div className='w-[90%] text-center text-lg font-bold text-richblack-300'>

    your health is in your hand,choose your medicine with proper guide by MEDIGUIDE
</div>

<div className='flex flex-row gap-7 mt-8'>
<CTAButton active={true} linkto={"/signup"}>
    Learn More
</CTAButton>

<CTAButton active={false} linkto={"/login"}>
    Demo
</CTAButton>
</div>
<div className='mx-3 my-12 shadow-richblack-800'>
    <video
    muted
    loop
    autoPlay
    >
        <source src={Banner} type="video/mp4" />
    </video>
</div>
{/*codesection 1*/}
<div>
    <CodeBlocks
    position={"lg:flex-row"}
    heading={
        <div className='text-4xl font-semibold'>
            proper guidance for
            <HighlightText text={"health issues"}/>
            by Mediguide
        </div>
    }
    subheading={
        "Mediguide give you a path to choose a medicine which is necessary and give a proper information about medicines."
    }
    ctabtn1={
        {
            btnText:"try it yourself",
            linkto: "/signup",
            active:true,
        }
    }
    ctabtn2={
        {
            btnText:"learn more",
            linkto: "/login",
            active: false,
        }
    }
    codeblock={`Tuberculosis (TB)\n Ischemic heart disease\n Ebola virus\n HIV/AIDS\n HIV/AIDS\n Tetanus\n Stroke\n Diabetes\n`}
    codeColor={"text-yellow-50"}

    
    />
</div>
{/*codesection 2*/}
<div>
    <CodeBlocks
    position={"lg:flex-row-reverse"}
    heading={
        <div className='text-4xl font-semibold'>
            let's take a experience of
            <HighlightText text={"Mediguide"}/>
            
        </div>
    }
    subheading={
        "Mediguide give you a path to choose a medicine which is necessary and give a proper information about medicines."
    }
    ctabtn1={
        {
            btnText:"try it yourself",
            linkto: "/signup",
            active:true,
        }
    }
    ctabtn2={
        {
            btnText:"learn more",
            linkto: "/login",
            active: false,
        }
    }
    codeblock={`Tuberculosis (TB)\n Ischemic heart disease\n Ebola virus\n HIV/AIDS\n HIV/AIDS\n Tetanus\n Stroke\n Diabetes\n`}
    codeColor={"text-yellow-50"}

    
    />
</div>
</div>


      {/*section2*/}

      <div className='bg-richblack-800 text-white'>
        <div className='homepage_bg h-[300px]'>

            <div className='w-11/12 max-w max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
            <div className='h-[150px]'></div>
            <div className=' flex flex-row gap-7 text-black'>
                <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                    explore full catalog
                    <FaArrowRight/>
                    </div>
                </CTAButton>
                <CTAButton active={false} linkto={"/signup"}>
                <div>
                    learn more
                </div>

                </CTAButton>
            </div>

            </div>

        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
            <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                <div className='text-5xl font-semibold w-[45%]'>
                    get the care,you deserve
                    <HighlightText text ={"by Mediguide"}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                <div className='text-[16px]'>
                    Mediguide makes you aware of information about a medicine,choose a right path to gather information
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                <div>
                    learn more
                </div>
                </CTAButton>

            </div> 

            </div>

            <TimelineSection/>


        <LearningLanguageSection/>


        </div>

        

      </div>






      {/*section3*/}
      






      {/*footer*/}





    </div>
  )
}

export default Home
