import { React } from 'react';
import { Link } from 'react-router-dom';

const CocktailCard = ({cocktailID, image, name, glass, type}) => {
    return (
        <div className='bg-white rounded-md shadow-md w-full'>
            <img src={image} className='rounded-t-md max-h-52 w-full object-cover'></img>
            <div className='p-3'>
                <h2 className='font-bold text-2xl'>{name}</h2>
                <span className='block font-medium text-lg'>{glass}</span>
                <span className='block font-medium text-gray-600'>{type}</span>
                <Link to={`/CocktailDetails/${cocktailID}`} className='inline-block mt-1.5 px-1.5 py-0.5 rounded-md bg-primary-100 text-white tracking-widest font-normal transition-all duration-500 hover:bg-primary-200'>DETAILS</Link>
            </div>
        </div>
    );
};

export default CocktailCard;