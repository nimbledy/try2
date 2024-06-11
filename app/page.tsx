"use client";

import { useState } from 'react';
import { NEXT_PUBLIC_URL } from './config';

const imageUrls = [
  `${NEXT_PUBLIC_URL}/park-1.png`,
  `${NEXT_PUBLIC_URL}/park-2.png`,
  `${NEXT_PUBLIC_URL}/park-3.png`,
  `${NEXT_PUBLIC_URL}/park-4.png`,
];

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <>
      <h1>zizzamia.xyz</h1>
      <img src={imageUrls[currentImageIndex]} alt="Park Image" style={{ aspectRatio: '1:1', width: '100%' }} />
      <button onClick={handlePrevImage}>Previous Image</button>
      <button onClick={handleNextImage}>Next Image</button>
      <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
    </>
  );
}
