import React from 'react';
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import CocktailList from "../components/CocktailList";
import { useState, useEffect, useContext } from 'react';
import AppContext from '../contexts/AppContext';

const Home = () => {
    const { searchText, handleSearchTextChange, cocktails } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <div className='px-4 pt-8 mb-6 flex flex-col items-center'>
                <Searchbar onTextChange={handleSearchTextChange} />
                {
                    cocktails ? 
                    <CocktailList dataArray={cocktails}/> 
                    :
                    <h1>No cocktails match your search</h1>
                }
            </div> 
        </>
    );
}

export default Home;