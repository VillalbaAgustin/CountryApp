import React from 'react'
import { useCountryStore } from '../hooks/useCountryStore'

export const HomePage = () => {

  const { startLoadingCountries }  = useCountryStore();

  startLoadingCountries();

console.log(process.env)

  return (
    <div>
      <h1>HomePageee</h1>
      <h1>Countries</h1>
    </div>
  )
}
