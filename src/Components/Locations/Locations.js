import React, { useEffect, useState } from 'react';
import '../Locations/Locations.css';
const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/location')
        .then(res => res.json())
        .then(data => setLocations(data.results))
    },[])
    return (
        <div>
            <h3 className='text-white text-xl mt-20 mb-10'>Locations</h3>

            <div className="carousel w-full">
  <div id="location1" className="carousel-item relative w-full">
    <div className='location-items flex'>
        {
            locations.map(location => <div location = {location} key ={location.id} className='location-item text-white'>
                <p>#{location.id}</p>
                <h4>{location.name}</h4>
            </div> )
        }
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#location4" className="btn btn-circle">❮</a> 
      <a href="#location2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="location2" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#location1" className="btn btn-circle">❮</a> 
      <a href="#location3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="location3" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#location2" className="btn btn-circle">❮</a> 
      <a href="#location4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="location4" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#location3" className="btn btn-circle">❮</a> 
      <a href="#location1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Locations;