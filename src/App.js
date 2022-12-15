import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import ProjectPage from "./components/Projects/ProjectsPage";
import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  const LightTheme = {
    bg: "#eee",
    fontColor: "#51595D",
    accentColor: "#007bff",
    projectColor: "#ffffff",
    projectShadow: "#00000015",
    projectShadowHover: "#b8b8d9",
  };

  const DarkTheme = {
    bg: "#161625",
    fontColor: "rgb(189, 189, 189)",
    accentColor: "#007bff",
    projectColor: "#1e1e30",
    projectShadow: "#000",
    projectShadowHover: "#000100",
  };

  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") === "true"
  );
  const ThemeHandler = useCallback(
    (event) => {
      event.preventDefault();
      setDarkTheme(!isDarkTheme);
      localStorage.setItem("isDarkTheme", !isDarkTheme);
    },
    [isDarkTheme]
  );

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <div className="App">
        <NavBar {...{ isDarkTheme, ThemeHandler }} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
