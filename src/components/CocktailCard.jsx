import React from 'react';
import { useHandleDetailsClick } from '../context/DetailsContext';

const CocktailCard = ({cocktailID, image, name, glass, type}) => {
    const showDetails = useHandleDetailsClick();
    return (
        <div className='bg-white rounded-md shadow-md w-64'>
            <img src={image} className='rounded-t-md max-h-52 w-full object-cover'></img>
            <div className='p-3'>
                <h2 className='font-bold text-2xl'>{name}</h2>
                <span className='block font-medium text-lg'>{glass}</span>
                <span className='block font-medium text-gray-600'>{type}</span>
                <a href={`/CocktailDetails/${cocktailID}`} className='block mt-1.5 px-1 py-0.5 rounded-md bg-primary text-white tracking-widest font-normal'>DETAILS</a>
            </div>
        </div>
    );
};

export default CocktailCard;