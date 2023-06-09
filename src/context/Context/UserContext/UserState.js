import { useState, createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [watchList , setWatchList]=useState(new Set([1]))
    const [searchText, setSearchText] = useState('')
    const [isLogin, setIsLogin] = useState(false);
    const [genre,setGenre] = useState(['Horror', 'Romantic', 'Comedy'])
    const [categories,setCategories] = useState('Categories')

    return (
        <UserContext.Provider value={{ watchList,setWatchList,searchText, setSearchText,genre,setGenre,categories,setCategories}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };
