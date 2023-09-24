// import { useDispatchApp, useSelectorApp } from "./store";

import { countryApi } from "../api/countryApi";


export const useCountryStore = () => {

  const startLoadingCountries = async () => {
    try {
      const data = await countryApi.get('/countries');
      console.log(data)
    } catch (error) {
      
    }
  }

  return{
    //* Properties

    //* Methods
    startLoadingCountries,
  }
}
