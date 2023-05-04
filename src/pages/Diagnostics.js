import React from 'react';
import './Diagnostics.css';

export default function Diagnostics() {

    return (
        <div className='Diagnostics'>
            <h1>Diagnostyka</h1>
            <p>W Zespole Gabinetów Lekarskich Medical-Vita oferujemy szeroki zakres badań diagnostycznych od prostych badań laboratoryjnych po bardziej skomplikowaną diagnostykę. Zastosowanie nowoczesnego, specjalistycznego sprzętu pozwala na trafną diagnozę i wyleczenie wielu groźnych chorób.</p>
            <div className="Diagnostics__wrapper">
                <img src={require('../assets/diagnostyka.jpg')}/>
                <p>Punkt pobrań świadczy usługi od poniedziałku do czwartku w godzinach <span>7:30 - 10:00</span>. Badania laboratoryjne świadczone są przez firmę <a href="https://grupadiagnostyka.pl/o-grupie/">DIAGNOSTYKA</a>.</p>
            </div>
        </div>
    )
}