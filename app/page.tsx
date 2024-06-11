import { useClient } from 'next/data-client';
import { useState } from 'react';

const imageUrls = [
  '/park-1.png',
  '/park-2.png',
  '/park-3.png',
  '/park-4.png',
];

const Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <>
      <h1>Valera zora</h1>
      <img src={imageUrls[currentImageIndex]} alt="Park Image" style={{ aspectRatio: '1:1', width: '100%' }} />
      <button onClick={handlePrevImage}>Previous Image</button>
      <button onClick={handleNextImage}>Next Image</button>
      <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
    </>
  );
};

export default useClient(Page);
