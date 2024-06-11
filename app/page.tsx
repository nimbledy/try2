"use client";

import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { NEXT_PUBLIC_URL } from './config';
import { useState } from 'react';

const imageUrls = [
  `https://ibb.co/3F3PRJX`,
];

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Previous Image',
    },
    {
      label: 'Next Image',
    },
    {
      action: 'link',
      label: 'Visit Website',
      target: 'https://your-website.com',
    },
  ],
  image: {
    src: imageUrls[0],
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

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
