import React from "react";



const products = [
    {
        id: 1,
        title: "American Classic Cheese Burger",
        category: "Fixing",
        price: "780",
        image: "Cheeseburger.jpeg",
        bgColor: "bg-amber-500"
    },
    {
        id: 2,
        title: "Loaded Pizza Fries",
        category: "Fixing",
        price: "650",
        image: "frenchfries.jpeg",
        bgColor: "bg-amber-500"
    },
    {
        id: 3,
        title: "Fish Burger",
        category: "Fixing",
        price: "1180",
        image: "fishburger.jpeg",
        bgColor: "bg-amber-500"
    },
]

export default function Productlist() {
    return (
        <div className="p-1 flex flex-wrap items-center justify-center mb-4">
            {products.map((product) => (
                <div key={product.id} className={`flex shrink-0 m-6 relative overflow-hidden${product.bgColor}rounded-lg shadow-lggroup max-w-sm`}>
                    <svg className="absolute button-0 left-0 mb-8 scale-[1.65] transition-transform" viewBox="0 0 375 283" fill='none '>
                        <rect x="159.52" y="152" height="152" width="152" rx="8" transform="rotate(-45 159.52 175)" fill="red" />
                        <rect y="107.48" height="152" width="152" rx="8" transform="rotate(-45 0 107.28)" fill="yellow" />

                    </svg>\

                    <div className="relative pt-30 px-10 flex items-center justify-center group:hover:scale-110 transition-transform">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "relative-gradient(block,transparent 50%", transform: "rotate3d(0,0,1,20deg) scale3d(1,0.6,1", opacity: 0.2 }}>

                        </div>

                        <img className="relative w-50" src={product.image} alt={product.title} />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">{product.category}</span>

                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">{product.title}</span>
                            <span className="block bg-white rounded-full text-orange-500 text-xs font-semibold px-3 py-2 leading-none items-center">{product.price}</span>
                        </div>

                    </div>


                </div>
            ))}







        </div>
    )
}