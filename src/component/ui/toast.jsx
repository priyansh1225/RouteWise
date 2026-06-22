/**
 * Toast Component
 * Props:
 * message
 */

function Toast({ message }) {
  return (
    <div className="toast">
      {message}
    </div>
  );
}

export default Toast;