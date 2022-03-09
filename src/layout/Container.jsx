import React, { useState } from 'react'
import { SearchBar, SearchResults } from '../pages';
import { AppHeader, SideNav } from './';

export function Container(pageComponent) {
    const [searchString, setsearchString] = useState('')

    function search(string) {
        setsearchString(string);
    }

    return function ContainerWrapper() {
        return (
            <div className={'container'}>
                <AppHeader/>
                <SideNav/>
                <div className="wrapper-search">
                    <SearchBar onSearch={search}/>
                    <SearchResults searchString={searchString}/>
                </div>
                <div>
                    {pageComponent}
                </div>
            </div>
        );
    };
}
