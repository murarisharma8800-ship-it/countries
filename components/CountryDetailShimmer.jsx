import React from "react";
import "./CountryDetailShimmer.css";

const CountryDetailShimmer = () => {
  return (
    <main>
      <div className="country-details-container">
        <div className="back-button shimmer-back"></div>

        <div className="country-details">
          <div className="shimmer-flag"></div>

          <div className="details-text-container">
            <div className="shimmer-title"></div>

            <div className="details-text">
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetailShimmer;
