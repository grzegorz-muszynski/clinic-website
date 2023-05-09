import React from 'react';
import './JoinUs.css';

export default function JoinUs() {
    
    return (
        <div className='JoinUs'>
            <h1>Dołącz do naszego zespołu</h1>
                <div className="JoinUs__wrapper">
                    <img className='JoinUs__photo' src={require('../assets/laptop.jpg')}/>
                    <div className='JoinUs__text'>
                        <p>Zespół Gabinetów Lekarskich Medical-Vita zaprasza do współpracy. Oferujemy pracę w kameralnych wnętrzach prywatnej przychodni i przyjazną atmosferę.</p> <p>Zapraszamy do kontaktu pod numerem <span>+48 607 167 146</span>.</p>
                    </div>
                </div>
        </div>
    )
}