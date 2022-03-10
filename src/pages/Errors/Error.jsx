import React from 'react'

export function Error({ type }) {
    var errorMessage = '';

    switch (type) {
        case 'notFound': 
            errorMessage = 'This page could not be found on our server';
            break;

        case 'wip':
            errorMessage = 'This page is Work In Progress!';
            break;
            
        default:
            errorMessage = 'This is an unknown error';
            break;
    }

    return (
        <>
            <h1>There was an error:</h1>
            <p>{errorMessage}</p>
        </>
    )
}
