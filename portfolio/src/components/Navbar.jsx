// import React, { useState } from 'react'
// import Logo from '../assets/logos.png'
// import sun from '../assets/sun.png'
// import moon from '../assets/moon.png'
// import { Menu, X } from 'lucide-react'
// import index from '../index.css'

// const Navbar = () => {
//     const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)


//     // const setDarkMode =() =>{
//     //     document.documentElement.classList.toggle('dark')
//     // }
//     // const setDarkMode =() =>{
//     //     document.querySelector("body").setAttribute("data-theme", "dark");
//     //     localStorage.setItem('theme', 'dark')
//     // }

//     // const setLightMode =()=>{
//     //    document.querySelector("body").setAttribute("data-theme", "light");
//     //    localStorage.setItem('theme', 'light')
//     // }

//     // const toggleTheme = (e) => {
//     //     if(e.target.checked) setDarkMode();
//     //     else setLightMode();
//     // }

//     // const theme = localStorage.getItem("theme")

//     // if(theme === 'dark'){
//     //   setDarkMode();
//     // }else{
//     //   setLightMode();
//     // }



//   return (
//     <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gray-500 px-4 lg:px-0'>
//       <div className=' max-w-7xl mx-auto flex h-14 items-center'>
//         <div className='md:mr-4 flex justify-between w-full'>
//             <a href="#" className='mr-6 flex items-center space-x-2 size-20'>
//                 <img src={Logo} alt="" className='w-36' />
//             </a>

//             {/* <div className='mr-12 flex items-center space-x-2 size-20'> */}
//                 {/* <img src={sun} alt="" className='w-6' onClick={setLightMode}/>
//                 <img src={moon} alt="" className='w-6' onClick={setDarkMode}/> */}
//                 {/* <input className='' type="checkbox" id='darkmode-toggle' onChange={toggleTheme} defaultChecked={theme === "dark"} />
              
//                 <lavel for='darkmode-toggle' className='flex items-center space-x-2'>
//                     <span>🌞</span>
//                     <span>🌛</span>
//                 </lavel>
//             </div> */}

//             <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
//                 <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
//                 <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
//                 <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
//                 <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
//             </nav>
//         </div>
//         <button className='inline-flex items-center justify-center rounded-md md:hidden'
//         // onclick={()=>setmMobileMenuOpen(preveState => !preveState)} 
//         onClick={()=>setmMobileMenuOpen(!mobileMenuOpen)}
//         >
//            <span className='sr-only'>Open main menu</span>
//            {mobileMenuOpen ? (
//             <X className='h-6 w-6' aria-hidden="true"/>
//            ):(
//             <Menu className='h-6 w-6' aria-hidden="true"/>
//            )}
//         </button>
//       </div>
//       {mobileMenuOpen && (
//         <div className='md:hidden'>
//             <div className='space-y-1 px-2 pb-3 pt-2'>
//                 <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>About</a>
//                 <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Project</a>
//                 <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Testimonials</a>
//                 <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Contact</a>
//             </div>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar





// import React, { useState, useEffect } from 'react'
// import Logo from '../assets/logos.png'
// import sun from '../assets/sun.png'
// import moon from '../assets/moon.png'
// import { Menu, X } from 'lucide-react'
// import './navbarrs.css'

// const Navbar = () => {


//     const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

//     const setDarkMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "dark");
//         localStorage.setItem('theme', 'dark')  //isme local storage me value store ho rhi h taki refresh kene pe dark mode hi rhe
//     }

//     const setLightMode = () => {
//         document.querySelector("body").setAttribute("data-theme", "light");
//         localStorage.setItem('theme', 'light')  //isme local storage me value store ho rhi h taki refresh kene pe light mode hi rhe
//     }

    
//     useEffect(() => {
//         const theme = localStorage.getItem("theme")//isme local storage se current value le rhe h aur uske anusar function chala rhe h
//         if (theme === 'dark') {
//             setDarkMode();
//         } else {
//             setLightMode();
//         }
//     }, [])

//     return (
//         <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gray-500 px-4 lg:px-0'>
//             <div className=' max-w-7xl mx-auto flex h-14 items-center'>
//                 <div className='md:mr-4 flex justify-between w-full'>
//                     <a href="#" className='mr-6 flex items-center space-x-2 size-20'>
//                         <img src={Logo} alt="" className='w-36' />
//                     </a>

//                     <div className='mr-12 flex items-center space-x-2 size-20'>
                    
//                     {theme === "light" ? (
//                             <img src={sun} alt="" className='w-6 cursor-pointer' onClick={setDarkMode} />
//                         ) : (
//                             <img src={moon} alt="" className='w-6 cursor-pointer' onClick={setLightMode} />
//                         )}
//                     </div>

//                     <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
//                         <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
//                         <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
//                         <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
//                         <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
//                     </nav>
//                 </div>
//                 <button className='inline-flex items-center justify-center rounded-md md:hidden'
//                     onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
//                 >
//                     <span className='sr-only'>Open main menu</span>
//                     {mobileMenuOpen ? (
//                         <X className='h-6 w-6' aria-hidden="true" />
//                     ) : (
//                         <Menu className='h-6 w-6' aria-hidden="true" />
//                     )}
//                 </button>
//             </div>
//             {mobileMenuOpen && (
//                 <div className='md:hidden'>
//                     <div className='space-y-1 px-2 pb-3 pt-2'>
//                         <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>About</a>
//                         <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Project</a>
//                         <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Testimonials</a>
//                         <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Contact</a>
//                     </div>
//                 </div>
//             )}
//         </header>
//     )
// }

// export default Navbar




import React, { useState, useEffect } from 'react'
import Logo from '../assets/logos.png'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import { Menu, X } from 'lucide-react'
import './navbarrs.css'


const Navbar = () => {
    const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    const toggleTheme = () => {
        if (theme === "light") {
            setDarkMode();
        } else {
            setLightMode();
        }
    }

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark')
        setTheme("dark")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem('theme', 'light')
        setTheme("light")
    }

    useEffect(() => {
        if (theme === 'dark') {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [theme])

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gray-500 px-4 lg:px-0'>
            <div className=' max-w-7xl mx-auto flex h-14 items-center'>
                <div className='md:mr-4 flex justify-between w-full'>
                    <a href="#" className='mr-6 flex items-center  space-x-2 size-20'>
                        <img className='w-36 cursor-pointer' src={Logo} alt="" />
                    </a>

                    <div className='mr-8 flex items-center space-x-2 size-20'>
                        <img src={theme === "light" ? sun : moon} alt="" className='w-6 cursor-pointer rounded-full' onClick={toggleTheme} />
                    </div>

                    <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                        <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground/60'>About</a>
                        <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground/60'>Projects</a>
                        <a href="#testimonials" className='transition-colors hover:text-foreground/80 text-foreground/60'>Testimonials</a>
                        <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground/60'>Contact</a>
                    </nav>
                </div>                          
                <button className='inline-flex items-center justify-center rounded-md md:hidden'
                    onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className='sr-only'>Open main menu</span>
                    {mobileMenuOpen ? (
                        <X className='h-6 w-6' aria-hidden="true" />
                    ) : (
                        <Menu className='h-6 w-6' aria-hidden="true" />
                    )}
                </button>   
            </div>
            {mobileMenuOpen && (
                <div className='md:hidden'>
                    <div className='space-y-1 px-2 pb-3 pt-2'>
                        <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>About</a>
                        <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Project</a>
                        <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Testimonials</a>
                        <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-500 hover:text-gray-900'>Contact</a>
                    </div>
                </div>
            )}
        </header>


    )
}

export default Navbar