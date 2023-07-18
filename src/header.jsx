import React from 'react';
import './header.css';

function header() {
    return ( 
        <div>
            <div className = 'container-main'>
  <div className = 'header'>
    <p className=' fw-semibold fst-italic' >Brewing Happiness Daily</p>
    <h1 className='fw-bold'>COFFEE MUGS</h1>
    <hr class="border border-danger border-2 opacity-50 w-100" />
    <p className=' fw-medium fs-6'>Explore our stunning collection of artisan-crafted coffee mugs that elevate your morning ritual</p>
  </div>
</div>
        </div>
     );
}

export default header;