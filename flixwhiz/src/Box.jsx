import { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function Box({ children }) {

  const [isOpen, setIsOpen] = useState(true);
  const handleOnClick = () => {
    setIsOpen((open) => !open)
  }
  return (
    <div className="box">
      <ToggleButton isOpen={isOpen} className="btn-toggle" onClick={handleOnClick} />
      {isOpen && (
        children
      )}
    </div>
  )
}