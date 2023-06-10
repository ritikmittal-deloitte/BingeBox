import React, { useEffect, useState, useContext } from "react";
import "./SearchPage.scss";
import { useParams } from "react-router-dom";
import { mockData as movies } from "../../mockData/moviesMockData";
import { UserContext } from "../../context/Context/UserContext/UserState";
import Card from "../card/Card";

export default function SearchPage() {
  const { searchText, setSearchText } = useContext(UserContext);

  const [allMoviesData] = useState(movies);
  const [filterMovies, setFilterMovies] = useState([]);
  const [other, setOther] = useState([]);
  const { text } = useParams();

  console.log("Search for:", text);
  const filterFunction = () => {
    let search = searchText.trim();
    if (search === "") {
      setFilterMovies([]);
      return;
    }
    let filterData = [];
    filterData = allMoviesData.filter((itemObj) => {
      let title = itemObj.title.toLowerCase();
      let result1 = title.includes(search.toLowerCase());
      if (result1) {
        return result1;
      }
      let genre = itemObj.genre;
      let result2 = false;
      for (let i = 0; i < genre?.length; i++) {
        let g = genre[i].toLowerCase();
        if (g.includes(search.toLowerCase())) {
          result2 = true;
          break;
        }
      }
      return result2;
    });
    setFilterMovies(filterData);
    otherFilterFunction(filterData);
  };
  function otherFilterFunction(data) {
    //getting all genres
    let allGenres = [];
    for (let i = 0; i < data.length; i++) {
      allGenres = addUniqueElements(allGenres, data[i].genre);
    }

    let result = [];
    for (let i = 0; i < allMoviesData.length; i++) {
      let arr1 = allMoviesData[i].genre;
      let arr2 = allGenres;
      if (hasCommonElement(arr1, arr2)) {
        result.push(allMoviesData[i]);
      }
    }

    let result2 = removeCommonElements(result, data);
    setOther(result2);
  }

  useEffect(() => {
    setSearchText(text);
  });
  useEffect(() => {
    filterFunction();
  }, [searchText]);

  return (
    <div className="search-page-container">
      <div className="search-results-container">
        <div className="search-text-title">Results for "{searchText}"</div>
        <div className="search-results-movies">
          {filterMovies.map((obj) => {
            return <Card cardData={obj} />;
          })}
          {filterMovies.length === 0 && (
            <div className="no-results-text">No Results Found</div>
          )}
        </div>
      </div>
      <div className="other-results-container">
        <div className="other-text-heading">Other Related Matches for You</div>
        <div className="other-results-movies">
          {other.slice(0, 5).map((obj) => {
            return <Card cardData={obj} />;
          })}
          {other.length === 0 && (
            <div className="no-results-text">No Results Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

function addUniqueElements(arr1, arr2) {
  const uniqueElements = arr1.slice(); // Create a copy of arr1

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i]) && !uniqueElements.includes(arr2[i])) {
      uniqueElements.push(arr2[i]);
    }
  }

  return uniqueElements;
}

function hasCommonElement(arr1, arr2) {
  // Convert arr1 to a Set for faster element lookup
  const set1 = new Set(arr1);

  // Check if any element in arr2 is present in set1
  for (let i = 0; i < arr2.length; i++) {
    if (set1.has(arr2[i])) {
      return true;
    }
  }

  return false;
}

function removeCommonElements(arr1, arr2) {
  // Create a new array to store the result
  const result = [];

  // Convert arr2 to a Set for faster element lookup
  const set2 = new Set(arr2);

  // Iterate over arr1 and add non-common elements to the result array
  for (let i = 0; i < arr1.length; i++) {
    if (!set2.has(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
}
