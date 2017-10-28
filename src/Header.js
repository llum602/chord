import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Header = () => (
    <header className="page-header">
        <ul align = "middle">
            <h3>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/create'>Create</Link></li>
            </h3>
        </ul>
    </header> 
)

export default Header