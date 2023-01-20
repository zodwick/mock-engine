import React from "react";
import Questiions from "./questiions";

export default function Quiz() {
  function onNext() {
    console.log("h");
  }

  function onPrev() {
    console.log("hh");
  }
  return (
    <div className="container">
      <h1 className="tittle text-light">Mock Quiz</h1>

      {/* display questions */}
      <Questiions />
      <div>
        <button className="btn prev" onClick={onNext}>
          previous
        </button>
        <button className="btn next" onClick={onPrev}>
          next
        </button>
      </div>
    </div>
  );
}
