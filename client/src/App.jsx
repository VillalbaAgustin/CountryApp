import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createContext, useEffect, useState } from "react";

import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";
import { NavBar } from "./components";

export const ThemeContext = createContext(null);

function App() {
  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("theme");
    return localStorageTheme || "dark";
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [theme, setTheme] = useState(getDefaultTheme);
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <div className="app mapa" id={theme}>
            <NavBar />
            <AppRouter />
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
