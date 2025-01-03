import React from "react";

export default function Banner(){
    return(
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-yellow-500 font-sans px-6 py-12 mb-7">
            <div className="absolute inset-0 opacity-20 ">
                <img src="Fastfood.avif"
                alt="Delicious fast food items"
                className="w-full h-full object-cover"/>

            </div>

            <div className="relative z-10 container mx-auto flex flex:col justify-center items-center text-center">
               <h2 className="text-white sm:text-5xl hover:text-orange-500 font-bold mb-4 animate-fade-in-out"> Discover our menu</h2>
               <p className="text-white text-lg text-center mt-12 mr-10 max-w-xl">
                Exclusive discount on New year!
               </p>

               <button
               type="button"
               className="hover:text-orange-500  text-lg text-white font-semibold py-3 px-6 rounded-full bg-red-500 transition-duration-300">
                Exciting Deals at our new Launch!


                </button>
               
            
            
            </div>
        </div>
    )
}