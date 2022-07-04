import React, { useContext } from 'react';

const HandleDetailsClick = React.createContext();

export const useHandleDetailsClick = () => {
    return useContext(HandleDetailsClick);
};

const DetailsProvider = ({ children }) => {
    const handleDetailsClick = () => {
        console.log('DETAILS');
    };

    return (
        <HandleDetailsClick.Provider value={handleDetailsClick}>
            {children}
        </HandleDetailsClick.Provider>
    );
};

export default DetailsProvider;