import React from "react";
import "./ServicePage.scss";

import { useNavigate } from "react-router-dom";

function ServicePage() {
  let navigate = useNavigate();

  return (
    <div className="service-wrapper">
      <div className="service-con">
        <h1 className="service-title">Continuous Lactation Support</h1>
        <h2 className="sub-title">3 weeks of virtual support</h2>
        <p className="service-caption">
          This is a great for parents who have specific challenges they would
          like to work on or persons who would just feel secure with long term
          support until they’re comfortable. It is available to prenatal and
          postpartum parents.
        </p>
        <div className="package-con">
          <p className="package-header">Includes:</p>
          <ul className="package-items">
            <li>Initial virtual visit 1-1.5hr depending on need</li>
            <li>Four 30-45 minute follow up sessions via phone or zoom</li>
          </ul>
        </div>

        <div className="service-footer">
          <p className="price">$275</p>
          <button
            className="button"
            onClick={() => navigate("/book/lactation-support")}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="divider" />
      <div className="service-con">
        <h1 className="service-title">Individual Prenatal Support</h1>
        <p className="service-caption">
          Persons who are pregnant can book a consultation to prepare themselves
          to feed their babies. This can look like lactation education via
          presentation, conversation and planning out your personal goals
          together.
        </p>
        <div className="package-con">
          <p className="package-header">Includes:</p>
          <ul className="package-items">
            <li>2 hour virtual session</li>
            <li>Individual prenatal support </li>
            <li>Email follow up with list of resources</li>
          </ul>
        </div>
        <div className="service-footer">
          <p className="price">$100</p>
          <button
            className="button"
            onClick={() => navigate("/book/prenatal-support")}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="divider" />
      <div className="service-con">
        <h1 className="service-title">How To Human Milk Workshop</h1>
        <div className="package-con">
          <p className="package-header">Includes:</p>
          <ul className="package-items">
            <li>Prenatal Lactation Group Class</li>
            <li>Baby feeding plan</li>
          </ul>
        </div>
        <div className="service-footer">
          <p className="price">$65</p>
          <button
            className="button"
            onClick={() => navigate("/book/childbirth-education")}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
