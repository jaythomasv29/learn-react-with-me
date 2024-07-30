import { useEffect, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateInterval, setDateInterval] = useState(1);

  // useEffect(() => {
  //   const updateDate = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000);

  //   return () => clearInterval(updateDate);
  // }, []);

  const increaseDay = () => {
    setCurrentDate(
      new Date(currentDate.setDate(currentDate.getDate() + dateInterval))
    );
  };

  const decreaseDay = () => {
    /**
     * In this specific case, not relying on the previous state, you can indeed directly set the new date value using
     */
    setCurrentDate(
      new Date(currentDate.setDate(currentDate.getDate() - dateInterval))
    );
    console.log(currentDate);
  };

  const increaseStep = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const toggleDisplay = () => {
    setToggle((prevToggle) => !prevToggle);
    console.log(toggle);
  };

  const decreaseStep = () => {
    if (currentStep === 0) {
      setCurrentStep(2);
      return;
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      {toggle ? (
        <button onClick={toggleDisplay} className="close">
          &times;
        </button>
      ) : (
        <button onClick={toggleDisplay} className="close">
          +
        </button>
      )}
      <>
        <div className="steps">
          {toggle ? (
            <>
              <div className="numbers">
                <div className={currentStep === 0 ? `active` : ""}>1</div>
                <div className={currentStep === 1 ? `active` : ""}>2</div>
                <div className={currentStep === 2 ? `active` : ""}>3</div>
              </div>
              <p className="message">
                Step {currentStep + 1}: {messages[currentStep]}
              </p>
              <div className="buttons">
                <button
                  style={{ backgroundColor: "#7960f2", color: "#fff" }}
                  onClick={decreaseStep}
                >
                  Previous
                </button>
                <button
                  style={{ backgroundColor: "#7960f2", color: "#fff" }}
                  onClick={increaseStep}
                >
                  Next
                </button>

                <button
                  style={{ backgroundColor: "#7960f2", color: "#fff" }}
                  onClick={toggleDisplay}
                >
                  Toggle Off
                </button>
              </div>
            </>
          ) : (
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7960f2", color: "#fff" }}
                onClick={toggleDisplay}
              >
                Toggle On
              </button>
            </div>
          )}
        </div>

        <div className="steps">
          <p className="message">
            {currentDate > new Date()
              ? `${Math.floor(
                  (currentDate.getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                )} ${currentDate.toDateString()} from today`
              : `${Math.floor(
                  (new Date().getTime() - currentDate.getTime()) /
                    (1000 * 60 * 60 * 24)
                )} ${currentDate.toDateString()} ago`}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#f960f3", color: "#fff" }}
              onClick={decreaseDay}
            >
              - Day(s)
            </button>
            <button
              style={{ backgroundColor: "#f960f3", color: "#fff" }}
              onClick={increaseDay}
            >
              + Day(s)
            </button>
          </div>

          <p className="message">Current day interval: {dateInterval}</p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "black", color: "#fff" }}
              onClick={() =>
                setDateInterval((prevInterval) => prevInterval - 1)
              }
            >
              -
            </button>
            <button
              style={{ backgroundColor: "black", color: "#fff" }}
              onClick={() =>
                setDateInterval((prevInterval) => prevInterval + 1)
              }
            >
              +
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
