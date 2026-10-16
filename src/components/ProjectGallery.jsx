import { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function ProjectGallery({ project }) {
  const { gallery } = project.details;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useAnimateOnScroll();

  if (!gallery || gallery.length === 0) return null;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <section ref={sectionRef} className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {gallery.map((image, idx) => (
            <img
              key={idx}
              src={image.url}
              alt={image.caption}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setCurrentImage(idx);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-2xl max-h-96 flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <img
              src={gallery[currentImage].url}
              alt={gallery[currentImage].caption}
              className="w-full h-auto rounded-lg"
            />

            {/* Caption */}
            <p className="text-white text-center mt-4">{gallery[currentImage].caption}</p>

            {/* Navigation */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="text-white text-2xl hover:bg-white/20 px-4 py-2 rounded"
              >
                ←
              </button>
              <span className="text-white">
                {currentImage + 1} / {gallery.length}
              </span>
              <button
                onClick={handleNext}
                className="text-white text-2xl hover:bg-white/20 px-4 py-2 rounded"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
