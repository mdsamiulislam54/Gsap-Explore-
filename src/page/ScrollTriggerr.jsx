import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerr = () => {
    const box1 = useRef()
    const box2 = useRef()
    const box3 = useRef()

useEffect(()=>{
    gsap.from(box1.current,{
        scale:0,
        duration:2,
        delay:1

    })
    gsap.from(box2.current,{
         scale:0,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:box2.current,
            markers: true,
             scrub: 1, 
            
        }
    })
    gsap.from(box3.current,{
         scale:0,
        duration:2,
        delay:1,
         scrollTrigger:{
            trigger:box3.current,
            markers: true,
            scrub: 1, 
            
        }
    })
},[])
  return (
    <div>
        <div className='h-screen flex justify-center items-center bg-blue-300'>
            <div ref={box1} className=" w-50 h-50 bg-red-500 "></div>
        </div>
        <div className='h-screen flex justify-center items-center bg-blue-500'>
            <div ref={box2} className=" w-50 h-50 bg-red-600 "></div>
        </div>
        <div className='h-screen flex justify-center items-center bg-blue-900'>
            <div ref={box3} className=" w-50 h-50 bg-red-900 "></div>
        </div>
    </div>
  )
}

export default ScrollTriggerr