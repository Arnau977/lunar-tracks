import React, { useState, useEffect } from "react";
import { NAME_SPACE } from './../../i18n';
import { useTranslation } from 'react-i18next';
import "./search.styles.css";

export function SearchBar({onSearch}) {

    const { t } = useTranslation(NAME_SPACE.SEARCH);
    
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => onSearch(searchValue), 500)
        return () => clearTimeout(timeOutId);
    }, [searchValue])

    return (
        <div className="search-bar">
            <form action="#">
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder={t('searchPlaceHolder')}/>
            </form>
        </div>
    )
}
