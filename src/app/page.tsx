
import React from "react";  




import Header1 from "./components/header1";
import Header2 from "./components/header2";
import EditorPick from "./components/EditorPick";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/product";
import VitaClassicProduct from "./components/vitaClassicProduct";
import HeroCover from "./components/heroCover";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/footer";







export default function Home(){
  return (
  <div>
 
    <Header1/>
    <Header2  />
     <HeroSection/> 
     <EditorPick/>
     <ProductGrid/>
     <VitaClassicProduct/>
     <HeroCover/>
     <FeaturedPosts/>
     <Footer/>
     
     
  
  
  </div>
  );
}
