import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGrid from './components/imagegrid';
import Modal from './components/modal';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/30');
        setImages(response.data.message); 
        setLoading(false); 
      } catch (error) {
        console.error(error);
        setLoading(false); 
      }
    };

    fetchImages(); 
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}> {}
      <h1>Dog Gallery</h1>

      {}
      {loading ? (
        <div className="loading-state">
          <p>Loading...</p> {}
        </div>
      ) : (
        <ImageGrid images={images} onImageClick={setSelectedImage} />
      )}

      {}
      {selectedImage && (
        <Modal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
}

export default App;
