import React, { useState } from "react";
import Modal from "./modal";
import "./imagegrid.css";

function ImageGrid({ images }) {
  const [cardColors, setCardColors] = useState(
    Array(images.length).fill("#ffffff")
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalBgColor, setModalBgColor] = useState("#ffffff");

  const handleBgColorChange = (index, newColor) => {
    const updatedColors = [...cardColors];
    updatedColors[index] = newColor;
    setCardColors(updatedColors);
    setModalBgColor(newColor);
  };

  const handleImageClick = (url, index) => {
    setSelectedImage(url);
    setSelectedIndex(index);
    setModalBgColor(cardColors[index]); 
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="image-grid">
        {images.map((url, index) => (
          <div
            key={index}
            className="image-card"
            style={{ backgroundColor: cardColors[index] }}
          >
            <img
              src={url}
              alt={`Dog ${index + 1}`}
              className="image-preview"
              onClick={() => handleImageClick(url, index)}
            />

            
          </div>
        ))}
      </div>

      {selectedImage && selectedIndex !== null && (
        <Modal
          image={selectedImage}
          index={selectedIndex}
          bgColor={modalBgColor}
          onClose={closeModal}
          handleBgColorChange={handleBgColorChange}
        />
      )}
    </>
  );
}

export default ImageGrid;
