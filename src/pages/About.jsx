import React from 'react'
import HighlightText from "../components/core/homepage/HighlightText"
import BannerImage1 from "../Assets/images/aboutus1.jpg"
import BannerImage2 from "../Assets/images/aboutus2.jpg"
import BannerImage3 from "../Assets/images/aboutus3.jpg"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../Assets/images/FoundingStory.png"
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import StatsComponent from '../components/core/AboutPage/Stats'

const About = () => {
  return (
    <div className='mx-auto mt-[100px] text-white'>
      {/* section 1 */}
      <section>
        <div>
            <header>
            Welcome to Mediguide, your trusted source for reliable medical information and guidance
                <HighlightText text={"Our Misson"}/>
                <p> is to empower you with the knowledge you need to make informed decisions about your health and well-being</p> 
            </header>
            <div className='flex gap-x-3 mx-auto'>
                <img src={BannerImage1} />
                <img src={BannerImage2} />
                <img src={BannerImage3} />
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section>
        <div>
            <Quote/>
        </div>
      </section>


      {/* section 3 */}

      <section>
        <div className='flex flex-col'>
            {/* foudning story wala div */}
            <div className='flex '>
                {/* founding story left box */}
                <div>
                    <h1>Our Founding Story</h1>

                    <p>Our medical guider platform was born out of a shared vision and passion for information collection. It all began with a group of student, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality medical awareness in a rapidly evolving digital world.</p>

                    <p>As a youth, we witnessed firsthand the limitations and challenges of medical awareness.We believe that everyone deserves access to accurate and up-to-date medical information, which is why we are committed to providing clear, evidence-based content that you can rely on.</p>
                </div>
                {/* foudning story right box */}
                <div>
                    <img  src={FoundingStory} />
                </div>
            </div>

            {/* vision and mission wala parent div */}
            <div className='flex'>
                {/* left box */}
                <div>
                    <h1>Our Vision</h1>
                    <p>With this vision in mind, At Mediguide, we offer a wide range of resources designed to help you navigate your health journey. From expert articles on various health conditions and treatments to wellness tips and preventive care advice, our content is created and reviewed by a team of experienced healthcare professionals.</p>
                </div>

                {/* right box */}
                <div>
                    <h1>
                        Our Mission
                    </h1>
                    <p>We are here to support you in your quest for better health. Whether you're looking for guidance on managing a chronic condition, seeking advice on how to maintain a healthy lifestyle, or simply curious about a medical topic, Mediguide is here to help.</p>
                </div>
            </div>
        </div>
      </section>  

      {/* section 4 */}
      <StatsComponent/>
      
      {/* section 5 */}
      <section className='mx-auto flex flex-col items-center justify-between gap-5 mb-[140px]'>
        {/*<LearningGrid />*/}
        <ContactFormSection />
      </section>

      <section>
        <div>
            Reviews from other searchers
            {/* <ReviewSlider /> */}
        </div>
      </section>

      {/*<Footer/>*/}

    </div>
  )
}

export default About
