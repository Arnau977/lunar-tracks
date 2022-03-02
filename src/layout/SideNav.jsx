import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { PATH } from '../app.routes.const';

export function SideNav() {

    const [width, setwidth] = useState(0);

    function openNav() {
        setwidth(250);
        console.log('width: ' + width);
    }

    function closeNav() {
        setwidth(0);
    }
   

    return (
        <>
            <span style={{color: 'white', cursor: 'pointer'}} onClick={openNav}>&#9776; Lists</span>
            <div style={{width: width+'px'}} className={'sidenav'}>
                <a href={void(0)} className="closebtn" onClick={closeNav}>&times;</a>
                <Link to={PATH.MOVIE.LIST}>Example1</Link>
                <Link to={PATH.MOVIE.EDIT}>Example2</Link>
                <Link to={PATH.ERROR}>Example3</Link>
            </div>
        </>
    )
}
