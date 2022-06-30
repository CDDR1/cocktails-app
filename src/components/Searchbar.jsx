import React from 'react';

const Searchbar = () => {
    return (
        <div className='bg-white text-center p-3 rounded-sm shadow-lg flex flex-col items-center'>
            <span className='inline-block mb-2.5'>Search your favorite cocktail</span>
            <input type='text' placeholder='Type here...' className='bg-blue-100 border-2 border-blue-400 rounded-sm'></input>
        </div>
    );
};

export default Searchbar;