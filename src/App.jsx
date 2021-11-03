import React, { useState, useEffect, useRef } from "react";

import { MovieList } from "./components/MovieList"
import { SearchBar } from "./components/SearchBar";

import logo from './logo.svg';
import './App.css';

import { SearchResults } from "./components/SearchResults";


export default function App() {

  const [movies, setMovies] = useState([
    { id: 1, title: "Test Movie", status: "Seen", user: "Demo", catalog: "Catalog Demo" },
  ]);

  const [searchString, setsearchString] = useState("")

  const handleAddMovie = (searchItem) => {
    setMovies((prevMovie) => {
      // Not accurate, TODO
      return [...prevMovie, {id: searchItem.id, title: searchItem.title, status: "Seen"}]
    });

  }

  const handleSearch = (searchValue) => {
      setsearchString(searchValue)
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="title">
          LunarTracksDB
        </h1>
      </header>

      <div className="App-content">
        <div className="wrapper-search">
          <SearchBar onSearch={handleSearch}/>
        </div>
       
       <div className="wrapper-res" style={{display: searchString != "" ? 'flex' : 'none' }}>
          <SearchResults searchString={searchString}/>
       </div>

      <div className="wrapper-movies">
      <div className="movieList" >
          <MovieList movies= {movies} />
        </div>
      </div>
      </div>
    </div>
  );
}
