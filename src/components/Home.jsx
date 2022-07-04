import React from 'react';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import CocktailList from "./CocktailList";
import { useState, useEffect } from 'react';
import DetailsProvider from '../context/DetailsContext';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const [cocktails, setCocktails] = useState([]);

    const searchCocktails = async () => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText === '' ? 'a' : searchText}`);
            const data = await response.json();
            setCocktails(data.drinks);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        searchCocktails();
    }, [searchText]);

    return (
        <>
            <Navbar />
            <div className='px-4 pt-8 mb-6 flex flex-col items-center'>
                <Searchbar onTextChange={handleSearchTextChange} />
                {
                    cocktails !== null ? 
                    <DetailsProvider>
                        <CocktailList dataArray={cocktails}/> 
                    </DetailsProvider>
                    :
                    <h1>No cocktails match your search</h1>
                }
            </div> 
        </>
    );
}

export default Home;