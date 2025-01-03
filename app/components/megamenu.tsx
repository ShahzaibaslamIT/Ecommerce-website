'use client'
import {useState,useEffect} from'react';
import { useRouter } from 'next/navigation'; 

import ProductCard from "./Productcard";
import { Product } from '@/pages/types';
import { BiMenu } from 'react-icons/bi';

const Menu=()=>{
    const [products,setProducts]=useState<Product[]>([]);
    const [cart,setCart]=useState<Product[]>([])
    const[showCart,setShowCart]=useState(false);
    const[isCheckout,setIsCheckout]=useState(false);
    const router=useRouter();

    useEffect(()=>{
        async function fetchProducts(){
        const response=await fetch("/api/products");
        const data=await response.json();
        setProducts(data);

        }
        fetchProducts();
     
        const savedCart =localStorage.getItem("cart");
        if(savedCart){
            setCart(JSON.parse(savedCart));
        }


    },[]);

 const onAddToCart=(product:Product)=>{
    setCart((prevCart)=>{
        const updatedCart=[...prevCart,product];
        localStorage.setItem("cart",JSON.stringify(updatedCart))
        return updatedCart;
    });

    //cartvisibility
    const toggleCart=()=>{
        setShowCart((prev)=>!prev);
    };

    const goToCheckout=()=>{
        setIsCheckout(true);

    };


    //cart clear method
    const clearCart=()=>{
        setCart([]);
        localStorage.removeItem("cart");

    }

    return(
        <div className="relative min-h-screen py-6">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
                style={{
                    backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJfE-0Y9fxRf4zJTuqGVrlkFXuFS1sl10yA&s')"
                }}>

            </div>
            <div className="relative z-10">
                <div className="max w-6xl mx-auto text-center mb-8">
                  <h1 className="text-4xl font-bold text-white mb-4"> Delicious Items in our menu</h1>
                  <p className="text-xl text-white">
                    Explore our section of exclusive items!
                  </p>
                </div>
            </div>

        </div>
    )






 }

};
export default Menu;
