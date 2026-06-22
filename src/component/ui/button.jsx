/**
 * Reusable Button Component
 * Props:
 * text - button label
 * onClick - click handler
 */

function Button({ text, onClick }) {
  return (
    <button className="custom-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;