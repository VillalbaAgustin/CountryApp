import React, { useEffect } from "react";
import { useCountryStore } from "../hooks/useCountryStore";
import "./homePage.css";
import { CountryCard } from "../components/CountryCard";

export const HomePage = () => {
  const { startLoadingCountries, countries } = useCountryStore();

  useEffect(() => {
    startLoadingCountries();
    // console.log(countries)
  }, []);

  console.log(countries[0]);
  return (
    <div className="container">
        {
          countries.map((country)=> 
          <div className="card">
            <CountryCard key={country.id} country={country}/>
          </div>
          )
        }
    </div>
  );
};
