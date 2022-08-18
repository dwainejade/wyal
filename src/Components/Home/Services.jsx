import React from "react";
import "./Services.scss";

import { useNavigate } from "react-router-dom";

function Services() {
  let navigate = useNavigate();

  return (
    <div className="services-wrapper">
      <h1 className="services-title">Services</h1>
      <div className="card-wrapper">
        <div className="services-card">
          {/* <img src="" alt="icon" className="services-image" /> */}
          <h1 className="services-title">Lactation Support</h1>
          {/* <p className="services-caption"></p> */}
          <buttton className="button" onClick={() => navigate("/services")}>
            See Options
          </buttton>
        </div>
      </div>
    </div>
  );
}

export default Services;
