import React from 'react';
import './JoinUs.css';

export default function JoinUs() {
    
    return (
        <div className='JoinUs'>
            <h1>Dołącz do naszego zespołu</h1>
                <div className="JoinUs__wrapper">
                    <img className='JoinUs__photo' src={require('../assets/dermatologist.jpg')}/>
                    <div className='JoinUs__text'>
                        <p>Zespół Gabinetów Lekarskich Medical-Vita zaprasza do współpracy <span>lekarza specjalistę w dziedzinie dermatologii</span> oraz <span>lekarza wykonującego zabiegi z zakresu medycyny estetycznej</span> (botoks, kwas hialuronowy). Oferujemy pracę w kameralnych wnętrzach prywatnej przychodni i przyjazną atmosferę.</p> <p>Zapraszamy do kontaktu.</p>
                    </div>
                </div>
        </div>
    )
}