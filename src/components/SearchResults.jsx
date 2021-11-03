import React, {useState, useEffect} from 'react'
import { getImageBaseUrl } from '../tmdb/getImageBaseUrl';

import { searchMovieTmdb } from '../tmdb/searchMovieTmdb';
import { SearchItem } from './SearchItem';

export function SearchResults({searchString = "Error"}) {

    const [res, setRes] = useState([])
    const [baseUrl, setBaseUrl] = useState("")
    // TODO search default poster with corerct sizes
    const defaultPoster = "http://advancescreenings.com/img/posters/d/drunk_wedding_t.jpg"

    const [page, setPage] = useState(1)

    const queryMovies = (page) => {
        
    }

    useEffect(() => {
        getImageBaseUrl().then(base => setBaseUrl(base))
    }, [])

    useEffect(() => {
        if (searchString != undefined && searchString != null && searchString != "") {
            searchMovieTmdb(searchString).then(resultsApi => setRes(resultsApi))
        } else {
            setRes([])
        }
    }, [searchString]);
   
     if (Array.isArray(res)) {
        return <div className="search-results" style={{display: res.length ? 'flex' : 'none' }}>
            {
            res.map(({id, title, overview, poster_path}) => 
                <SearchItem key={id} id={id} title={title} overview={overview} image={poster_path== null ? defaultPoster : baseUrl+poster_path} />
            )}
            <div className="page-control">
                <button style={{display: page==1 ? 'none' : 'flex' }}>Back</button>
                <span>{page}</span>
                <button style={{display: res.length ? 'none' : 'flex' }}>Next</button>
            </div>
        </div>
     } else {
         return <div className="search-results" style={{display: res.length ? 'flex' : 'none' }}>No content available</div>
     }
}