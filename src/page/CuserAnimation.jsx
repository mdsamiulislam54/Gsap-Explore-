import gsap from "gsap";
import React, { useRef } from "react";

const CuserAnimation = () => {
  const cuserRef = useRef();
  
  const mainRef = useRef()
  const handleMove = (e)=>{
    gsap.to(cuserRef.current,{
        x:e.clientX,
        y:e.clientY,
        duration:2,
        ease:'back.out'
    })
  }
  return (
    <div className="relative">
      <div ref={mainRef} 
      onMouseMove={handleMove}
      className="bg-gray-500 h-screen"
      >
        <div
          ref={cuserRef}
          className="w-10 h-10 bg-white rounded-full fixed "
        ></div>
        
      </div>
    </div>
  );
};

export default CuserAnimation;
