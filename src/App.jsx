import React, { useState, useEffect, useRef } from "react";

import { ListMovie } from "./pages/Movies/List/ListMovie";
import { SearchBar } from "./pages/Search/SearchBar";
import { SearchResults } from "./pages/Search/SearchResults";
import { AppHeader } from "./layout/AppHeader";
import { I18nextProvider } from "react-i18next";
import "./i18n";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([
    { id: 0, title: "This is a Placeholder", status: "Seen" },
    { id: 733, title: "This is a Title", status: "Planned" },
  ]);

  const [searchString, setsearchString] = useState("");

  // const handleAddMovie = (searchItem) => {
  //   setMovies((prevMovie) => {
  //     // Not accurate, TODO
  //     return [...prevMovie, {id: searchItem.id, title: searchItem.title, status: "Seen"}]
  //   });

  // }

  const handleSearch = (searchValue) => {
    setsearchString(searchValue);
  };

  return (
    <div className="App">
      <I18nextProvider>
        <AppHeader />
        <div className="App-content">
          <div className="wrapper-search">
            <SearchBar onSearch={handleSearch} />
          </div>

          <SearchResults searchString={searchString} />

          <div className="wrapper-movies">
            <ListMovie movies={movies} />
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
