import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import PageNotFound from "./views/PageNotFound";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
