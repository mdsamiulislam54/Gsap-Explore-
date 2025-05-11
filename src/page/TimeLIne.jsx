import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const TimeLIne = () => {
    const container = useRef()
    const item1 = useRef()
    const item2 = useRef()
    const item3 = useRef()
    const item4 = useRef()
    const item5 = useRef()

    useEffect(()=>{
        const tl = gsap.timeline();
        tl.from(container.current,{
            y:-70,
            opacity:0,
            duration:1,
            delay:0.3,
          
        })
        tl.from([item1.current,item2.current,item3.current,item4.current,item5.current],{
            y:-20,
            opacity:0,
            duration:1,
            stagger:1
        })
      
    },[])




  return (
    <div className='relative'>
    <nav ref={container} className='bg-gray-600 sticky top-0 left-0 w-full '>
        <div className='flex justify-between items-center w-10/12 mx-auto p-4 '>
            <h3 className='text-xl font-bold'>My App</h3>
            <ul className='flex items-center gap-10'>
                <li ref={item1} className='text-xl font-bold'>Home</li>
                <li  ref={item2} className='text-xl font-bold'>About</li>
                <li ref={item3} className='text-xl font-bold'>Appointment</li>
                <li  ref={item4}className='text-xl font-bold'>Contact</li>
                <li  ref={item5}className='text-xl font-bold'>Blog</li>
            </ul>
        </div>
    </nav>
 
    </div>
  )
}

export default TimeLIne