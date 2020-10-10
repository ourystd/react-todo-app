import React, { Component } from "react";
import Countryitem from "../CountryItem/CountryItem";

import axios from "axios";

export default class Countireslist extends Component {
  state = {
    countries: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get(`https://restcountries.eu/rest/v2/region/africa`)
      .then((response) => {
        this.setState({ countries: response.data, loading: false });
      });
  }

  render() {
    return this.state.loading ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : (
      <div className="row countries-list">
        {this.state.countries.map((country, index) => (
          <Countryitem key={index} country={country} />
        ))}
      </div>
    );
  }
}
