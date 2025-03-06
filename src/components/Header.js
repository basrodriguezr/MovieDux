import React from 'react';
import '../styles.css';

export function Header(){
    return(       
        <div className="header">
            <img className="logo" src="logo.png" alt="movieBass"/>
            <h2 className="app-subtitle">It's time for popcorn!</h2>   
        </div>        
    );
}