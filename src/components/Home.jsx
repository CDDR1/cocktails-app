import React from 'react';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import CocktailList from "./CocktailList";
import CocktailCard from "./CocktailCard";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const [cocktails, setCocktails] = useState([]);

    const searchCocktails = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText === '' ? 'a' : searchText}`);
        const data = await response.json();
        setCocktails(data.drinks);
        console.log(data.drinks);
    };

    useEffect(() => {
        searchCocktails();
    }, [searchText]);

    return (
        <>
            <Navbar />
            <div className='px-3 pt-8 flex flex-col items-center'>
                <Searchbar onTextChange={handleSearchTextChange} />
                <CocktailList dataArray={cocktails}/>
            </div>
        </>
    );
}

export default Home;