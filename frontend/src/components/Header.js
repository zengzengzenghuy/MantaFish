import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const headerStyle = {  'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '5rem',
        'background-color': '#8a2b06',
        'color': 'white',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'padding': '0 10%',
        'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.25)',
        'z-index': '10'}
    const buttonStyle = {
        'width': '20%',
        'height': '3rem',
        'background-color': '#8a2b06',
        'fontSize' : '2rem',
        'align-items': 'center',
        'left' : '10'
    }
    return(
    <>
        <header style={headerStyle}>
        <button style={buttonStyle} onClick={() => navigate('/')}>Manta Fish</button>
        
        </header>
    </>
    );
}

export default Header;