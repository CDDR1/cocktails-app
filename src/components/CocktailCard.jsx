import React from 'react';

const CocktailCard = ({image, name, glass, type}) => {
    return (
        <div className='bg-white rounded-md shadow-md w-64'>
            <img src={image} className='rounded-t-md max-h-52 w-full object-cover'></img>
            <div className='p-3'>
                <h2 className='font-bold text-2xl'>{name}</h2>
                <span className='block font-medium text-lg'>{glass}</span>
                <span className='block font-medium text-gray-600'>{type}</span>
                <button className='block mt-1.5 px-1 py-0.5 rounded-md bg-primary text-white tracking-widest font-normal'>DETAILS</button>
            </div>
        </div>
    );
};

export default CocktailCard;