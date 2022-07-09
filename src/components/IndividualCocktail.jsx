import AppContext from "../contexts/AppContext";
import { Link } from "react-router-dom";

const IndividualCocktail = ({ selectedCocktail }) => {
    return (
        <>
            <div className="text-white font-semibold">
                <div className="flex flex-col gap-4 items-center mt-10 3xl:mt-24">
                    <Link to="/" className="bg-white text-black px-3 py-1 mb-3 rounded-md inline-block">
                        BACK HOME
                    </Link>
                    <h1 className="text-4xl tracking-wider text-center mb-8">{selectedCocktail.strDrink}</h1>
                </div>
                <div className="p-5 flex flex-col items-center lg:flex-row lg:justify-center lg:px-32 gap-10">
                    <div>
                        <img src={selectedCocktail.strDrinkThumb} className="rounded-sm max-w-sm"></img>
                    </div>
                    <ul>
                        <li className="mb-5">
                            <h2 className="bg-white text-black px-1 rounded-md inline-block mr-2">Name:</h2>
                            <span>{selectedCocktail.strDrink}</span>
                        </li>
                        <li className="mb-5">
                            <h2 className="bg-white text-black px-1 rounded-md inline-block mr-2">Category:</h2>
                            <span>{selectedCocktail.strCategory}</span>
                        </li>
                        <li className="mb-5">
                            <h2 className="bg-white text-black px-1 rounded-md inline-block mr-2">Info:</h2>
                            <span>{selectedCocktail.strAlcoholic}</span>
                        </li>
                        <li className="mb-5">
                            <h2 className="bg-white text-black px-1 rounded-md inline-block mr-2">Glass:</h2>
                            <span>{selectedCocktail.strGlass}</span>
                        </li>
                        <li className="mb-5">
                            <div className="flex items-start">
                                <h2 className="bg-white text-black px-1 rounded-md inline-block mr-2">Instructions:</h2>
                                <span>{selectedCocktail.strInstructions}</span>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div className="flex items-start">
                                <h2 className="bg-white text-black px-1 rounded-md inline-block mr-2">Ingredients:</h2>
                                <div className="flex flex-col">
                                    <span>{selectedCocktail.strIngredient1}</span>
                                    <span>{selectedCocktail.strIngredient2}</span>
                                    <span>{selectedCocktail.strIngredient3}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default IndividualCocktail;
