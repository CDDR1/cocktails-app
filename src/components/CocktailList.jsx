import React from 'react';
import CocktailCard from './CocktailCard';

const CocktailList = ({ dataArray }) => {
    return (
        <section className='pt-8'>
            <h1 className='font-bold text-3xl tracking-widest text-white text-center mb-6'>Cocktails</h1>
            <div className='flex flex-col items-center gap-5'>
                {
                    dataArray.map(cocktail => 
                        <CocktailCard 
                        key={cocktail.idDrink}
                        cocktailID={cocktail.idDrink}
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