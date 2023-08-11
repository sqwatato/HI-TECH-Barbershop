import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 custom-hidden">
      <h1 className="text-4xl md:text-5xl font-light main-font text-white p-6 text-center">
        Reviews
      </h1>
      <div className="box grid grid-cols-3 gap-3" id="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="quadrant overflow-hidden p-4">
            <img src={image} alt={`Quadrant ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
