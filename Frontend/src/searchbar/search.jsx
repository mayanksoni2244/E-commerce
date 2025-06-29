import React from 'react'
import { useState } from 'react'
import { createContext,useContext } from 'react'

const SearchContext = createContext();


export const SearchProvider = ({children}) => {
    const [search, setsearch] = useState("");
    return (
        <SearchContext.Provider value={{search,setsearch}}>
            {children}
        </SearchContext.Provider>
    )
}
export const UseSearch = () => {
    return useContext(SearchContext);
}
