import React from "react";
import "../style/Application.css"
import Footer from "../component/Footer";

function Application() {
  return ( <>

    <div className="step">
      <div className="step-text">
        <h1>Step 1</h1>
        <h2>Step 2</h2>
        <h2>Step 3</h2>
        <h2>Step 4</h2>
        <h2>Step 5</h2>

      </div>

      <div className="circle"></div>
    </div>
      <Footer />
    </>
  )
}

export default Application;
