import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const step = 0;
  const [currentStep, setCurrentStep] = useState(0);

  const increaseStep = () => {
    if(currentStep === 2) { 
      setCurrentStep(0)
      return;
    }
    setCurrentStep(prevStep => prevStep + 1);
    
  };

  const decreaseStep = () => {
    if(currentStep === 0) {
      setCurrentStep(2)
      return;
    }
    setCurrentStep(prevStep => prevStep -1)
  };

  return (
    <div className="steps">
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
      </div>
    </div>
  );
}

export default App;
