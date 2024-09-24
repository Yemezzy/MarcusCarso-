import React from 'react'
import About from './About'
import Services from './Services'
import { FaMailBulk, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import Partners from './Partners'
import Footer from './Footer'

const Firstpage = () => {
  return (
    <div className=''>
      <nav className='md:p-10 fixed top-0 w-full p-5 pb-5 bg-black flex justify-between items-center'>
        <img src="/1x/Asset 4.png" alt="" className='w-20'/>

<div className='md:w-[50%] flex justify-end items-center bbn'>

        <ul className='md:flex hidden w-[80%]  gap-2 md:mr-5 text-lg justify-between'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Partners</li>
            <li>Trending Bots</li>
        </ul>
            <button className='font-semibold border-[#FDB94D] text-sm md:text-base md:w-[20%] px-5 py-2 border-2'>Contact us</button>
</div>


      </nav>




      <div className='pt-[15%] pt pb-10'>
        <div className='md:grid grid-cols-2'>
        <section className='md:p-10 mt-10 md:mt-0 p-5 md:pl-20'>
                <p className='md:text-6xl text-4xl font-bold'>
                    DO YOU HAVE A CRYPTO PROJECT?
                </p>
                <p className='text-3xl font-bold'>
                    Are you in search of investors or marketing services?
                </p>
                <p className='text-2xl font-bold'>
                MarcusCarso Got you covered..
                </p>
            
            <ul className='grid md:grid-cols-4 grid-cols-3 md:text-base text-xs text-[#FDB84E] list mt-2 md:mt-5'>
<li>Exchange Listing</li>
<li>CMC/CG Listing</li>
<li>Dextool Trending</li>
<li>Telegram Calls</li>
<li>Promotions</li>
            </ul>
       <div className='grid grid-cols-3 gap-2 md:gap-5'>
 
 
     
       <a href="http://t.me/MarcusCaros" className='flex gap-2 md:gap-3 border items-center hover:bg-[#FDB84E] hover:text-black transition-all mt-3 md:mt-5 justify-center border-[#FDB84E] text-[#FDB84E] md:text-xl py-2 md:py-3'>
       <FaTelegramPlane className=' md:text-2xl'/>
           Telegram
            </a>
     
       <a href="http://t.me/MarcusCaros" className='flex gap-2 md:gap-3 border items-center hover:bg-[#FDB84E] hover:text-black transition-all mt-3 md:mt-5 justify-center border-[#FDB84E] text-[#FDB84E] md:text-xl py-2 md:py-3'>
       <FaTwitter className=' md:text-2xl'/>
           Twitter
            </a>
     
       <a href="http://t.me/MarcusCaros" className='flex gap-2 md:gap-3 border items-center hover:bg-[#FDB84E] hover:text-black transition-all mt-3 md:mt-5 justify-center border-[#FDB84E] text-[#FDB84E] md:text-xl py-2 md:py-3'>
     
       <FaMailBulk className=' md:text-2xl'/>
           Contact
            </a>
  

       </div>
            </section>

            <section className='mt-10'>
                <img src="https://www.shutterstock.com/image-illustration/top-3-cryptocurrency-tokens-explosion-600nw-2363977837.jpg" alt="" />
            </section>
        </div>
      </div>
      <About/>
      <Services/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Firstpage
