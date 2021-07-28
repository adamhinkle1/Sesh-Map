import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext()

export const AddressProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const AddressStateValue = () => useContext(StateContext);