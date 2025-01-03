import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
    const productImages = [
        "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=is&k=20&c=sjC4OArIvG3LpL2GmREu3KZr8icIIkgnGFzozdxEhf0=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdeiYDBOeb8v5lzs_-ZStivcelB11zhfC6Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMm05skFB8MN-iXtfjOR69GgGjePowBGnZQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtnq_z1-4VsewiFZr-ImWbIoMBy4YsqBElg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSzdNPAvmvmvkacpqBTQpRwlJav2Hwde83g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUB31KfXrRjCXuol5v2jpx0j9D3xoc8UxUA&s"
    

    ];
    return (
        <div className="relative text-center p-10">
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `url('https://www.google.com/imgres?q=chcicken%20handi%27&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_kkosy25Yuc%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_kkosy25Yuc&docid=15R55yr10ipXrM&tbnid=xWD358uqublBlM&vet=12ahUKEwi_pMzPm9eKAxXdxwIHHXInIZEQM3oECD4QAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi_pMzPm9eKAxXdxwIHHXInIZEQM3oECD4QAA')`,
                    backgroundSize: `cover`,
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.1,

                }} />
            <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">Most Requested Items</h1>
            <h1 className="text-3xl text-white z-10 relative">Order now!</h1>

            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-70 bg-white shadw-md rounded-xl duration-500 hover:scale-105 hover:scale-105 hover:shadow-xl z-10 relative">
                        <a href="a">
                            <img
                            src ={productImages[index]}
                            alt={`Product ${index+1}`}
                            className="h-80 w-72 object-cover rounded t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-amber-500 mr-3 uppercase text-xs">Category</span>
                                <p className="text-lg font-bold text-red-700 truncate block capitalize">Item Name{index+1}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black my-3 cursor-auto">$200</p>

                                    <del>
                                        <br/>
                                        <p className="text-sm text-black cursor-auto ml-2">{""}$250</p>
                                    </del>

                                    <div className="ml-auto">
                                    <FaShoppingCart className="w-5 h-5 text-black"/>

                                    </div>



                            

                                </div>

                            </div>

                        </a>

                    </div>
                ))}
            </section>



        </div>




    )
}

export default ProductCardGrid;