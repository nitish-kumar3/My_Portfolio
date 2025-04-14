import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className=' py-4 relative'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; 2025 Nitish Kumar. All rights reserved</p>
        <h2 className='text-xl font-bold mb-3 text-green-700 underline decoration-4 underline-offset-4 decoration-red-500'>
          <a href="#contact"> Get in Contact</a></h2>
        <p className='text-sm '>Follow me on social media</p>
        <div className='flex space-x-4 ml-142 mt-3'>
                        <a href="https://www.facebook.com/profile.php?id=100047232771418" className='text-foreground/60 hover:text-foreground/80 cursor-pointer'>
                        <img src={facebook} alt="" className='h-6 w-6'/></a>
                        <a href="https://www.instagram.com/prajapati_nitish_123/" className='text-foreground/60 hover:text-foreground/80 cursor-pointer'>
                        <img src={instagram} alt="" className='h-6 w-6'/></a>
                        <a href="https://www.linkedin.com/in/nitish-kumar-531352270/" className='text-foreground/60 hover:text-foreground/80 cursor-pointer'>
                        <img src={linkedin} alt="" className='h-6 w-6'/></a>
                      </div>
      </div>

    </footer>
  )
}

export default Footer