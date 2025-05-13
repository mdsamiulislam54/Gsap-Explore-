import gsap from "gsap";

import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);
const Oriange = () => {
  const fanta = useRef();
  const lemonSlice = useRef();
  const leaf1 = useRef();
  const orang = useRef();
  const container = useRef()
 useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: fanta.current,
      start: "top 0%",
      end: "bottom 25%",
       scrub: 1,
      markers: true
    }
  });

 tl.to(fanta.current, {
    y: 700,
    x: -450,
    ease: "power1.inOut"
  })
  .to(lemonSlice.current, {
    y: 700,
    x: -450,
    ease: "power1.inOut"
  }, "<") 
  .to(orang.current, {
    y: 700,
    x: -350,
    ease: "power1.inOut"
  }, "<")
  .to(leaf1.current, {
    y: 600,
    x: 1150,
    ease: "power1.inOut"
  }, "<");

}, []);


  return (
    <div>
      <nav className="bg-gradient-to-r to-orange-500 bg-orange-400 sticky top-0 left-0 w-full z-100">
        <div className="conatiner w-10/12 mx-auto py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Drink</h2>
          <ul className="flex gap-8">
            <li className="text-xl font-bold">Home</li>
            <li className="text-xl font-bold">Orange</li>
            <li className="text-xl font-bold">Soda</li>
            <li className="text-xl font-bold">Coca cola</li>
            <li className="text-xl font-bold">Pepsi</li>
          </ul>
        </div>
      </nav>

      <div ref={container} className=" relative h-screen w-full bg-orange-400 banner">
        <img
          ref={fanta}
          className="fanta"
          src="https://camperdowncellars.com.au/cdn/shop/products/394-1-1-1_clipped_rev_2_600x.png?v=1662003985"
          alt=""
        />
        <img
          ref={orang}
          className="lemon"
          src="https://parspng.com/wp-content/uploads/2022/05/orangepng.parspng.com-7.png"
          alt=""
        />
        <img
          ref={lemonSlice}
          className="lemon-cut"
          src="https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657_640.png"
          alt=""
        />
        <h1 className="text-[20vw] font-bold tracking-wide">FANTA</h1>

        <img
          ref={leaf1}
          className="leaf-1"
          src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-tea-leaf-png-png-image_10117348.png"
          alt=""
        />
        <img
          className="leaf-2"
          src="https://static.vecteezy.com/system/resources/previews/009/306/540/non_2x/green-leaf-of-palm-tree-on-transparent-background-file-png.png"
          alt=""
        />
      </div>
      <div className="min-h-screen w-full bg-amber-800">
        <div className="flex justify-between items-center w-10/12 mx-auto py-10 ">
          <div className="w-4/12 flex justify-center items-center mt-[60vh]">
            <svg
              className="w-60"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ff8904"
                d="M32.8,-50.2C44.6,-43.4,57.8,-37.9,68.7,-27.5C79.5,-17,88,-1.6,81.4,8.4C74.8,18.4,53.2,22.9,40.1,30.7C27,38.4,22.4,49.4,15.6,49.7C8.9,50.1,0.1,39.8,-12.3,37.9C-24.7,36,-40.7,42.6,-55.5,40C-70.3,37.4,-83.9,25.7,-87.5,11.6C-91.2,-2.6,-84.8,-19.2,-75.6,-32.5C-66.4,-45.9,-54.4,-55.9,-41.3,-62.1C-28.2,-68.3,-14.1,-70.7,-1.8,-67.9C10.5,-65,21,-57,32.8,-50.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="w-6/12">
            <h2 className="text-xl font-bold mb-5">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dicta
              saepe tempore ipsa libero, vero praesentium pariatur minima
              perferendis culpa laudantium voluptatum nemo placeat itaque
              dolorum ex, modi reiciendis recusandae commodi molestias fugiat?
              Voluptate ducimus numquam est rerum dolores impedit autem sequi!
              Incidunt quia sapiente amet illo tempore officiis autem saepe, eum
              nemo unde. Quas exercitationem a, mollitia cum modi non earum
              tempore voluptates dolor tenetur sint molestiae iusto quia
              deleniti velit libero. Reiciendis perspiciatis dolore distinctio
              tenetur optio officia saepe alias atque maxime quae earum quidem,
              tempore ducimus unde vero voluptate asperiores quisquam quis
              eveniet ullam, accusantium corporis quo?
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-orange-400 ">
        <div className="flex justify-between items-center gap-4 pt-24 w-10/12 mx-auto">
          <div className="relative z-20 bg-white py-5 flex justify-center w-3/12 h-[300px]">
            <img
              className="w-[80%] "
              src="https://www.shahshalalfood.com/wp-content/uploads/2023/12/fanta-can.png"
              alt=""
            />
            <img
              className="lemon-cut-card w-[50%] absolute -top-14 left-[24%] -z-1"
              src="https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657_640.png"
              alt=""
            />
          </div>
          <div className="relative z-10 bg-white py-5 flex justify-center  w-3/12 h-[300px] ">
            <img
              className="lemon-cut-card w-[50%] absolute -top-14 left-[24%] -z-1"
              src="https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657_640.png"
              alt=""
            />
          </div>
          <div className="relative z-10 bg-white py-5 flex justify-center  w-3/12 h-[300px]">
            <img
              className="w-[67%]"
              src="https://sweetizuk.co.uk/wp-content/uploads/2022/05/Fanta-Grape.png.webp"
              alt=""
            />
            <img
              className="lemon-cut-card w-[42%] absolute -top-14 right-[31%] -z-1 "
              src="https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657_640.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oriange;
