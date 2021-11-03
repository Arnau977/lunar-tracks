import React from 'react'

export function SeenMovie( { movie }) {
    const { id, title, status, image, overview } = movie;
    return (
        <li>
            {title} / {status}
        </li>
    );
}
