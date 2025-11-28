import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
// import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'
// import './navbarrs.css'


const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 border-b border-amber-750 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black-400 sm:text-4xl'>Hi, I'm Nitish Kumar</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            A Full-Stack Developer with expertise in web development,Machine learning, AI and the MERN stack.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl yellow-400 font-semibold'>My Journey</h3>
                                <p className='mt-4 text-gray-500 text-lg'>
                                    I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built Projects such as a full-stack Chat-App website , Blogs-App website , Course-Selling Website and even a Youtube clone. My projects demonstrate my ability to integrate poweful backend solutions with sleek, user-friendly frontend designs. 
                                    and I have done some project in Al and Machine learning. I have built Projects in Machine Learning such as a  Spam-detector , Face Security Alarm .  I am always eager to learn new technologies and improve my skills. I am currently looking for opportunities to work on challenging projects that allow me to grow as a developer and contribute to innovative solutions.
                                </p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold text-blue-800'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReduxLogo} alt="" className='w-8' />
                                        <span className='font-semibold'>Redux</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NodeLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        {/* <img src={Mongodb} alt="" className='w-10' /> */}
                                        <span className='font-semibold'>Mongodb</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Express} alt="" className='w-10' />
                                        <span className='font-semibold'>Express Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        {/* <img src={NextJs} alt="" className='w-9' /> */}
                                        <span className='font-semibold'>Next Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        {/* <img src={NextJs} alt="" className='w-9' /> */}
                                        <span className='font-semibold'>Machine Learning</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        {/* <img src={NextJs} alt="" className='w-9' /> */}
                                        <span className='font-semibold'>AI</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        {/* <img src={NextJs} alt="" className='w-9' /> */}
                                        <span className='font-semibold'>OpenCV</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-500'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                            Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. i have knowledge of Javascript, MERN Stack development, Wordpress, AI and Machine Learning. 
                        </p>
                        
                        <h3 className='text-2xl font-semibold text-gray-500 mt-4 text-pink-500'>Check Out My</h3>
                        <div className='flex gap-4 mt-4'>
                        <div className='border border-red-700 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-pink-700'>
                        <a href="https://github.com/nitish-kumar3"><span className='font-semibold'>Github</span></a> 
                        </div>
                        <div className='border border-red-700 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-pink-700'>
                        <a href="https://www.linkedin.com/in/nitish-kumar-531352270/"><span className='font-semibold'>Linkedin</span></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
