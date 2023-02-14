import React, { useEffect, useState } from 'react';
import './CastDetails.css'
import { useParams } from 'react-router-dom';
import { RiHeart2Fill, RiAndroidFill, RiMapPinRangeFill, RiPlayList2Fill } from "react-icons/ri";
import { BsGenderMale } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import logo from '../../assets/images/Logo.png'

const CastDetails = () => {
    let { id } = useParams();
    const [cast, setCast] = useState({});
    

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setCast(data))
    }, [id])

    return (
        <div>
            <div className='logo py-10'>
                    <img src={logo}></img>
            </div>
            <div className='grid grid-cols-2'>
                <div className='details-left text-white'>
                    <h4 className='text-3xl font-bold my-5 text-cyan-400'>{cast.name}</h4>
                    <img src={cast.image}></img>
                </div>
                <div className="details-right p-10 text-white">
                    <div className='cast-status grid grid-cols-3 gap-6 pb-6'>
                        <div className='status p-5'>
                            <RiHeart2Fill className='text-4xl icons'/>
                            <p>Status</p>
                            <h4 className='text-2xl font-bold'>{cast.status}</h4>
                        </div>
                        <div className='status p-5'>
                            <RiAndroidFill className='text-4xl icons'/>
                            <p>Species</p>
                            <h4 className='text-2xl font-bold'>{cast.species}</h4>
                        </div>
                        <div className='status p-5 '>
                            <BsGenderMale className='text-4xl icons'/>
                            <p>Gender</p>
                            <h4 className='text-2xl font-bold'>{cast.gender}</h4>
                        </div>
                    </div>
                    <div className='origin'>
                            <BiWorld  className='text-4xl icons'/>
                            <p>Origin</p>
                            <div className='origin-icon'>
                            <h4 className='text-2xl font-bold'>{cast.origin?.name}</h4>
                            <FaExternalLinkAlt />
                            </div>
                    </div>
                    <div className='origin'>
                            <RiMapPinRangeFill className='text-4xl icons'/>
                            <p>Last Known Location</p>
                            <div className='origin-icon'>
                            <h4 className='text-2xl font-bold'>{cast.origin?.name}</h4>
                            <FaExternalLinkAlt />
                            </div>
                    </div>
                    <div className='origin'>
                            <RiPlayList2Fill className='text-4xl icons'/>
                            <p>Episodes(S)</p>
                            <ul className='mt-4'>
                                <li className='flex text-2xl items-center'><RxDotFilled /> Pilot</li>
                                <li className='flex text-2xl items-center'><RxDotFilled /> Lawnmoer Dog</li>
                                <li className='flex text-2xl items-center'><RxDotFilled />Anatomy Park</li>
                                <li className='flex text-2xl items-center'><RxDotFilled />M.Night Shyam-Aliens!</li>
                                <li className='flex text-2xl items-center'><RxDotFilled />Messeks and Destry</li>
                            </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CastDetails;