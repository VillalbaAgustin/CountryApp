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
      const data = await countryApi.get("/countries");
      // console.log(data);
      dispatch(setCountries(data))
    } catch (error) {
      // throw error;
      console.log(error.response.data);
    }
  };

  return {
    //* Properties

    //* Methods
    startLoadingCountries,
  };
};
