import React from 'react'
import { SeenMovie } from './SeenMovie'

export function MovieList({ movies = [] }) {
    return (
        <ul>
            {movies.map((movie) => (
                <SeenMovie key= {movie.id} movie= {movie} />
            ))}
        </ul>
    )
}
