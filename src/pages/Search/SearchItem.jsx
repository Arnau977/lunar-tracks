import React, { useState, useEffect} from 'react'

export function SearchItem({id, title, overview, image}) {
    // TODO create acess to detailed window for movies

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
