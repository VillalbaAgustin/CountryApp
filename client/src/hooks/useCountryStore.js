// import { useDispatchApp, useSelectorApp } from "./store";

import { countryApi } from "../api/countryApi";
import { setCountries } from "../store/countrySlice";
// import { useDispatchApp } from "./store";
import { /* useSelector, */ useDispatch } from "react-redux";
// import {  useStore } from "./store";

export const useCountryStore = () => {
  const  dispatch  = useDispatch();

  const startLoadingCountries = async () => {
    try {
      const res = await countryApi.get("/countries");
      console.log(res.data);
      dispatch(setCountries(res.data))
    } catch (error) {
      console.log(error)
    }
  };

  return {
    //* Properties

    //* Methods
    startLoadingCountries,
  };
};
