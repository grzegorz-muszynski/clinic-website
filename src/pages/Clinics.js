import React, { useState, useEffect, componentDidMount } from 'react';
import './Clinics.css';
import DoctorWindow from '../components/DoctorWindow';
import { doctorsData } from '../assets/doctorsData';

export default function Clinics() {
    const [selected, setSelected] = useState('Wszyscy');
    const [filteredList, setFilteredList] = useState([]);
    const fullList = [];

    const handleChange = (e) => {
        setSelected(e.target.value)
        let newList = [];
        doctorsData.forEach(doctor => {
            if (doctor[3] !== e.target.value) return;
            newList.push(
                <DoctorWindow
                    id={doctor[0]}
                    image={doctor[1]}
                    name={doctor[2]}
                    spec={doctor[3]}
                    hours={doctor[4]}
                />
            )
        })
        setFilteredList(newList)
    }

    doctorsData.forEach((doctor) => {
        fullList.push(
            <DoctorWindow
                id={doctor[0]}
                image={doctor[1]}
                name={doctor[2]}
                spec={doctor[3]}
                hours={doctor[4]}
            />
        )
    });
    
    return (
        <div className='Clinics'>
            <div className='navbarBackground'></div>
            <h1>Nasz Zespół</h1>
            <div className='Clinics__background-bar'>
                <p>Wybierz specjalizację</p>
            </div>
            <select name="doctors" id="Clinics__doctors-select" onChange={(e)=>handleChange(e)}>
                <option value="Wszyscy">--wszyscy--</option>
                <option value="Endokrynolog">Endokrynolog</option>
                <option value="Ginekolog">Ginekolog</option>
                <option value="Internista">Internista</option>
                <option value="Kardiolog">Kardiolog</option>
                <option value="Nefrolog">Nefrolog</option>
                <option value="Neurolog">Neurolog</option>
                <option value="Okulista">Okulista</option>
                <option value="Onkolog">Onkolog</option>
                <option value="Otolaryngolog">Otolaryngolog</option>
                <option value="Urolog">Urolog</option>
                <option value="Psychiatra">Psychiatra</option>
            </select>
            <div className='Clinics__windows-area'>{selected === 'Wszyscy' ? fullList : filteredList }</div>            
        </div>
    )
}