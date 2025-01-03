import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


export default function Navbar() {
    return (
        <div>
            <div className='grid xl:grid-cols-1 grid-cols-1'>
                <div className='p-5'>
                    <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-yellow-400 '>
                        < div className='flex justify-between items-center'>
                            <div className='flex justify-items-center items-center gap-2 '>
                                {/*Logo*/}
                                <FaHamburger className="w-6 h-6 text-white hover:text-yellow-400" />

                                {/*search icon*/}
                                <div style={{position:'relative'}}>
                                    <input className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                                    placeholder="Search for your favourite items"/>
                                <FaSearch className="text-black w-5 h-5 text-line-300 absolute right-3 top-1/2 transform -translate-y-1/2"/>
                                </div>
                            </div>
<div className="flex-justify-center items-center gap-5">
<FaBolt className="flex-justify-items-center w-5 h-5 lg:block md:block" />
<p className="text-bold text-white text-sm hidden lg:block md:block">Order Now and get it within
    <br></br>
    <span>15 minutes!</span>
</p>
</div>

{/*cart icon*/}
<FaShoppingCart className="inline-block w-8 h-12 rounded-full ring-2 ring-white hover:ring-yellow-500" />
 <img 
 className="inline-block w-8 h-8 rounded-full ring-2 ring-white hover:text-yellow-500 gap-5"
 src="myimage.jpeg"
 alt="user avtar"/>
 



                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}