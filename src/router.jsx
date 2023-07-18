import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/main-content/MainPage";

function Routers() {
  return (
    // <MainPage />
    <Router>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </Router>
  );
}

export default Routers;
