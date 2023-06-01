<<<<<<< HEAD
import React, { useState } from 'react'
import './SearchPage.scss'

export default function SearchPage() {
    const [searchText, setSearchText] = useState('Jurassic')
    const [allMoviesData,setAllMoviesData] = useState([])
    const [filterMovies,setFilterMovies] = useState([])

    const filterFunction = () => {
        let search = searchText.trim()
        if(search==='')
        {
            setFilterMovies([])
            return;
        }
        let filterData = []
        filterData = allMoviesData.filter((itemObj)=>{
            let title = itemObj.name
            let result1 = title.includes(search.toLowerCase());
            if(result1){
                return result1;
            }
            let genre = itemObj.genre
            let result2 = genre.includes(search.toLowerCase())
            return result2;
        })
        setFilterMovies(filterData)
    }


    return (
        <div className='search-page-container'>
            <div className='search-results-container'>
                <div className='search-text-title'>
                    Results for "{searchText}"
                </div>
                <div className='search-results-movies'>
                    {filter.map((obj) => {
                        return (
                                <img className='search-movie-card' src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/07/Avengers-Age-of-Ultron-2015jpeg.jpeg?w=720'alt='poster-not-available'/>
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
                {filter.map((obj) => {
                        return (
                                <img className='other-movie-card' src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/07/Avengers-Age-of-Ultron-2015jpeg.jpeg?w=720'alt='poster-not-available'/>
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
=======
import React, { useState } from 'react'
import './SearchPage.scss'

export default function SearchPage() {
    const [searchText, setSearchText] = useState('Jurassic')
    const [allMoviesData,setAllMoviesData] = useState([])
    const [filterMovies,setFilterMovies] = useState([])

    const filterFunction = () => {
        let search = searchText.trim()
        if(search==='')
        {
            setFilterMovies([])
            return;
        }
        let filterData = []
        filterData = allMoviesData.filter((itemObj)=>{
            let title = itemObj.name
            let result1 = title.includes(search.toLowerCase());
            if(result1){
                return result1;
            }
            let genre = itemObj.genre
            let result2 = genre.includes(search.toLowerCase())
            return result2;
        })
        setFilterMovies(filterData)
    }


    return (
        <div className='search-page-container'>
            <div className='search-results-container'>
                <div className='search-text-title'>
                    Results for "{searchText}"
                </div>
                <div className='search-results-movies'>
                    {filter.map((obj) => {
                        return (
                                <img className='search-movie-card' src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/07/Avengers-Age-of-Ultron-2015jpeg.jpeg?w=720'alt='poster-not-available'/>
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
                {filter.map((obj) => {
                        return (
                                <img className='other-movie-card' src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/07/Avengers-Age-of-Ultron-2015jpeg.jpeg?w=720'alt='poster-not-available'/>
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
>>>>>>> 4b15fe04d592a95e4cfdc38fd52f7daaf2145929
//   };