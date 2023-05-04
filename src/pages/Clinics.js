import React from 'react';
import './Clinics.css';
import DoctorWindow from '../components/DoctorWindow';

export default function Clinics() {

    return (
        <div className='Clinics'>
            <h1>Nasz Zespół</h1>

            <div className='Clinics__windows-area'>
                <DoctorWindow
                    id='1'
                    image="harold.jpg" 
                    name="Dr Paweł Cenda" 
                    spec="Otolaryngolog" 
                    desc="Lekarz specjalista chirurg chorób uszu, nosa i gardła, otorynolaryngolog, Region..."
                />
                <DoctorWindow
                    id='2'
                    image="harold.jpg" 
                    name="Dr Zbigniew Szydłowski" 
                    spec="Specjalista Chorób Wewnętrznych" 
                    desc="Jest pierwszym Polakiem, który otrzymał stypendium Europejskiej Akademii Chirurg..."            
                />
                <DoctorWindow
                    id='3'
                    image="manDoctor.jpg" 
                    name="Dr Kazimierz Głowacki" 
                    spec="Otolaryngolog" 
                    desc="Lekarz specjalista chirurg chorób uszu, nosa i gardła, otorynolaryngolog, Region..."
                />
                <DoctorWindow
                    id='4'
                    image="womanDoctor.jpg" 
                    name="Lek. med. Jolanta Kowal " 
                    spec="Okulista" 
                    desc="Ukończyła studia medyczne na II Wydziale Lekarskim Akademii Medycznej w Warszawi..."
                />
                <DoctorWindow
                    id='5'
                    image="harold.jpg" 
                    name="Dr Łukasz Orzechowski" 
                    spec="Ortopeda" 
                    desc="Jest pierwszym Polakiem, który otrzymał stypendium Europejskiej Akademii Chirurg..."
                />
                <DoctorWindow
                    id='6'
                    image="womanDoctor.jpg" 
                    name="Dr Teresa Adamek" 
                    spec="Neurolog" 
                    desc="Ukończyła studia medyczne na II Wydziale Lekarskim Akademii Medycznej w Warszawi..."
                />
            </div>
        </div>
    )
}