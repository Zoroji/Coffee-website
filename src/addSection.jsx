import React from 'react';
import Cards from './card.jsx';
import './addSection.css';

function AddSection() {
    const url1 = "https://www.noplasticshop.in/wp-content/uploads/2021/11/Terracotta-Coffee-Mug.jpg";
    const url2 = "https://www.happygiftmart.com/image/cache/catalog/product-3049/lHVUYMOt9g-41BMw21pPtL-630x552.jpg";
    const url3 = "https://m.media-amazon.com/images/I/81rRhSiqITL.jpg";
  return (
    <section id="product">
<div className="container my-4" style={{background:'white',width:'80%'}}>
      <div className="text fw-bold">Discover your perfect cup of bliss at our artisanal coffee haven.</div>
      <div className="tray rounded">
        <div className="p-5 d-flex justify-content-center align-items-center gap-4" >
        <Cards
            src = {url1}
            cupName = "Mud Cup"
            price = "$20"
            oldPrice="$60"
        />
         
         <Cards
            src = {url2}
            cupName = "BMW Cup"
            price = "$1000"
            oldPrice="$1400"
        />
        <Cards
            src = {url3}
            cupName = "Naruto Cup"
            price = "$68"
            oldPrice="$69"
        />
        
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default AddSection;
