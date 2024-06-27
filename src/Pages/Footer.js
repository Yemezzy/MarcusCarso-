import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#FDB84E] md:p-10 md:pb-5 p-5  text-black mt-10 md:mt-20'>
      <div className='grid md:grid-cols-3'>
        <section className=''>
            <p className='font-bold text-xl'>Message us:</p>
            <div className='flex md:mt-2 gap-5 font-semibold underline'>
                <a href=""><p>Telegram</p></a>
                <a href=""><p>Twitter</p></a>
                <a href=""><p>Email</p></a>
            </div>
            <p className='md:text-base text-sm md:pr-5 mt-1 '>For more information or to discuss how we can support your project, please get in touch with us.</p>
        </section>
        <section>
        <p className='font-bold text-xl mt-5 md:mt-0'>Services:</p>
            <div className='grid md:mt-2 mt-1 w-full grid-cols-2 md:grid-cols-3 text-sm md:gap-3 font-semibold'>
                <p>DEXTOOL TRENDING</p>
                <p>CEX LISTINGS</p>
            
                <p>TELEGRAM CALLS</p>
                <p>CMC/CG LISTING</p>
           
                <p>SHILLING SERVICES</p>
                <p>TRENDING BOTS</p>
            </div>
   
        </section>
        <section className='md:pl-5 mt-5'>
        <p className='font-bold text-xl'>Newsletter:</p>
        <div className='md:mt-2'>
<p>Subscribe to our newsletter!</p>
<div className='flex gap-2'>
<input type="text" className='border-2 px-3 border-black outline-none bg-transparent md:w-[60%] w-[65%] h-[35px] md:h-[30px]'/>
<button className='border-2 border-black outline-none font-semibold text-sm bg-black text-[#FDB84E] w-[30%] h-[35px] md:h-[30px]'>Submit</button>
</div>
        </div>
        </section>
      </div>

      <div className='text-center md:mt-10 mt-5 text-xs font-bold'>
<p>COPYRIGHT © 2020 – Marcus Carso</p>
      </div>
    </div>
  )
}

export default Footer
