import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const imageUrls = [
  `${NEXT_PUBLIC_URL}/park-1.png`,
  `${NEXT_PUBLIC_URL}/park-2.png`,
  `${NEXT_PUBLIC_URL}/park-3.png`,
  `${NEXT_PUBLIC_URL}/park-4.png`,
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

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [imageUrls[0]],
  },
  other: {
    ...frameMetadata,
  },
};
