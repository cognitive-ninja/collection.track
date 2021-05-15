import React from 'react'
import logo from '../logo.png'
export const Home = () => {
    return (
        <div className="home" style={{height:"100vh"}}>
            <div style={{ alignItems:"center", fontWeight:"bold", fontSize:"100px",justifyContent:"center", fontStyle:"italic", fontFamily:"Montserrat", color:"#031441", display:"flex",paddingTop:"10%", marginBottom:"-100px"}}>
                <img src={logo} style={{maxWidth:"150px", maxHeight:"150px"}} alt="logo"></img>
                <p>collection.track</p>
            </div>
                <p style={{fontSize:"medium", fontFamily:"sans-serif", textAlign:"center", marginLeft:"50px"}}>EXPLORE, ORGANIZE AND KEEP TRACK OF YOUR COLLECTION</p>
        </div>
    )
}
