import React from 'react'

import capitalIcon from './icons/capitale.svg'
import locationIcon from './icons/location.svg'
import populationIcon from './icons/population.svg'

export default function Countryitem({country}) {

    return (
        <div className="country-card">
            <h2 className="country-name">{country.name}</h2>
            <div className="country-flag-wrapper">
                {/* <img src={country.flag} alt={country.name + "'s flag"}/> */}
            </div>
            <ul className="details-wrapp">
                <li className="detail-item">
                    <img src={capitalIcon} alt="icon"/>
                    <span>{country.capital}</span> 
                </li>
                
                <li className="detail-item">
                    <img src={locationIcon} alt="icon"/>
                    <span>{country.subregion}</span> 
                </li>
                
                <li className="detail-item">
                    <img src={populationIcon} alt="icon"/>
                    <span>{country.population}</span> 
                </li>
            </ul>
        </div>
    )
}
