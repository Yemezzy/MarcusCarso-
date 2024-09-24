import React from 'react'
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa'

const About = () => {
  return (
    <div className='md:mt-28 mt-5 px-5 md:px-10'>
      <p className='md:text-5xl text-3xl text-[#118A92] font-bold'>
        <span className=''>About</span> Us
      </p>
      <p className='md:mt-5 mt-2 text-sm md:text-lg'>
      MarcusCarso is a specialized marketing-incubator and verified listing agency dedicated to the cryptocurrency sector. 
      Our mission is to support crypto projects in achieving their fundraising goals during Initial Exchange Offerings (IEOs) and Initial DEX Offerings (IDOs) through comprehensive strategic advisory and market-making services.
      </p>
      <p className='md:mt-5 mt-2 text-sm md:text-lg'>At MarcusCarso, we understand that every project has unique requirements and we cater to you based on your specific marketing budget and needs.
       Our approach involves taking the time to thoroughly analyze and understand your project and its goals.
      </p>

      <p className='md:text-xl font-semibold pt-3 md:pt-5 pb-3'>
      Our Commitment:
      </p>
      <p className='text-sm md:text-lg'> We are dedicated to the success of your crypto project. We work closely with you to understand your unique needs and tailor our services to help you achieve your fundraising and market goals. 
      Our commitment to excellence and strategic approach ensures that you receive the best possible support throughout your project's lifecycle.
      </p>
      <p className='md:mt-5 mt-2 text-sm md:text-lg'>For more information or to discuss how we can support your project, please get in touch with us.
       Let MarcusCarso be your partner in navigating the dynamic and evolving crypto landscape.
      </p>
      <div className='md:mt-10 mt-5 gap-5 flex justify-center text-3xl md:text-5xl text-[#FDB94D]'>
        <a href="http://t.me/MarcusCaros">
        <FaTelegramPlane className=''/>
        </a>
        <a href="http://t.me/MarcusCaros">
        <FaTwitter/>
        </a>
      </div>
    </div>
  )
}

export default About
