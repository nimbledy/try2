// app/page.tsx

import PageWithClient from "../lib/clientComponents";

export default function Page() {
  const {
    currentImageIndex,
    imageUrls,
    handlePrevImage,
    handleNextImage
  } = PageWithClient();

  return (
    <div>
      <h1>zizzamia.xyz</h1>
      <img src={imageUrls[currentImageIndex]} alt="Park Image" style={{ aspectRatio: '1:1', width: '100%' }} />
      <button onClick={handlePrevImage}>Previous Image</button>
      <button onClick={handleNextImage}>Next Image</button>
    </div>
  );
}
