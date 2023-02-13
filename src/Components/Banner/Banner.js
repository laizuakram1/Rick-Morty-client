import React from 'react';
import '../Banner/Banner.css';
import HeroIcon from '../../assets/images/Home page/Hero element/portal.png'
import bubble from '../../assets/images/Home page/Hero element/bubble.png'
import Gun from '../../assets/images/Home page/Hero element/Gun.png';
import pill from '../../assets/images/Home page/Hero element/pill.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import brandLogo from '../../assets/images/Logo.png';


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
                <img src={brandLogo}></img>

            </div>
            <div className='banner'>
                <div className='banner-title mb-5'>
                    <h1 className='text-9xl font-extrabold'><span className='text-white italic'>THE</span> <img className='inline-block' src={HeroIcon}></img> <span className='text-color'>RICK &</span> <br></br> <span className='text-color'>MORTY</span> <span className='text-white italic'>WIKI</span></h1>
                </div>
                <div className='banner-description'>
                <button className='watch-btn text-xl flex justify-evenly items-center'><BsFillArrowRightCircleFill /> Watch Now</button>
                   
                    <p>Briliant but boozy scientist Rick morty hijacks his fretfl teenage grandson, Morty, for wild escapades in other worlds and alternate dimenstions. </p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;