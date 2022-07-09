import Navbar from "../components/Navbar";
import IndividualCocktail from "../components/IndividualCocktail"
import AppContext from '../contexts/AppContext';
import { useContext } from "react";
import { useParams } from "react-router-dom";

const CocktailDetails = () => {
    const { id } = useParams();
    const { cocktails } = useContext(AppContext);
    const cocktailToDisplay = cocktails.filter(cocktail => cocktail.idDrink === id);

    return (
        <div className="min-h-screen">
            <Navbar />
            <IndividualCocktail selectedCocktail={cocktailToDisplay[0]} />
        </div>
    );
};

export default CocktailDetails;