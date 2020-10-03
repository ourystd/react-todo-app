import React, { Component } from 'react'
import Countryitem from '../CountryItem/CountryItem'

import axios from 'axios'

export default class Countireslist extends Component {
    
    state = {
        countries: [],
        loading: true,
    }
    
    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/region/africa`)
        .then(response => {
            this.setState({countries: response.data, loading: false});
        })
    }
    
    

    render() {
        return (
            (this.state.loading) ? 'Fecthing data...'  :
            <div className="row countries-list">
            {
                this.state.countries.map((country, index) => (
                    <Countryitem key={index} country={country} />
                ))
            }
            </div>
        )
    }
}
