import React from "react";
import "./Kiddo.css";

function Kiddo({ name, age, grade, subject, expert }) {
  return (
    <div className="comp-style">
      <div className="container">
        <div className="card">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>CGPA: {grade}</p>
          <p>Gratuation: {subject}</p>
          <p>Expertise: {expert}</p>
        </div>
      </div>
    </div>
  );
}

export default Kiddo;
