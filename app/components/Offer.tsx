"use client"
import React from "react";

type Offer={
    title:string,
    description:string,
    
}

const Specialoffer:React.FC=()=>{
const offers:Offer[]=[
    {
       title: 'Dhamaka deal',
        description: '12:00-6:30pm upto 65% discount'
},
{
    title: 'All in one',
     description: 'Get 20% discount on ordering 1 item from each category'

},
{
    title: 'Family offer',
     description: 'Get a chance tow win an Umrah ticket if you order our exclusive deals'
}

 ];
 
 const handleOfferClick=(description:string)=>{
    alert(description)
 }

return(
    <section className='py-10'>
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Special Offer</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
                {offers.map((offer,index)=>(
                    <button key={index}
                    onClick={()=>handleOfferClick(offer.description)}
                    className="bg-white shadow-lg rounded-lg text-center hover:bg-yellow-300 transition duration-300 transform hover:scale-105 ">
                        <h3 className="text-2xl font-semibold text-amber-500">{offer.title}</h3>
                        <p className="text-red-700 mt-3 font-bold">{offer.description}</p>



                    </button>
                ))}

            </div>
        </div>

    </section>

)


}
export default Specialoffer