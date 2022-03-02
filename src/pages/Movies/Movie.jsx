import React from 'react'
import { useEffect } from 'react';
import { tmdb } from '../../services/tmdb';

export function Movie( { movieId }) {

    var movieDetails = {
        title: "Default title",
        overview: "Default Overview",
        genres: ["genre1" , "genre2", "genre3"],
        voteAvg: "8.8",
        voteCnt: "16000",
        runtime: "96",
        image: "./",
    }

    // TODO onclick movie + implement routes
    // window.location.hostname

    useEffect(() => {
        movieDetails = tmdb.searchMovieById(movieId)
    }, [])

    return (
        <div>
            {/* TODO add image */}
            <img alt={movieDetails.title} className="movie-img" src={movieDetails.image}/>
            <div className="movie-info">
                <p>Title: {movieDetails.title}</p>
                <p>Overview: {movieDetails.overview}</p>
                <p>Genres: {movieDetails.genres.join(", ")}</p>
                <p>Vote average: {movieDetails.voteAvg}</p>
                <p>Vote count: {movieDetails.voteCnt}</p>
                <p>Runtime: {movieDetails.runtime}</p>
            </div>

            {/* TODO add data related to our database */}
            <div/>
        </div>
    );
};
