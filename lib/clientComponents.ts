// lib/clientComponents.ts

import { useClient } from 'next/data-client';
import { useState } from 'react';

function useClientPageWithState() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    '/park-1.png',
    '/park-2.png',
    '/park-3.png',
    '/park-4.png',
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return {
    currentImageIndex,
    imageUrls,
    handlePrevImage,
    handleNextImage
  };
}

export default useClient(useClientPageWithState);
