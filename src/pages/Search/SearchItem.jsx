import React, { useState, useEffect} from 'react'
import "./search.styles.css";

export function SearchItem(item) {
    
    const {id, title, overview, image} = item;

    // TODO create a detailed window for movies

    return (
        // <a href={"https://www.themoviedb.org/movie/"+ id +"?language=en"} target="_blank" className="search-item" key={id} title={title}>
        //     <img src={image} alt={title}/>
        //     <p>{title}</p>
        //     {/* ellipsizeMode='tail' numberOfLines={1} */}
        // </a>
        <div className="search-item" key={id} title={title}>
            <img src={image} alt={title}/>
            <p>{title}</p>
            {/* ellipsizeMode='tail' numberOfLines={1} */}
        </div>
    )
}
