import { useState, createContext } from "react";
const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [watchList , setWatchList]=useState([1])

    return (
        <UserContext.Provider value={{ watchList,setWatchList}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };