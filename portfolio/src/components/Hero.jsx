import React from 'react'
import heros from '../assets/heros.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'
import cv from '../assets/cv.jpg'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Nitish <span className='text-red-500'>Kumar</span></h1>
               <p className='md:text-2xl text-xl mb-4 font-bold'>Web Developer</p>
               <p className='mb-4'>I'm a passionate web developer with expertise in React, Nodejs,Express, and Modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
               <div className='flex gap-4'>
               <button className='bg-black text-white border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'><a href={cv} download target='_blank'>Download CV</a></button>
               <a href="#contact">
               <button className='bg-black text-white border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 cursor-pointer'>Contact Me</button></a>
               </div>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={heros} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'> 
        <a href="https://www.facebook.com/profile.php?id=100047232771418">
        <img src={facebook} alt="" className='w-20 cursor-pointer'/></a>

        <a href="https://www.instagram.com/prajapati_nitish_123/">
        <img src={instagram} alt="" className='w-20 cursor-pointer'/></a>

        <a href="#">
          <img src={twitter} alt="" className='w-20 cursor-pointer'/></a>

        <a href="https://www.linkedin.com/in/nitish-kumar-531352270/">
        <img src={linkedin} alt="" className='w-20 cursor-pointer'/></a>
        
      </div>
    </section>
  )
}

export default Hero