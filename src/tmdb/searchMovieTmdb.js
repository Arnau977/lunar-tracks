const {apiKey, apiToken, defaultUrl} = require("./config.json");


export function searchMovieTmdb(searchString = "No input", page = 1, lang = "en-US") {
    const searchUrl = defaultUrl+ "search/movie?api_key="+ apiKey+ "&language="+ lang+ "&query="+ searchString+ "&page="+ page;

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