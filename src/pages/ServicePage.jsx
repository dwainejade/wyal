import React from "react";
import "../Components/Home/Services.scss";

import { useParams, useNavigate } from "react-router-dom";
import { getService } from "../data/servicesData";

function ServicePage() {
  let params = useParams();
  let service = getService(params.serviceId);
  let navigate = useNavigate();

  return (
    <div className="services-wrapper">
      <h1>Service Page</h1>
      <h1>{service.title}</h1>
      {/* <img src={""} alt="" className="services-image" /> */}
      {/* <p className="services-caption">{service.description}</p> */}
      <buttton
        className="button"
        onClick={() => navigate(`/book/${service.link}`)}
      >
        Book Now
      </buttton>
    </div>
  );
}

export default ServicePage;
