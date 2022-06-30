import React from 'react';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import CocktailList from "./CocktailList";
import CocktailCard from "./CocktailCard";
import { useState, useEffect } from 'react';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText === '' ? 'a' : searchText}`)
            .then(res => res.json())
            .then(data => console.log(data.drinks[0]))
            .catch(err => console.log(err));
    }, [searchText]);

    return (
        <>
            <Navbar />
            <div className='px-3 pt-8 flex flex-col items-center'>
                <Searchbar onTextChange={handleSearchTextChange} />
                <CocktailList />
            </div>
        </>
    );
}

export default Home;