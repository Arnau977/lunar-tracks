
const {apiKey, apiToken, defaultUrl, imagesUrl} = require("./config.json");

export function getImageBaseUrl() {
    return fetch(imagesUrl+ "?api_key="+ apiKey)
    .then(res => res.json())
    .then(response => {
        return  response.images.base_url+response.images.poster_sizes[1];
    });
}