
import {conf} from "./config"
import { getLanguage, LANGUAGE } from 'i18n';
import { useEffect, useState } from "react";

const {apiKey, apiToken, defaultUrl, imageUrl} = conf;

class Tmdb {
    searchMoviesByTitle(searchString, page = 1) {

        // const [lang, setLang] = useState(LANGUAGE.ENGLISH);
        // useEffect(() => {
        //     const lng = getLanguage();
        //     setLang(lng);
        // }, []);
    
    
        const searchUrl = defaultUrl+ "search/movie?api_key="+ apiKey+ "&language="+ LANGUAGE+ "&query="+ searchString.replace(" ", "%20") + "&page="+ page;
    
        console.log("Query: " +  searchString)
        console.log(searchUrl)
        return fetch(searchUrl)
            .then(res => res.json())
            .then(response => {
                const { results = {}} = response
                if (Array.isArray(results)) {
                    const movies = results.map(movie => {
                        const {id, title, overview, poster_path} = movie
                        const item = {id, title, overview, poster_path}
                        return item;
                    })
                    return movies.sort((a, b) => a.id - b.id);
                } else {
                    return {}
                }
            });
    }

    searchMovieById(id = "0") {
        const searchUrl = defaultUrl+ "movie/"+ id+ "api_key="+ apiKey+ "&language="+ localStorage.getItem(getLanguage());
    
        console.log("Query: " +  id)
        console.log(searchUrl)
        return fetch(searchUrl)
            .then(res => res.json())
            .then(response => {
                // TODO Adapt it to a single movie
    
                const {genres, id, imdb_id, overview, poster_path, release_date, runtime, title, vote_average, vote_count} = response;
    
                const { result = {}} = response
    
                return result;
            });
    }

    getImageBaseUrl() {
        return fetch(conf.imagesUrl+ "?api_key="+ apiKey)
        .then(res => res.json())
        .then(response => {
            return  response.images.base_url+response.images.poster_sizes[1];
        });
    }
}

export const tmdb = new Tmdb();