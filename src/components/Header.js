// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import wallpaper from '../assets/two-doctors.jpg';
import logo from '../assets/logo_medicalvita.png';
import facebook from '../assets/facebook.png';

export default function Header() {
    const location = useLocation();

   // {console.log(typeof location.pathname)}

    return (
        <div className='Header'>
            {/* <img className='wallpaper' src={wallpaper}></img> */}
            <img className={
                location.pathname === '/clinics' ? 'hidden-wallpaper' : 'wallpaper'} src={wallpaper}
            />

            <img className='logo' src={logo}></img>

            <ul className='Header__navbar'>
                <li><NavLink to='/'>O nas</NavLink></li>
                <li><NavLink to='/clinics'>Gabinety lekarskie</NavLink></li>
                <li><NavLink to='/diagnostics'>Diagnostyka</NavLink></li>
                <li><NavLink to='/joinus'>Dołącz do nas</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
            </ul>

            <div className='Header__wrapper'>
                <p>+48 41 383 33 55</p>
                <img className='telephone' src={require('../assets/telephone.png')} alt='telephone'></img>
            </div>


            <a className='facebook' href='https://www.facebook.com/profile.php?id=100063722116351'>
                <img 
                    src={facebook} alt='facebook'>
                </img>
            </a>
        </div>
    )
}