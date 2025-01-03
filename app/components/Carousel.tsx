import React from "react";

export default function Carousel() {
    return (
        <div>
            <section className="bg-gradient-to-r from-black to-yellow-500">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid cols-2 md:grid cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-yellow-500 h-auto md:h full flex flex-col">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="frenchfries.jpeg"
                                    alt="Loaded fries"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105
                            transition-transform duration-500 ease-in-out"/>

                                <div className="absolute inset-0">

                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">Classsic Bites</h3>

                            </a>
                        </div>

                        <div className="col-span-2 sm:col-span-2 bg-gradient-to-r from-black to-yellow-500">

                        </div>


                    </div>
                    <a href=""
                        className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                        <img src="fishburger.jpeg"
                            alt="fishburger"
                            className=""

                        />
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl mt-[350px] ml-[170px]">Fish Burger</h3>



                    </a>

<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
    <a href=""
    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
        <img src="Karhai.jpeg"
        alt="Chicken Karhai"
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105
                            transition-transform duration-500 ease-in-out"/>




    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl mt-[80px] ml-[170px] mr-[150px]">Chicken Karhai</h3>
    </a>
    <a href=""
    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
          <img src="Tikka.jpeg"
        alt="Chicken Karhai"
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105
                            transition-transform duration-500 ease-in-out"/>




    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl mt-[80px] ml-[170px] mr-[150px]">Chicken Handi</h3>

    </a>
</div>


                </div>
            </section>

        </div>
    )
}