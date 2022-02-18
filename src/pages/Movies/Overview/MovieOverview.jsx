import React from 'react'
import { useEffect } from 'react/cjs/react.development';
import { tmdb } from '../../../services/tmdb/tmdb';

export function MovieOverview( { movieOverview }) {

    const defaultPoster = "http://advancescreenings.com/img/posters/d/drunk_wedding_t.jpg"


    if (movieOverview == null || movieOverview == {}) {
        movieOverview = {
            status: "watching",
            image: "",
            title: "Default title",
            reWatchCount: "2",
        }
    }

    useEffect(() => {
        console.log('useEffect MovieOverview')
        //movieOverview = tmdb.searchMovieById(movieId)
    }, [])

    const createRowWithOverview = () => {
        return (
            Object.entries(movieOverview).map((field) => {
                switch (field[0]) 
                {
                    case'status':
                        return <td className= {field[0] +" "+ field[1]}/>

                    case 'title':
                        return <td className={field[0]}>{field[1]}</td>

                    case 'image':
                        return <td className={field[0]}><img src={field[1] == "" ? defaultPoster : field[1]}/></td>;
                    
                        case 'image':
                        return <td className={field[0]}><img src={field[1] == "" ? defaultPoster : field[1]}/></td>;

                    default:
                        return <td className={field[0]}>{field[1]}</td>
                }
            })
        )
    }

    return (
        <tbody>
            <tr className="single-movie">
                {createRowWithOverview()}
            </tr>
        </tbody>
    );
}
