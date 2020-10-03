import React from 'react'

export default function Countryitem(props) {

    return (
        <div className="country-card">
            <h2 className="country-name">Country Name</h2>
            <div className="country-flag-wrapper">
                <img src="" alt="country_name's flag"/>
            </div>
            <ul className="details-wrapp">
                <li classNam="detail-item">
                    <img src="" alt="icon"/>
                    <span>Data</span> 
                </li>
                
                <li classNam="detail-item">
                    <img src="" alt="icon"/>
                    <span>Data</span> 
                </li>
                
                <li classNam="detail-item">
                    <img src="" alt="icon"/>
                    <span>Data</span> 
                </li>
            </ul>
        </div>
    )
}
