import React from 'react';
import './Contact.css';

export default function Contact() {

    return (
        <div className='Contact'>
            <h1>Zespół Gabinetów Lekarskich Medical-Vita</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5592.322735268756!2d20.02766924372237!3d50.35453948676772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abda1107bce7%3A0x3700152bba60fbe5!2sZesp%C3%B3%C5%82%20gabinet%C3%B3w%20lekarskich%20w%20Miechowie%20%22Medical%20-%20Vita%22!5e0!3m2!1spl!2spl!4v1682674575004!5m2!1spl!2spl"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className='Contact__data'>
                <div className='Contact__data__adress'>
                    <div>Adres:</div>
                    <div>ul. A. Mickiewicza 3</div>
                    <div>32-200 Miechów</div>
                </div>
                <div className='Contact__data__hours'>
                    <div>Godziny otwarcia:</div>
                    <div>pon-pt: 7:30-19:00</div>
                    <div>sob: 7:30-13:00</div>
                </div>
                <div className='Contact__data__phone'>
                    <div>Rejestracja:</div>
                    <div>Telefon: +48 41 383 33 55</div>
                    <div>Tel. kom.: +48 537 834 003</div>
                </div>
            </div>
        </div>
    )
}