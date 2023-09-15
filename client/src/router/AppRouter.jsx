import { Route, Routes /*, Navigate */ } from "react-router-dom";
import { DetailPage, FormPage, HomePage, LandingPage } from "../pages";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/country/:id" element={<DetailPage />} />
      <Route path="/activities" element={<FormPage />} />
    </Routes>
  );
};
