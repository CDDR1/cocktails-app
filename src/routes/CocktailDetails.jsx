import Navbar from "../components/Navbar";
import CocktailCard from "../components/CocktailCard";
import AppContext from '../contexts/AppContext';
import { useContext } from "react";
import { useParams } from "react-router-dom";

const CocktailDetails = () => {
    const { cocktails } = useContext(AppContext);
    const { id } = useParams();

    return (
        <>
            <Navbar />
            {
                cocktails.filter(cocktail => cocktail.idDrink === id)
                .map(cocktail => 
                    <CocktailCard 
                        cocktailID={cocktail.idDrink} 
                        image={cocktail.strDrinkThumb}
                        name={cocktail.strDrink}
                        glass={cocktail.strGlass}
                        type={cocktail.strAlcoholic} 
                    />
                )
            }
        </>
    );
};

export default CocktailDetails;