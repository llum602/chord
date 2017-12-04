import React from 'react'
import { Link } from 'react-router-dom'
import mainLogo from'./chordIcon3.png';
import './App.css';

const Header = () => (
    <header className="page-header">
        <ul align = "middle">
            <h4>
            <img src={mainLogo} className={"logo"} alt="Logo"/>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/create'>Create</Link></li>
            </h4>
        </ul>
    </header> 
)

export default Header