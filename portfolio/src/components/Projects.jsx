import React from 'react'
// import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
        //   image: Portfolio,
          live: "",
          github: ""
        },
        {
          title: 'Blogs-App',
          desc: 'I make this Blogs-App using MERN Stack. where you can create your own blog and read other blogs. You can also like and comment on other blogs. ',
          image: SpicyBites,
          live: "",
          github: "https://github.com/nitish-kumar3/Blog-App"
        },
        {
          title: 'YouTube Clone',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Youtube,
          live: "",
          github: ""
        },
        {
          title: 'Chat-App',
          desc: 'The objective of our project is to build a chatting system to facilitate the communication between two or more clients to obtain an effective channel among the clients themselves.',
          image: Webelite,
          live: "",
          github: "https://github.com/nitish-kumar3/Chat-App"
        },
        {
          title: 'Course-Selling-App',
          desc: 'This is a Course Selling-Website. where you can register and sell Your Course .',
          image: Supercar,
          live: "",
          github: "https://github.com/nitish-kumar3/Course-Selling-App"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects