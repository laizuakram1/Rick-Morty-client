import React from 'react';
import '../Banner/Banner.css';
import logo from '../../assets/images/Logo.png'
import HeroIcon from '../../assets/images/Home page/Hero element/portal.png'

const Banner = () => {
    return (
        <div id='banner'>
            <div className='banner-content'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='banner-title'>
                <h1 className="text-7xl font-bold"><span className='text-white'>THE</span><span className='inline-block'><img src={HeroIcon}></img></span> RICK & <br></br>MORTY <span className='text-white'>WIKI</span></h1>
            </div>
            <div className='watch-now'>
            <button className='text-sm'>Watch Now</button>
                <p className='w-96 text-left ml-10 text-sm'>Brilliant but boozy scientist Rick hijacks his fretful teenage grandson. Morty, for wild escapades in other worlds and alternate dimensions.</p>
            </div>
            </div>
        </div>
    );
};

export default Banner;