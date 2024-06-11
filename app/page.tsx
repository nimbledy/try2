"use client";

import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import { useState } from 'react';

const imageUrls = [
  `${NEXT_PUBLIC_URL}/park-1.png`,
  `${NEXT_PUBLIC_URL}/park-2.png`,
  `${NEXT_PUBLIC_URL}/park-3.png`,
];

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [imageUrls[0]],
  },
};

function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <>
      <h1>zizzamia.xyz</h1>
      <img src={imageUrls[currentImageIndex]} alt="Park Image" style={{ aspectRatio: '1:1', width: '100%' }} />
      <button onClick={handleNextImage}>Следующая картинка</button>
    </>
  );
}

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Следующая картинка',
      action: 'update',
      onClick: () => handleNextImage(), // Предполагается, что ваша среда поддержки это
    },
  ],
  image: {
    src: imageUrls[0],
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export default Page;
