import React , {useState } from 'react'


import spring from '../../public/spring.svg'
import java from '../../public/java.svg'
import react from '../../public/react.svg'
import css from '../../public/css.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import firebase from '../../public/firebase.svg'
import tailwind from '../../public/tailwind.svg'
import rublet from '../../public/video/Rublet.mp4'
export default function Project({showPj}) {
  
  return (
    <>
      <div className='p-1 py-2 grid grid-cols-1  my-4 sm:px-4 md:grid-cols-2 ' >

        <a href="https://github.com/Kaungsett45/Rublet"  target="_blank" className='my-1 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col justify-between items-center  drop-shadow-2xl '>
            <video src={rublet} autoPlay loop muted preload="auto" className='w-full rounded-lg' />
            <h4 className='text-2xl  xs:text-4xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                Rublet
            </h4>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                <img src={java} alt="tailwind" className='w-6 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
            </div>

        </a>
        <a href="https://github.com/Kaungsett45/Rublet"  target="_blank" className=' my-1 backdrop-blur-sm rounded-lg px-4 py-2 flex justify-between items-center  drop-shadow-2xl'>
            <video src={rublet} autoPlay loop muted preload="auto" className='w-full rounded-lg' />
            <h4 className='text-2xl  xs:text-4xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                Quizzi
            </h4>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                <img src={java} alt="tailwind" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
            </div>
        </a>
        <a href="https://github.com/Kaungsett45/Rublet"  target="_blank" className='my-1 backdrop-blur-sm rounded-lg px-4 py-2 flex justify-between items-center  drop-shadow-2xl'>
            <video src={rublet} autoPlay loop muted preload="auto" className='w-full rounded-lg' />
            <h4 className='text-2xl  xs:text-4xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                Quotgenerator
            </h4>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                <img src={java} alt="tailwind" className='w-6 h-5   sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
            </div>
        </a>
        <a href="https://github.com/Kaungsett45/Rublet"  target="_blank" className=' my-1 backdrop-blur-sm rounded-lg px-4 py-2 flex justify-between items-center  drop-shadow-2xl'>
            <video src={rublet} autoPlay loop muted preload="auto" className='w-full rounded-lg' />
            <h4 className='text-2xl  xs:text-4xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                Voting
            </h4>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2 '>
                <img src={java} alt="tailwind" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6'  />
            </div>
        </a>
          
    
           </div>
        
   
      </>
  )
}
