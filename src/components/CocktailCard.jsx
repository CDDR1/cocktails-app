import React from 'react';

const CocktailCard = ({image, name, glass, type}) => {
    return (
        <div>
            <img src={image}></img>
            <div>
                <h2>{name}</h2>
                <span>{glass}</span>
                <span>{type}</span>
                <button>DETAILS</button>
            </div>
        </div>
    );
};

export default CocktailCard;