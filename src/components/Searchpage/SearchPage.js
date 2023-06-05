import React, { useEffect, useState, useContext } from 'react'
import './SearchPage.scss'
import { useLocation, useParams } from 'react-router-dom'
import { movies } from '../../mockData/moviesMockData'
import { UserContext } from '../../context/Context/UserContext/UserState'

export default function SearchPage() {
    const {searchText,setSearchText} = useContext(UserContext)

    const [allMoviesData,setAllMoviesData] = useState(movies)
    const [filterMovies,setFilterMovies] = useState([])
    const {text}=useParams(); 
    console.log("Search for:",text)
    const filterFunction = () => {
        let search = searchText.trim()
        if(search==='')
        {
            setFilterMovies([])
            return;
        }
        let filterData = []
        filterData = allMoviesData.filter((itemObj)=>{
            let title = itemObj.title.toLowerCase()
            let result1 = title.includes(search.toLowerCase());
            if(result1){
                return result1;
            }
            let genre = itemObj.genre
            let result2 = false;
            for(let i = 0;i<genre.length;i++){
                let g = genre[i].toLowerCase()
                if(g.includes(search.toLowerCase())){
                    result2 = true;
                    break;
                }
            }
            return result2;
        })
        setFilterMovies(filterData)
    }

    useEffect(()=>{
        setSearchText(text);
    })
    useEffect(()=>{
        filterFunction()
    },[searchText])

    return (
        <div className='search-page-container'>
            <div className='search-results-container'>
                <div className='search-text-title'>
                    Results for "{searchText}"
                </div>
                <div className='search-results-movies'>
                    {filterMovies.map((obj) => {
                        return (
                                <img className='search-movie-card' src={obj.posterImage} alt='poster-not-available'/>
                        )
                    })
                    }
                </div>
            </div>
            <div className='other-results-container'>
                <div className='other-text-heading'>
                    Other Related Matches for You
                </div>
                <div className='other-results-movies'>
                {allMoviesData.slice(2,6).map((obj) => {
                        return (
                                <img className='other-movie-card' src={obj.posterImage} alt='poster-not-available'/>
                        )
                    })
                    }
                    </div>
            </div>
        </div>
    )
}
let filter = [1, 2, 3, 4, 5, 6]


// const handleSearch = (searchText) => {
//     searchText = searchText.trim()
//     if (searchText === '') {
//       setSearchData(orgUsersData);
//       //setSearchData(teamMembers)  
//       return;
//     }
//     setCurrentPage(1)
//     let filterData = [];
//     filterData = searchData.filter((itemObj) => {
//       let name =
//         itemObj.firstName.trim().toLowerCase() +
//         " " +
//         itemObj.lastName.trim().toLowerCase();
//       let result1 = name.includes(searchText.toLowerCase());
//       if (result1) {
//         return result1;
//       }
//       let user_email = itemObj.email.trim().toLowerCase();
//       let result2 = user_email.includes(searchText.toLowerCase());
//       return result1 || result2;
//     });
//     setSearchData(filterData);
//   };