import React from 'react';
import './DoctorPage.css';
import { useParams, NavLink } from 'react-router-dom';
import DoctorPic from "../assets/harold.jpg";
// import DoctorPic from "../../public/assets/harold.jpg";
const biogram = <>
        <h1>Dr Zbigniew Szydłowski</h1>
        <h3>Specjalista Chorób Wewnętrznych</h3>
        <p>Lekarz specjalista chirurg chorób uszu, nosa i gardła, otorynolaryngolog, Regionalny Delegat Europejskiej Akademii Chirurgów Plastyków Twarzy, założyciel i właściciel Centrum Medycznego Krajmed.</p>

        <p>Dr Marek Krajewski jest absolwentem Akademii Medycznej w Warszawie, specjalizuje się w laryngologicznych operacjach endoskopowych. Umiejętności i doświadczenie zawodowe zdobywał m.in. podczas pobytu w RPA, gdzie po uzyskaniu specjalizacji z otorynolaryngologii pełnił funkcję Kierownika Kliniki Otorynolaryngologii Uniwersytetu Medycznego Południowej Afryki, w  Pretorii. Stypendysta z zakresu otologii i neurootologii w Michigan Ear Institute w Detroit (USA), Członek Amerykańskiego Towarzystwa Neurootologicznego oraz innych krajowych i międzynarodowych towarzystw medycznych. Od 2003 roku Delegat Regionalny elitarnej Europejskiej Akademii Chirurgii Plastyków Twarzy. Celem Akademii jest łączenie leczenia funkcjonalnego i kosmetycznego nosa i twarzy. Podczas okresowo organizowanych wspólnych spotkań omawiane są obowiązujące techniki operacyjne i standardy opieki nad pacjentami w zakresie chirurgii plastycznej twarzy (www.eafps.org).</p>

        <p>Punktem zwrotnym w karierze lekarskiej Dr Marka Krajewskiego było pozyskanie praktycznych umiejętności wykonywania zabiegów laryngologicznych metodami endoskopowymi. W 1989 roku Dr Krajewski odbył podstawowy kurs chirurgii endoskopowej pod okiem prof. Stammbergera i kontynuował kształcenie w tym kierunku w 1990 roku na kursie zaawansowanej chirurgii endoskopowej. Od 1990 roku Dr Krajewski zajmuje się praktycznie schorzeniami nosa i gardła, w trakcie diagnostyki i leczenia których wykorzystuje sprzęt endoskopowy.  Największy sukces zawodowy – opracowanie endoskopowej techniki operacji migdałków, która całkowicie (od 1998 roku) wyeliminowała występowanie pierwotnych krwawień pooperacyjnych.</p>

        <p>W 2017 roku uczestniczył w XIX Międzynarodowym Kongresie Medycyny Hiperbarycznej.</p>
    </>

export default function DoctorPage() {
    const { id } = useParams();
    
    return (
        <div className='DoctorPage'>
            <img src={DoctorPic} alt="Doctor's picture" />
            <div className='DoctorPage__bio'>
                {biogram}
            </div>
            <div className="DoctorPage__buttons-wrapper">
                <button><NavLink to='/Contact'>Umów wizytę</NavLink></button>
                <button><NavLink to='/clinics'>Wróć do listy</NavLink></button>
            </div>
        </div>
    )
}