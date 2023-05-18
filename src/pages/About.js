import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

export default function About() {

    return (
        <div className='About'>
            <h1>Nasza misja</h1>
            <p><span>Zespół Gabinetów Lekarskich Medical-Vita</span> jest polską, innowacyjną, dynamicznie rozwijająca się placówką, która istnieje na rynku medycznym od 1999 roku. Świadczymy niepubliczne usługi zdrowotne. W naszym zespole macie Państwo dostęp do lekarzy o wysokich specjalnościach medycznych, cenionych i oddanych pacjentowi. Ich doświadczenie, wieloletnia praktyka, a przede wszystkim wiedza pozwolą Państwu na możliwość powrotu do zdrowia.</p>

            <NavLink className="About__btn" to={`/contact`}>
                <button>Rejestracja</button>
            </NavLink>

            <p>Nasz zespół oferuje usługi medyczne na wysokim poziomie i miłą obsługę. Zarejestruj się już teraz!</p>

            <h1>Świadczymy</h1>

            <div className='About__usg'>
                <img src={require('../assets/usg.jpg')} />
                {/* firma GEERS */}
                <div>
                    <p>Dysponujemy profesjonalnym sprzętem. Z nami mogą Państwo wykonać <span>badanie słuchu</span> lub <span>USG</span> m.in.:</p>
                    <ul>
                        <li>tarczycy</li>
                        <li>piersi</li>
                        <li>jamy brzusznej</li>
                        <li>urologiczne</li>
                    </ul>
                </div>
            </div>

            <div className='About__license'>
                <p>W naszych gabinetach mogą Państwo uzyskać zaświadczenia niezbędne dla niektórych licencji. W zakresie kompetencji naszego Internisty są m.in. <span>pozwolenia na broń</span>, oraz <span>badania kierowców i sportowców</span></p>

                <img src={require('../assets/shooting.jpg')} />
            </div>

            <div className='About__others'>
                <img src={require('../assets/odnowa.jpeg')}/>

                <p>Szukasz <span>dentysty</span> lub <span>fizjoterapeuty</span>? A może chcesz skorzystać z <a href='https://www.facebook.com/SolariumVacuFit/?locale=pl_PL'>solarium</a> albo <span>leczniczego</span> lub <span>relaksującego masażu</span> w salonie <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow?do=invite&_branch_match_id=1016433891075084321&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL4wy9K4MMipPrUwCAFgQoA4iAAAA'>ODNOWA</a>? W naszym obiekcie znajdziesz całą gamę usług zdrowotnych. Zadzwoń do nas a chętnie przekierujemy Cię w odpowiednie ręce wykwalifikowanych specjalistów lub odwiedź nas pod adresem <span>A. Mickiewicza 3 w Miechowie</span>.</p>   
            </div>

        </div>
    )
}