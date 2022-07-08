import AppContext from "../contexts/AppContext";
import { Link } from "react-router-dom";

const IndividualCocktail = ({ selectedCocktail }) => {
    return (
        <>
            <div>
                <Link to="/">GO BACK</Link>
                <h1>{selectedCocktail.strDrink}</h1>
                <div>
                    <div>
                        <img src={selectedCocktail.strDrinkThumb}></img>
                    </div>
                    <ul>
                        <li>
                            <h2>Name:</h2>
                            <span>{selectedCocktail.strDrink}</span>
                        </li>
                        <li>
                            <h2>Category:</h2>
                            <span>{selectedCocktail.strCategory}</span>
                        </li>
                        <li>
                            <h2>Info:</h2>
                            <span>{selectedCocktail.strAlcoholic}</span>
                        </li>
                        <li>
                            <h2>Glass:</h2>
                            <span>{selectedCocktail.strGlass}</span>
                        </li>
                        <li>
                            <h2>Instructions:</h2>
                            <span>{selectedCocktail.strInstructions}</span>
                        </li>
                        <li>
                            <h2>Ingredients:</h2>
                            <span>{selectedCocktail.strIngredient1}</span>
                            <span>{selectedCocktail.strIngredient2}</span>
                            <span>{selectedCocktail.strIngredient3}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default IndividualCocktail;
