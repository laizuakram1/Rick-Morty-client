import React from 'react';
import '../Banner/Banner.css';
import logo from '../../assets/images/Logo.png'
import HeroIcon from '../../assets/images/Home page/Hero element/portal.png'
import bubble from '../../assets/images/Home page/Hero element/bubble.png'
import Gun from '../../assets/images/Home page/Hero element/Gun.png';
import pill from '../../assets/images/Home page/Hero element/pill.png';
import { Button } from "@material-tailwind/react";


const Banner = () => {
    return (
        <div>
            <div>
            <img className='bubble' src={bubble}></img>
            <img className='gun' src={Gun}></img>
            <img className='pill' src={pill}></img>
            </div>
           <div>
            <div className='logo'>
                <img src={logo}></img>

            </div>
            <div className='banner'>
                <div className='banner-title mb-5'>
                    <h1 className='text-9xl font-extrabold'><span className='text-white italic'>THE</span> <img className='inline-block' src={HeroIcon}></img> <span className='text-color'>RICK &</span> <br></br> <span className='text-color'>MORTY</span> <span className='text-white italic'>WIKI</span></h1>
                </div>
                <div className='banner-description'>
                    <Button className='watch-btn'>Watch Now</Button>
                    <p>Briliant but boozy scientist Rick morty hijacks his fretfl teenage grandson, Morty, for wild escapades in other worlds and alternate dimenstions. </p>
                </div>
            </div>
            <div className='meet-cast'></div>
            <div className='episodes'></div>
            <div className='location'></div>
           </div>
        </div>
    );
};

export default Banner;