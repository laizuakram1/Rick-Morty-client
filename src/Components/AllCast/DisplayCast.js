import React from 'react';

const DisplayCast = (props) => {
    const {image, name} = props.cast;
    return (
        <div>
            <div className='meet-item'>
                        <img src={image}></img>
                        <h5 className='text-white text-base font-medium mt-5'>{name}</h5>
                    </div>
            
        </div>
    );
};

export default DisplayCast;