import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    isLoading: false,
  },

  reducers: {
    startLoadingCountries: (state /* action */) => {
      state.isLoading = true;
    },
    setCountries: (state, action) => {
      console.log(action);
    },
  },
});

export const { startLoadingCountries, setCountries } = countrySlice.actions;
