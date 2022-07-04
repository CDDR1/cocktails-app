import React, { useState, useEffect } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const [cocktails, setCocktails] = useState([]);
    
    // Fetch API
    const searchCocktails = async () => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText === '' ? 'a' : searchText}`);
            const data = await response.json();
            setCocktails(data.drinks);
        } catch (error) {
            console.log(error);
        }
    };

    // Fetch the API each time that the searchText state changes
    useEffect(() => {
        searchCocktails();
    }, [searchText]);

    return (
        <AppContext.Provider value={{searchText, handleSearchTextChange, cocktails}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;