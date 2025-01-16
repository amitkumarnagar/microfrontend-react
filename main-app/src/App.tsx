import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import "./App.scss";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";
import ErrorBoundary from "./ErrorBoundry";

// remote imports
import App1 from "app1/app1";
import App2 from "app2/app2";

const Home: React.FC = () => <h1>Clarivate Micro-Frontend Root</h1>;

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <SideMenu />
      <main>
        <Suspense fallback={<div>Loading Albums...</div>}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app1/*" element={<App1 />} />
              <Route path="/app2" element={<App2 />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
