import React from 'react';
import CocktailCard from './CocktailCard';

const CocktailList = ({ dataArray }) => {
    return (
        <section className='pt-8'>
            <h1 className='font-bold text-2xl tracking-widest text-primary'>Cocktails</h1>
            <div>
                {
                    dataArray.map(cocktail => 
                        <CocktailCard 
                        image={cocktail.strDrinkThumb} 
                        name={cocktail.strDrink} 
                        glass={cocktail.strGlass}
                        type={cocktail.strAlcoholic}
                        />
                    )
                }      
            </div>
        </section>
    );
};

export default CocktailList;