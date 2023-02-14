import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCast = (props) => {
    
    const { image, name, id } = props.cast;
    return (
        <div>
            <Link to ={`/details/${id}`}>
            <div className='meet-item'>
                <img src={image}></img>
                <h5 className='text-white text-base font-medium mt-5'>{name}</h5>
            </div>
            </Link>

        </div>
    );
};

export default DisplayCast;