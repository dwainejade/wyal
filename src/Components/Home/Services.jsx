import React from "react";
import "./Services.scss";
import { useNavigate } from "react-router-dom";
import { getServices, getService } from "../../data/servicesData";

function Services() {
  let services = getServices();
  let navigate = useNavigate();
  let service = getService(879);
  console.table("service: ", service);
  return (
    <div className="services-wrapper">
      <h1 className="services-title">Services</h1>

      <div className="card-wrapper">
        {services.map((service) => (
          <div className="services-card" key={service.title}>
            <img
              src={service.imageSrc}
              alt={`${service.title} icon`}
              className={`services-image ${service.title}`}
            />
            <h1 className="services-title">{service.title}</h1>
            <p className="services-caption">{service.caption}</p>
            <buttton
              className="button"
              onClick={() => navigate(`/services/${service.link}`)}
            >
              Learn More
            </buttton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
