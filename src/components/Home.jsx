import React from 'react';
import { useState } from 'react';
import cornell_path from '../assets/cornell.jpg';
import harvard_path from '../assets/harvard.png';
import oxford_path from '../assets/oxford.png';
import stanford_path from '../assets/stanford.png';
import doctor_path from '../assets/doctor.png';
import iitdelhi_path from '../assets/IITDelhi.png';
import Formm from './Formm';
function Home() {
    const [f,setF]=useState(false);
    const openForm=()=>{
     setF(true);
    }
    return (
        f?<Formm></Formm>:
        <div className='home-container'>
            <header>
      <h1 className='logo'>inspace</h1>
      <ul className='header-list'>
        <li>About</li>
        <li>Events</li>
        <li>Contact Us</li>
      </ul>
      <button className='login-btn'>LOG IN</button>
    </header>
            <div className='intro-div'>
                <div className='sky-bg'></div>
                <div className='section-container'>
                    <section className='left-section'>
                        <p>Building a <span className='bold-span'>community of Doctors</span> for the future</p>
                        <div className='btn-container'>
                            <button className='red-btn' onClick={openForm} >Join The Community</button>
                            <button className='explore-btn'>Explore</button>
                        </div>
                    </section>
                    <section className='right-section'>
                        <img className='doctor-img' src={doctor_path} alt="doctor" />
                    </section>
                </div>
            </div>
            
            <div className='section-2'>
                <h2>Our Community Comprises Graduates From</h2>
                <div className='sponsers-container'>
                    <img src={harvard_path} alt="sponser" />
                    <img src={oxford_path} alt="sponser" />
                    <img src={stanford_path} alt="sponser" />
                    <img src={cornell_path} alt="sponser" />
                    <img src={iitdelhi_path} alt="sponser" />
                </div>
            </div>
        </div>
    )
}

export default Home;