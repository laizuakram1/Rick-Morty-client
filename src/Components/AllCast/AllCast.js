import React, { useEffect, useState } from 'react';
import DisplayCast from './DisplayCast';
import logo from '../../assets/images/Logo.png'

const AllCast = () => {

    const [casts, setCasts] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCasts(data.results))
    }, [])
    return (
        <div>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <h1 className='text-5xl py-10 font-bold text-cyan-300'>The Cast</h1>
            <div className='grid grid-cols-5 justify-center cursor-pointer'>
                {
                    casts.map(cast => <DisplayCast cast={cast} key={cast.id}></DisplayCast>)

                }
            </div>
        </div>
    );
};

export default AllCast;