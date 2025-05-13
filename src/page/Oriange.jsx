import React from 'react'

const Oriange = () => {
  return (
    <div>
        <nav className='bg-gradient-to-r to-orange-500 bg-orange-400 sticky top-0 left-0 w-full z-100'>
            <div className="conatiner w-10/12 mx-auto py-4 flex justify-between items-center">
                <h2 className='text-2xl font-bold'>Drink</h2>
                <ul className='flex gap-8'>
                    <li className='text-xl font-bold'>Home</li>
                    <li className='text-xl font-bold'>Orange</li>
                    <li className='text-xl font-bold'>Soda</li>
                    <li className='text-xl font-bold'>Coca cola</li>
                    <li className='text-xl font-bold'>Pepsi</li>
                </ul>
            </div>
        </nav>

        <div className=' relative h-screen w-full bg-orange-400 banner'>
            <img className='fanta' src="https://camperdowncellars.com.au/cdn/shop/products/394-1-1-1_clipped_rev_2_600x.png?v=1662003985" alt="" />
            <img className='lemon' src="https://parspng.com/wp-content/uploads/2022/05/orangepng.parspng.com-7.png" alt="" />
            <img className='lemon-cut' src="https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657_640.png" alt="" />
            <h1 className='text-[20vw] font-bold tracking-wide'>FANTA</h1>

            <img  className='leaf-1' src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-tea-leaf-png-png-image_10117348.png" alt="" />
            <img className='leaf-2' src="https://static.vecteezy.com/system/resources/previews/009/306/540/non_2x/green-leaf-of-palm-tree-on-transparent-background-file-png.png" alt="" />
        </div>
    </div>
  )
}

export default Oriange