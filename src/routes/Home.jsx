import React from 'react';
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import CocktailList from "../components/CocktailList";
import AppContext from '../contexts/AppContext';
import { useContext } from 'react';

const Home = () => {
    const { handleSearchTextChange, cocktails } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <div className='px-4 pt-8 pb-8'>
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