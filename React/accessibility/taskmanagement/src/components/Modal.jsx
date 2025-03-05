import React, { useEffect } from 'react';

// Accessible Modal Component
function AccessibleModal({ isOpen, onClose }) {
  const modalRef = React.useRef(null);
  
  // Trap focus inside the modal when it's open
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Set focus to the first focusable element inside the modal
      const firstFocusableElement = modalRef.current.querySelector('button');
      firstFocusableElement?.focus();
    }
  }, [isOpen]);

  // Handle close action
  const handleClose = () => {
    onClose();
  };

  // Handle keyboard interactions (ESC to close)
//   const handleKeyDown = (event) => {
//     if (event.key === 'Escape') {
//       handleClose();
//     }
//   };

//   // Prevent closing when clicking outside the modal
//   const handleModalClick = (event) => {
//     if (event.target === modalRef.current) {
//       handleClose();
//     }
//   };

  return (
    isOpen && (
      <div
        className="modal-overlay"
        // onClick={handleModalClick} // Close on click outside
        // onKeyDown={handleKeyDown} // Close on ESC key press
        role="dialog" 
        aria-labelledby="modal-title"
        aria-hidden={!isOpen}
        tabIndex="-1"
      >
        <div
          ref={modalRef}
          className="modal-content"
          role="document"
          aria-labelledby="modal-title"
        >
          <header>
            <h2 id="modal-title">Accessible Modal</h2>
            <button onClick={handleClose} aria-label="Close modal">×</button>
          </header>
          <div className="modal-body">
            <p>This is an example of an accessible modal dialog.</p>
          </div>
          <footer>
            <button onClick={handleClose}>Close Modal</button>
          </footer>
        </div>
      </div>
    )
  );
}

export default AccessibleModal