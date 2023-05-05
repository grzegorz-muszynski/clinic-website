// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import wallpaper from '../assets/two-doctors.jpg';
import logo from '../assets/logo_medicalvita.png';

export default function Header() {
    return (
        <div className='Header'>
            <img className='wallpaper' src={wallpaper}></img>

            <img className='logo' src={logo}></img>

            <ul className='Header__navbar'>
                <li><NavLink to='/'>O nas</NavLink></li>
                <li><NavLink to='/clinics'>Gabinety lekarskie</NavLink></li>
                <li><NavLink to='/diagnostics'>Diagnostyka</NavLink></li>
                <li><NavLink to='/joinus'>Dołącz do nas</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
            </ul>
        </div>
    )
}