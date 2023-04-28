// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='Header'>
            <img className='wallpaper' src='./assets/two-doctors.jpg'></img>

            <img className='logo' src='./assets/logo_medicalvita.png'></img>

            <ul className='Header__navbar'>
                <li><NavLink to='/'>O nas</NavLink></li>
                <li><NavLink to='/clinics'>Gabinety lekarskie</NavLink></li>
                <li><NavLink to='/diagnostics'>Diagnostyka</NavLink></li>
                <li><NavLink to='/forpatient'>Do poczytania</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
            </ul>
        </div>
    )
}