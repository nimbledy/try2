import { useState } from 'react';

const imageUrls = [
  '/park-1.png',
  '/park-2.png',
  '/park-3.png',
  '/park-4.png',
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
    </>
  );
}
