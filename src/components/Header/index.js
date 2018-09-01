import React, { Component } from 'react'
import { Link } from  'react-router-dom'


const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/calculator'>Calculator</Link></li>
                <li><Link to='/dog'>Dogs</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;
