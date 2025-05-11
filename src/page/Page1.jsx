import gsap from "gsap";

import { useEffect, useRef } from "react";

const Page1 = () => {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
    const h2Ref1 = useRef();
  const h2Ref2 = useRef();
  const h2Ref3 = useRef();

  useEffect(() => {
    gsap.from(box1.current, {
      x: 1000,
      y:100,
      duration: 3,
      delay: 0.5,
      repeat:-1,
      yoyo:true,
      backgroundColor:'blue',
      rotate:360,
      borderRadius:'50%'
    });
    gsap.to(box2.current, {
      x: 1000,
      duration: 3,
      delay: 0.5,
       repeat:-1,
      yoyo:true,
          borderRadius:'50%'
    });
    gsap.from(box3.current, {
        x:1000,
        y:-100,
      duration: 3,
      delay: 0.5,
      repeat:-1,
      yoyo:true,
       backgroundColor:'green',
      rotate:360
    });
    gsap.from([h2Ref1.current,h2Ref2.current,h2Ref3.current],{
        color:'red',
       stagger:-1,
       opacity:0,
        y:30,
        duration:2,
        delay:0.5,
        repeat:-1,
        yoyo:true
    })
  }, []);

  return (
    <div className="container">
      <div ref={box1} className="box1">
        Box1
      </div>
      <div ref={box2} className="box2">
        Box2
      </div>
      <div ref={box3} className="box3">
        Box3
      </div>

      <div >
       <h2 ref={h2Ref1}>My name is md shamiul islam</h2>
      <h2 ref={h2Ref2}>My name is md shamiul islam</h2>
      <h2 ref={h2Ref3}>My name is md shamiul islam</h2>
      </div>
    </div>
  );
};

export default Page1;
