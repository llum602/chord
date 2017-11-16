import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'


const Home = () => (
    <div className = "jumbotron">
        <h1 align = "middle">Chord</h1>
        <h3>
            <center>
                Create simple, multilayer tracks right inside your browser
            </center>
        </h3>	
        <p align = "middle">
            <Link to='/create'>
                <button className = "btn btn-lg btn-primary">Create</button>
            </Link>
        </p>
    </div>
)

export default Home