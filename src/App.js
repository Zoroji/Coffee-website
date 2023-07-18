import React from 'react';
import Navbar from './navbar';
import Header from './header'
import AddSection from './addSection'
import Gallery from './gallery.jsx';
import News from './news'
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <AddSection/>
      <Gallery/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
