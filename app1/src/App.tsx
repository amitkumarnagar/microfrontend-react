import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import AlbumsProvider from "./contexts/AlbumsContext";
import Dashboard from "./pages/Dashboard";
import Albums from "./pages/Albums";

const App: React.FC = () => {
  return (
    <AlbumsProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<Albums />} />
      </Routes>
    </AlbumsProvider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);

export default App;
