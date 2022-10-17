import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.css";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  // console.log("useLocation()", useLocation());
  //   Object
  // hash: ""
  // key: "6mudxisl"
  // pathname: "/search"
  // search: "?q=w"
  // state: null
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      // console.log(request.data.results);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie">
                {movie.name || movie.title || movie.original_title}
                <div className="movie__column-poster">
                  <img
                    src={movieImageUrl}
                    alt="movie poster"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾는 영화가 없습니다.</p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}

export default SearchPage;
