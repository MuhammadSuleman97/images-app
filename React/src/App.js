import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card/card.component';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar.component';
import UploadImage from './components/uplaod-image/upload-image.component';
import { Alert } from 'react-bootstrap'; 

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/images')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setImages(data.images))
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch images. Please try again later.');
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={error ? <Alert variant="danger">{error}</Alert> : <CardList images={images} />} />
        <Route path="/upload-image" element={<UploadImage />} />
      </Routes>
    </div>
  );
}

export default App;
