import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

export default function About() {

    return (
        <div className='About'>
            <h1>Nasza misja</h1>
            <p>Zespół Gabinetów Lekarskich Medical-Vita jest polską, innowacyjną, dynamicznie rozwijająca się placówką, która istnieje na rynku medycznym od 1999 roku. Świadczymy niepubliczne usługi zdrowotne. W naszym zespole macie Państwo dostęp do lekarzy o wysokich specjalnościach medycznych, cenionych i oddanych pacjentowi. Ich doświadczenie, wieloletnia praktyka, a przede wszystkim wiedza pozwolą Państwu na możliwość powrotu do zdrowia.</p>

            <p>Nasz zespół oferuje usługi medyczne na wysokim poziomie i miłą obsługę. Zarejestruj się już teraz!</p>

            <NavLink className="About__btn" to={`/contact`}>
                <button>Rejestracja</button>
            </NavLink>
        </div>
    )
}