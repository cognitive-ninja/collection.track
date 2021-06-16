import React from 'react'
import logo from '../logo.png'
import "../App.css"

export const Home = () => {
    return (
        <>
        <div className="home">
            <div className="head-section">
                <img src={logo} className="logo" alt="logo"></img>
                <p className="title">collection.track</p>
            </div>
            <p className="slogan">EXPLORE, ORGANIZE AND KEEP TRACK OF YOUR COLLECTION</p>
        </div>
        <div style={{textAlign:"center",padding:"3px", backgroundColor:"black", color:"white"}}>Developed with <i class="fas fa-heart" style={{fontSize:"medium", marginBottom:"-3px", color:"rgb(215,0,0)"}}></i> by <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/saurabh-hirugade/" style={{textDecoration:"none", color:"lightgrey", fontStyle:"italic"}}>Saurabh Hirugade</a></div>
        </>
    )
}
