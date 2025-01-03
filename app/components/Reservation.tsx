import React from "react";

const Reservation=()=>{


    return(
        <section className="bg-gradient-to-r from-black to-yellow-400 py-10">

<div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 text-white">Make a Reservation</h2>
    <form className="max-w-md mx-auto">
        <div className="mb-4 text-white">
            <input type="text"
            placeholder="Your name"
            className="w-full p-3 border border-amber-300 rounded-md"
            required/>

            
        </div>

        <div className="mb-4">
            <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-amber-300 rounded:md"
            required/>

        </div>

        <div className="mb-4">
            <input
            type="date"
            className="w-full p-3 border border-amber-300 rounded:md"
            required/>

        </div>

        <div className="mb-4">
            <input
            type="time"
            className="w-full p-3 border border-amber-300 rounded:md"
            required/>

        </div>

        <div>
            <button className="bg-red-700 text-white py-2 px-4 rounded:md hover:bg-amber-500">
                Reserve table
            </button>
        </div>






    </form>
</div>

        </section>
       
    )

}
export default Reservation;