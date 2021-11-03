import React, { useState, useEffect} from 'react'

export function SearchItem(item) {
    
    const {id, title, overview, image} = item;

    // TODO create a detailed window for movies

    return (
        <a href="" className="search-item" key={id} alt={id} title={title}>
            <img src={image}/>
            <p>{title}</p>
        </a>
    )
}
