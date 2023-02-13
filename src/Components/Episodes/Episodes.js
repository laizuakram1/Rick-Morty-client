import React, { useEffect, useState } from 'react';
import '../Episodes/Episodes.css';

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);


    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/episode')
        .then(res => res.json())
        .then(data => setEpisodes(data.results))
    },[])

    return (
        <div>
            <h4 className='text-white text-xl mb-10'>Episodes</h4>
            {/* carousel start here */}
            <div className="carousel w-full">
  <div id="episode1" className="carousel-item relative w-full">
        {/* carousel items */}
        <div className='episodes-item flex'>
        {
            episodes.map(episode => <div episode = {episode} key ={episode.id} className='episode-item text-white'>
                <p>{episode.episode}</p>
                <h4>{episode.name}</h4>
            </div>)
        }
        </div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#episode4" className="btn btn-circle">❮</a> 
      <a href="#episode2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="episode2" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#episode1" className="btn btn-circle">❮</a> 
      <a href="#episode3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="episode3" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#episode2" className="btn btn-circle">❮</a> 
      <a href="#episode4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="episode4" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#episode3" className="btn btn-circle">❮</a> 
      <a href="#episode1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Episodes;