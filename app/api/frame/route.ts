import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

const imageUrls = [
  `${NEXT_PUBLIC_URL}/park-1.png`,
  `${NEXT_PUBLIC_URL}/park-2.png`,
  `${NEXT_PUBLIC_URL}/park-3.png`,
  `${NEXT_PUBLIC_URL}/park-4.png`,
];

let currentIndex = 0;

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid && message.button) {
    if (message.button === 1) {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    } else if (message.button === 2) {
      currentIndex = (currentIndex + 1) % imageUrls.length;
    }
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        { label: 'Previous Image' },
        { label: 'Next Image' },
        { action: 'link', label: 'Visit Website', target: 'https://your-website.com' },
      ],
      image: {
        src: imageUrls[currentIndex],
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
