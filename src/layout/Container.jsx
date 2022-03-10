import React from 'react'
import { Search } from '../pages';
import { AppHeader, SideNav } from './';

export function Container(pageComponent) {
    return function ContainerWrapper() {
        return (
            <div className={'container'}>
                <AppHeader/>
                <SideNav/>
                <Search/>
                <div>
                    {pageComponent}
                </div>
            </div>
        );
    };
}
