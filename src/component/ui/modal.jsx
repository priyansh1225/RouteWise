/**
 * Modal Component
 * Props:
 * title
 * content
 */

function Modal({ title, content }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Modal;