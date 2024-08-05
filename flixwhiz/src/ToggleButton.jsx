export default function ToggleButton ({ className, isOpen, onClick} ) {
  return(
    <button
    className={className}
    onClick={onClick}
  >
    {isOpen ? "–" : "+"}
  </button>
  )
}