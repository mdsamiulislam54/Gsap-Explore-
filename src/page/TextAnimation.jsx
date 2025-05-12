import gsap from "gsap";
import React, { useEffect, useRef,  } from "react";

const TextAnimation = () => {

  const textConatiner = useRef();
 

  useEffect(()=>{
     const text = textConatiner.current.childNodes;
     gsap.from(text,{
         y:300,
         display:'inline-block',
        opacity:0,
        duration:0.8,
        delay:0.5,
        stagger:0.15,
        repeat:-1,
       
     })
  },[])

 
  return (
    <div className="flex justify-center items-center  w-10/12 mx-auto mt-[10%]">
      <div
        ref={textConatiner}
        className=" text-[300px] p-4 overflow-hidden"
      >
        <span>S</span>
        <span>H</span>
        <span>A</span>
        <span>M</span>
        <span>I</span>
        <span>U</span>
        <span>L</span>
      </div>
    </div>
  );
};

export default TextAnimation;
