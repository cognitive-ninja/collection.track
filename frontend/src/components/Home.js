import React from 'react'
import logo from '../logo.png'
import "../App.css"

export const Home = () => {
    return (
        <div className="home" style={{height:"100vh"}}>
            <div className="head-section">
                <img src={logo} className="logo" alt="logo"></img>
                <p className="title">collection.track</p>
            </div>
            <p className="slogan">EXPLORE, ORGANIZE AND KEEP TRACK OF YOUR COLLECTION</p>
        </div>
    )
}
