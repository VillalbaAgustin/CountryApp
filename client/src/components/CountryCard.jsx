import React from "react";

export const CountryCard = ({ country }) => {
  return (
    <>
      <div className="flag">
        <img src={country.flags[0]} alt={country.name} />
      </div>
      <h3>{country.name}</h3>
      <div>
        <p>population: {country.population}</p>
        <p>continents: {country.continents}</p>
        <p>capital: {country.capital}</p>
      </div>
    </>
  );
};

