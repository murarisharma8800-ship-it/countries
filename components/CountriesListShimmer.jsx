import React from "react";
import "./CountriesListShimmer.css";

const CountriesListShimmer = () => {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((el, i) => (
        <div className="country-card shimmer-card" key={i}>
          <div className="shimmer-image"></div>
          <div className="card-text">
            <div className="shimmer-text"></div>
            <div className="shimmer-text short"></div>
            <div className="shimmer-text short"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountriesListShimmer;
