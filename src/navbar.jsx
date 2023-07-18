import React from 'react';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    
<div className='nav-bar'>
      <nav className="navbar navbar-expand-lg text-danger " style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={{ height: '40px', width: 'auto' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5" style={{}}>
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link" href="#">OUR PRODUCT</a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link" href="#">ABOUT</a>
              </li>
            </ul>
            <ul className="navbar-nav flex-row gap-3">
              <li className="nav-item mx-5">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-5" href="#">WORK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa-solid fa-mug"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
 
    
  );
}

export default Navbar;
