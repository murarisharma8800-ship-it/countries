import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";

import { ThemeProvider } from "./contexts/ThemeContext.js";
const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
