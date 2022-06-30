import React from 'react';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import CocktailList from "./CocktailList";
import CocktailCard from "./CocktailCard";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='px-4 pt-8'>
                <Searchbar />
                <CocktailList />
            </div>
        </>
    );
}

export default Home;