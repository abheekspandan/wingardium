import React, { useState, useEffect } from "react";
import "./modal.css";

function Modal({ image, index, bgColor, onClose, handleBgColorChange }) {
  const [modalBgColor, setModalBgColor] = useState(bgColor);

  useEffect(() => {
    setModalBgColor(bgColor); // Sync modal color with the passed color
  }, [bgColor]);

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setModalBgColor(newColor); // Update modal background color
    handleBgColorChange(index, newColor); // Update color of the specific image in the grid
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: modalBgColor }}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        {image ? (
          <img src={image} alt="Selected Dog" className="modal-image" />
        ) : (
          <p>No image provided</p>
        )}

        {/* Color Picker */}
        <div className="color-picker">
          <label htmlFor="color-picker"> BACKGROUND <input
            id="color-picker"
            type="color"
            value={modalBgColor}
            onChange={handleColorChange}
          /></label>
          
        </div>
      </div>
    </div>
  );
}

export default Modal;
