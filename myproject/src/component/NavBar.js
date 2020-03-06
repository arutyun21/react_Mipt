import React from 'react'
import './NavBar.css'

const NavBar = () =>{
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <a className="textLogo">Project Task Manager</a>
                <ul classname="nav-buttons">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;