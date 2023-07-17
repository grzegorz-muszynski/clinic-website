import React from 'react';
import { NavLink } from 'react-router-dom';    
import './DoctorWindow.css';

export default function DoctorWindow(props) {

    return (
        <div className='DoctorWindow'>
            <img src={require('../assets/' + props.image)} />
            <div className='DoctorWindow__name'>{props.name}</div>
            <div className='DoctorWindow__spec'>{props.spec}</div>
            <div className='DoctorWindow__desc'>{props.hours}</div>

            <NavLink to={`/doctorpage/${props.id}`} className="DoctorWindow__btn">
                <button key={`Button no.: ${props.id}`}>Więcej</button>
            </NavLink>
        </div>
    )
}