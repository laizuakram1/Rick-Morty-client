import '../MeetCast/MeetCast.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import DisplayCast from '../AllCast/DisplayCast';
import { Link } from 'react-router-dom';





const MeetCast = () => {

     const [users, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => setUser(data.results))
    },[])

    return (
        <div >
            <div className='flex justify-between w-full mb-5'>
                <h5 className='text-xl text-white text-base'>Meet The Cast</h5>
                <Link to='/all'><button className="btn btn-outline btn-accent">View All</button></Link>
            </div>


{/* meet cast carousels */}
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className='meet-items flex'>
                
                {
                    users.map(user => <div user={user} key ={user.id}className='meet-item '>
                        <img src={user.image}></img>
                        <h5 className='text-white text-base font-medium mt-5'>{user.name}</h5>
                    </div> )
                }
            </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
   
  
</div>

    </div>          
       
    );
};

export default MeetCast;