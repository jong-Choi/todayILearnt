import axios from "../api/axios.js";
import React, { useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal/index.js";

function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovieData();
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  // movie 객체 내용
  // backdrop_path: "/5vUux2vNUTqwCzb7tVcH18XnsF.jpg"
  // first_air_date: "2022-09-21"
  // genre_ids: (2) [18, 80]
  // id: 113988
  // name: "다머"
  // origin_country: ['US']
  // original_language: "en"
  // original_name: "Dahmer – Monster: The Jeffrey Dahmer Story"
  // overview: "범행 기간 10년 이상. 피해자만 무려 17명. 10대 남자아이들과 젊은 남성들을 노린 연쇄 살인범 제프리 다머. 그는 어떻게 그 오랜 세월 동안 살인을 저지를 수 있었을까?"
  // popularity: 6336.256
  // poster_path: "/f2PVrphK0u81ES256lw3oAZuF3x.jpg"
  // vote_average: 8.3
  // vote_count: 939

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div
          className="slider__arrow-left"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              alt={movie.name}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div
          className="slider__arrow-right"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className="arrow">{">"}</span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

export default Row;
