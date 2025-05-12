import gsap from "gsap";
import React, { useRef, useState } from "react";

const Svganimation = () => {
  const [isActive, setIsActive] = useState(false);
  let pathInit = "M 10 100 Q 600 100 1180 100 ";
  const finalPath = "M 10 100 Q 600 100 1180 100 ";
  const pathRef = useRef();

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseMove = (e) => {
    if (isActive) {
      pathInit = `M 10 100 Q ${e.clientX} ${e.clientY} 1180 100`;

      gsap.to(pathRef.current, {
        attr: { d: pathInit },
        duration: 0.5,
        ease: "elastic.out"
      });
    }
  };
  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out"
    });
  };

  return (
    <div className="w-10/12 mx-auto">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-crosshair"
      >
        <svg width={1200} height={400} >
          <path
            ref={pathRef}
            d={` M 10 300 Q 600 100 1180 300 `}
            stroke="red"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default Svganimation;
