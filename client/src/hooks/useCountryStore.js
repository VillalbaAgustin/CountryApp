// import { useDispatchApp, useSelectorApp } from "./store";

import { countryApi } from "../api/countryApi";
import { setCountries } from "../store/countrySlice";
import { /* useSelector, */ useDispatch, useSelector } from "react-redux";


export const useCountryStore = () => {
  const  dispatch  = useDispatch();
  const { countries } = useSelector((state) => state.country)

  const startLoadingCountries = async () => {
    try {
      const res = await countryApi.get("/countries");
      // console.log(res.data);
      dispatch(setCountries(res.data))
    } catch (error) {
      // console.log(error)
    }
  };

  return {
    //* Properties
    countries,
    //* Methods
    startLoadingCountries,
  };
};
