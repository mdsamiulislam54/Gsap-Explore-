import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { RiFacebookBoxFill } from 'react-icons/ri'

const ScrollTextAnimation = () => {
  const container = useRef()
  const [xPos, setXPos] = useState(0)

  useEffect(() => {
    const allDiv = container.current.childNodes

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        setXPos((prev) => prev - 300) 
      } else {
        setXPos((prev) => prev + 300) 
      }
    }

    window.addEventListener('wheel', handleWheel)

    // animation
    gsap.to(allDiv, {
      x: () => xPos,
      duration: 1,
      ease: 'power2.out'
    })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [xPos])

  return (
    <div>
      <div className='w-10/12 mx-auto h-screen mt-52 overflow-hidden'>
        <div ref={container} className='flex *:h-[200px] *:w-[300px] gap-4'>
          {[...Array(10)].map((_, index) => (
            <div key={index} className='flex gap-2 flex-shrink-0 items-center justify-center bg-orange-200'>
              <h1>SHAMIUL ISLAM</h1>
              <RiFacebookBoxFill size={32} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollTextAnimation
