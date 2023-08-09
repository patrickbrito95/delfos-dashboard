
import React, { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

export const useNavBarContext = () => {
    return useContext(NavBarContext);
};

export const NavBarProvider = ({ children }) => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    return (
        <NavBarContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
            {children}
        </NavBarContext.Provider>
    );
};
