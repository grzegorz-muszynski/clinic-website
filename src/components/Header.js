// import React from 'react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import wallpaper from '../assets/two-doctors.jpg';
import logo from '../assets/logo_medicalvita.png';
import facebook from '../assets/facebook.png';

export default function Header() {
    let [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    const handleClosing = () => {
        setShowNavbar(false);
    }

    const handleOpening = () => {
        setShowNavbar(true);
    }

    return (
        <div className='Header'>
            <div className={showNavbar ? 
                "Header__modal" : 
                "Header__modal hidden"
            }>
                <img 
                    className="Header__modal__close"
                    src={require('../assets/cross.png')} 
                    onClick={handleClosing}
                    alt='Przychodnia - przycisk zamykania'
                />
            </div>

            <img className={
                location.pathname === '/clinics' ? 'hidden-wallpaper' : 'wallpaper'} src={wallpaper}
            />

            <img id='logo' src={logo} alt='Centrum medyczne | Doktorzy | Miechów'></img>

            <div 
                className='Header__menu-btn'
                onClick={handleOpening}
            >Menu</div>

            <ul className={showNavbar ? 
                "Header__navbar" : 
                "Header__navbar hidden"
            }>
                <li>
                    <NavLink 
                        onClick={handleClosing}
                        to='/'>O nas
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        onClick={handleClosing}
                        to='/clinics'>Gabinety lekarskie
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        onClick={handleClosing}
                        to='/diagnostics'>Diagnostyka
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        onClick={handleClosing}
                        to='/joinus'>Dołącz do nas
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        onClick={handleClosing}
                        to='/contact'>Kontakt
                    </NavLink>
                </li>
                <li id='facebook-long'>
                    <a href='https://www.facebook.com/profile.php?id=100063722116351'>
                        <img src={require('../assets/facebook3.png')} alt="Centrum medyczne Miechów"></img>
                        <p>Facebook</p>
                    </a>
                </li>
            </ul>

            <div className='Header__wrapper'>
                <p>+48 41 383 33 55</p>
                <img className='telephone' src={require('../assets/telephone.png')} alt='Centrum medyczne Miechów - kontakt telefoniczny'></img>
            </div>


            <a id='facebook' href='https://www.facebook.com/profile.php?id=100063722116351'>
                <img 
                    src={facebook} alt='facebook'>
                </img>
            </a>
        </div>
    )
}