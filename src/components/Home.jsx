import React from 'react';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import CocktailList from "./CocktailList";
import CocktailCard from "./CocktailCard";

const Home = () => {
    return (
        <>
            <Navbar />
            <Searchbar />
            <CocktailList />
        </>
    );
}

export default Home;