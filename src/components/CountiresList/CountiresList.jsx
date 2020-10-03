import React, { Component } from 'react'
import Countryitem from '../CountryItem/CountryItem'

import axios from 'axios'

export default class Countireslist extends Component {
    
    state = {
        countries: [1, 2, 3, 4]
    }
    
    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/region/africa`)
        .then(response => {
            this.setState({countries: response.data})
        })
    }
    
    

    render() {
        return (
            <div className="countries-list">
                {
                    this.state.countries.map((country, index) => (
                        <Countryitem key={index} country={country} />
                    ))
                }
            </div>
        )
    }
}
