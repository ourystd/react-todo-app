import React, { Component } from 'react'
import Countryitem from '../CountryItem/CountryItem'

export default class Countireslist extends Component {
    
    state = {
        countries: []
    }

    render() {
        return (
            <div className="countries-list">
                {
                    this.state.countries.map(country => (
                        <Countryitem country={country} />
                    ))
                }
            </div>
        )
    }
}
