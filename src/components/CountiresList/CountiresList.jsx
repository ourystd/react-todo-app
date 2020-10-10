import React, { useState, useEffect } from "react";
import Countryitem from "../CountryItem/CountryItem";

import axios from "axios";

const Countireslist = () => {
  const [state, setState] = useState({ countries: [], loading: true });

  // Load ressouces onComponentDidMount
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/africa`)
      .then((response) => {
        setState({ countries: response.data, loading: false });
      });
  }, []);

  return state.loading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="row countries-list">
      {state.countries.map((country, index) => (
        <Countryitem key={index} country={country} />
      ))}
    </div>
  );
};

export default Countireslist;
