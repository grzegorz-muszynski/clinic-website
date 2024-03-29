import React from 'react';
import './DoctorPage.css';
import { useParams, NavLink } from 'react-router-dom';
import { doctorsData } from '../assets/doctorsData';

export default function DoctorPage() {
    const { id } = useParams();
    const doctor = doctorsData.find(doctor => doctor[0] === Number(id));

    return (
        <div className='DoctorPage'>
            <img src={require(`../assets/` + doctor[1])} alt="Doktorzy Miechów" />
            <div className='DoctorPage__bio'>
                <h1>{doctor[2]}</h1>
                <h3>{doctor[3]}</h3>
                <h4>Godziny przyjęć</h4>
                <p className='DoctorPage__bio__hours__time'>{doctor[4]}</p>
                <div className='DoctorPage__bio__container'>{doctor[5]}</div>
            </div>
            <div className="DoctorPage__buttons-wrapper">
                <button><NavLink to='/Contact'>Umów wizytę</NavLink></button>
                <button><NavLink to='/clinics'>Wróć do listy</NavLink></button>
            </div>
        </div>
    )
}