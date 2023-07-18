import React from 'react';
import NewsCard from './newsCards';
import news1 from './assets/news1.jpg';
import news2 from './assets/news2.jpg';
import news3 from './assets/news3.jpg';

function News()
{
    const heading1 = 'How much caffeine is safe to consume in a day?';
    const subHeading1 = 'The safe amount of caffeine consumption in a day varies depending on individual factors, such as age, health status, and sensitivity to caffeine.';
    const heading2 = 'Does coffee affect sleep quality?';
    const subHeading2 = 'Yes, coffee can affect sleep quality. Coffee contains caffeine, which is a stimulant that can interfere with the sleep-wake cycle and disrupts the natural process of falling asleep.';
    const heading3 = 'Does coffee increase the risk of anxiety?';
    const subHeading3 = 'Yes, coffee and other caffeinated beverages can increase the risk of anxiety, especially in sensitive individuals or those who consume large amounts of caffeine regularly.';
    return(
       <div id='Blog' className="container-fluid  d-flex justify-content-center align-items-center my-5 flex-column">
            <p className=' text-body-tertiary mt-5 fw-semibold' style={{fontFamily:'math'}}>Whats behind the mug</p>
            <div className="container bg-white d-flex flex-row gap-0" style={{height:'35rem',width:'60rem'}}>
            <NewsCard img ={news1} heading = {heading1} subHeading = {subHeading1} date = '21 may 2020' />
            <NewsCard img ={news2} heading = {heading2} subHeading = {subHeading2} date = '12 nov 2019' />
            <NewsCard img ={news3} heading = {heading3} subHeading = {subHeading3} date = '1 june 2023' />         
            </div>
       </div>
    );
}

export default News;