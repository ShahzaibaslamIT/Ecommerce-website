import React from "react";
import "../app/components/Navbar"
import Navbar from "../app/components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import Productlist from "./components/Productlist";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Menuitem from "./components/Menuitem";
import Reservation from "./components/Reservation";
import { Product } from "@/pages/types";
import Productcard from "./components/Productcard";
import Menu from "./components/megamenu";


export default function Home(){
  return(
    <div className="bg-gradient-to-r from-black to-orange-700 min-h-screen">
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Productlist/>
      <Menuitem/>
      <Banner/>
      <Offer/>
      <Card/>
      <Menu/>
     <Testimonials/>
      <Reservation/>
      <Productcard/>
      <Footer/>
    </div>
  );
  
};