import React, { Component } from 'react'
import magazine from './assets/magazine.jpg';
import gallery1 from './assets/gallery1.jpg';
import gallery2 from './assets/gallery2.jpg';
import coffeeVideo from './assets/coffeeVideo.mp4';
function Gallery() {
    return(
        <section id='gallery'>
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
        <p className='mt-3 fs-5 fw-bold text-secondary mt-5'>BUY 2 MUGS GET A COFFEE MAGAZINE FREE!!</p>
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="container-fluid p-5 bg-white d-flex justify-content-center flex-row gap-4" style={{height:'23.4rem'}}>
                <img src={magazine} style={{height:'16rem',width:'18rem'}}/> 
               <div className="d-flex flex-column gap-3">
               <img src={gallery1} style={{height:'7.4rem',width:'14rem'}}/> 
               <img src={gallery2} style={{height:'7.8rem',width:'14rem'}}/> 
               </div>
            <div className=" d-flex flex-column gap-1">
            <p className='mt-5 fs-6 text-secondary fw-bold'>PREMIUM OFFER</p>
            <h4>Get our Coffee Magazine</h4>  
            <p className='text-secondary'>Explore an Array of Chic Designs and Hues</p>
            <button className="btn btn-dark btn-sm py-2" style={{width:'10rem'}}>START SHOPPING</button>
            </div>
            </div>
        </div>

        <div className="container-fluid">
        <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video autoPlay loop muted className="d-block w-100 h-50">
            <source src={coffeeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="carousel-caption">
          <div>
      <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>
        Freshly Brewed Coffee
        </h1>
        <hr class="border border-danger border-1 opacity-50"/>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#f1ede7' }}>
        Discover the Rich Aroma and Flavor of Our Premium Coffee Selection. 
        Savor the Perfect Balance of Caffeine and Taste to Start Your Day Right.
      </p>
    </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>

        </section>
    )

}
export default Gallery;
