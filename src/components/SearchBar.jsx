import React, { useState, useEffect, useRef } from "react";

export function SearchBar({onSearch}) {

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => onSearch(searchValue), 500)
        return () => clearTimeout(timeOutId);
    }, [searchValue])

    return (
        <div className="search-bar">
            <form action="#">
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Añadir Película"/>
            </form>
        </div>
    )
}
