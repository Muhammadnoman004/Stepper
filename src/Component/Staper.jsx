import React, { useState } from "react";

export default function Staper() {
  const stepMessages = ["Learn React", "Get a Job", "Earn Money"];

  const [steps, setsteps] = useState(1);

  const handleNext = () => {
    setsteps((prev) => prev + 1);
    if (steps >= 3) {
      setsteps(() => steps);
    }
  };

  const handlePrev = () => {
    setsteps((prev) => prev - 1);
    if (steps <= 1) {
      setsteps(() => steps);
    }
  };

  return (
    <>
      <main className="main">
        <section className="stepper">
          <div className="stepper__numberdiv">
            <div
              className={
                steps >= 1 ? "stepper_number active" : "stepper_number "
              }
            >
              1
            </div>
            <div
              className={
                steps >= 2 ? "stepper_number active" : "stepper_number "
              }
            >
              2
            </div>
            <div
              className={
                steps >= 3 ? "stepper_number active" : "stepper_number "
              }
            >
              3
            </div>
          </div>
          <div className="stepper__stepMessage">
            <p>
              Step {steps} : {stepMessages[steps - 1]}
            </p>
          </div>
          <div className="stepper__buttonDiv">
            <button
              className="stepper__button"
              disabled={steps == 1}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              className="stepper__button"
              disabled={steps == 3}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
