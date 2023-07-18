import React from 'react';
import Icons from './icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem,faLightbulb } from '@fortawesome/free-regular-svg-icons';


function Footer()
{
 return(
    <footer id='Work' className=' container-fluid bg-black d-flex text-white' style={{height:'30rem'}}>
       <img src="https://images.unsplash.com/photo-1487720955747-a15f8c166e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" 
        className='w-50 '
       />
        <div className=' w-50 p-5 d-flex flex-column gap-4'>
        <h3>Handmande by US with <strong>Love</strong> </h3>
        <p style={{color: '#808080'}}>At our Handmade Coffee Shop, we take pride in crafting the most delightful coffee blends that will awaken your senses and leave you craving for more. </p>
        <Icons 
            icon={faGem}
            heading = 'Premium Quality'
            subHeading = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />
        <Icons 
            icon={faLightbulb}
            heading = 'Gentel to enviorment'
            subHeading = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />
        </div>
    </footer>
 );   
}

export default Footer;