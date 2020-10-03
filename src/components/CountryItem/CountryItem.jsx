import React from 'react'

import capitalIcon from './icons/capitale.svg'
import locationIcon from './icons/location.svg'
import populationIcon from './icons/population.svg'
import './country-item.scss'

export default function Countryitem({country}) {

    return (
        <div className="country-card">
            <h2 className="country-name">{country.name}</h2>
            <div className="country-flag-wrapper">
                <img src={country.flag} alt={country.name + "'s flag"}/>
            </div>
            <ul className="details-wrapper">
                <li className="detail-item">
                    <span className="icon">
                        <img src={capitalIcon} alt="icon"/>
                    </span>
                    <span>{country.capital}</span> 
                </li>
                
                <li className="detail-item">
                    <span className="icon">
                        <img src={locationIcon} alt="icon"/>
                    </span>
                    <span>{country.subregion}</span> 
                </li>
                
                <li className="detail-item">
                    <span className="icon">
                        <img src={populationIcon} alt="icon"/>
                    </span>
                    <span>{String(country.population).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}</span> 
                </li>
            </ul>
        </div>
    )
}
