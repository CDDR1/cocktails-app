import CocktailCard from './CocktailCard';

const CocktailList = ({ dataArray }) => {
    return (
        <section className='pt-16'>
            <h1 className='font-bold text-4xl tracking-widest text-white text-center mb-10'>Cocktails</h1>
            <div className='flex flex-wrap justify-center items-center gap-5 2xl:mx-40 3xl:mx-52'>
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