// src/components/ContainerFluid.js
import React from "react";
import "../styles/ContainerFluid.css";

export const ContainerFluid = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md">
          <div className="h">SUMMER 2024</div>
          <div className="headline">NEW COLLECTION</div>
          <p className="text-wrapper">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="cta">
            <div className="button-btn-primary">
              <div className="div">SHOP NOW</div>
            </div>
          </button>
        </div>
        <div className="hero-cover-wrapper">
          <div className="hero-cover">
            <div className="none">
              <div className="overlap-group">
                <div className="ellipse" />
                <div className="ellipse-2" />
                <img className="technology" alt="Technology" src="assets/images/technology-1.png" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
                <div className="ellipse-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
