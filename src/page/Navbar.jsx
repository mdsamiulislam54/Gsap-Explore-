import React, { useEffect, useRef, } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
const Navbar = () => {

  const mMenu = useRef();
  const mMenuBtn = useRef();
  const item = useRef();
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const liItems = item.current.childNodes;
   
    tl.current.to(mMenu.current, {
      right: 0,
      duration: 0.5,
    });
    tl.current.from(liItems, {
        opacity: 0,
        x: 150,
        stagger: 0.3,
        duration: 0.3,


      //      opacity: 0,
      //   scale: 0.5,
      //   y: 50,
      //   stagger: 0.2,
      //   duration: 0.5,
      //   ease: "back.out(1.7)",

      // y: -100,
      //   opacity: 0,
      //   stagger: 0.2,
      //   ease: "power3.out",
    });
  }, []);

  const handleMenu = () => {
    tl.current.play();
  };
  const handleMenuColse = () => {
    // tl.to(mMenu.current, {
    //   right: -500,
    // });
    tl.current.reverse();
  };

  return (
    <div className="relative ">
      <div className="w-10/12 mx-auto flex justify-between items-center py-5">
        <h4 className="text-3xl">Logo</h4>
        <button onClick={handleMenu} ref={mMenuBtn} className="cursor-pointer">
          <RiMenu2Fill size={30} />
        </button>
      </div>
      <div
        ref={mMenu}
        className=" bg-gray-200 text-black w-[500px]  absolute top-0  h-screen rsponsiveMenu "
      >
        <ul ref={item} className="p-10 space-y-16 text-3xl">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <button
          onClick={handleMenuColse}
          className="absolute top-5 right-8 bg-black text-white p-4 rounded-full cursor-pointer"
        >
          <IoMdClose size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
