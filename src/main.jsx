import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Services from "./Components/Home/Services";
import Service from "./Components/Home/Service";

import "./styles/reset.css";
import ScrollToTop from "./helpers/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />}>
            <Route path=":serviceId" element={<Service />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", height: "75vh" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
