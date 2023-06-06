import { useState, createContext } from "react";
const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [watchList , setWatchList]=useState(new Set([1]))
    const [searchText, setSearchText] = useState('')

    return (
        <UserContext.Provider value={{ watchList,setWatchList,searchText, setSearchText}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };