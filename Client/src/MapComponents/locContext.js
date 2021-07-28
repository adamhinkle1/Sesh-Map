import React, { useState, createContext} from 'react';

export const LocContext = createContext();

export const LocProvider = (props) => {
    const [locCategory, setLocCategory] = useState([]);
    return(
        <LocContext.Provider value={[locCategory, setLocCategory]}>
            {props.children}
        </LocContext.Provider>
    );
};

