import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ImageGallery displays a list of images with main/thumbnail view and a detailed full-screen lightbox.
 * @param {Object} props
 * @param {string[]} props.images - Array of image URL strings
 * @param {string} props.title - Room/house title for alt tags
 */
export default function ImageGallery({ images = [], title = 'Property Image' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex, images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] rounded-2xl bg-cream-200 flex items-center justify-center border border-cream-300">
        <span className="text-sm font-medium text-charcoal-400">No Images Available</span>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Primary Image Viewport */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-cream-100 border border-cream-200/80 group">
        <img
          src={images[activeIndex]}
          alt={`${title} - View ${activeIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
          onClick={() => openLightbox(activeIndex)}
        />
        {/* Click to expand overlay */}
        <div 
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
          onClick={() => openLightbox(activeIndex)}
        >
          <span className="bg-black/50 text-white font-medium text-xs px-4 py-2 rounded-full backdrop-blur-sm">
            Click to Zoom
          </span>
        </div>
      </div>

      {/* Thumbnails grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`aspect-video rounded-xl overflow-hidden bg-cream-100 border transition-all ${
                activeIndex === idx 
                  ? 'border-terracotta-500 ring-2 ring-terracotta-100' 
                  : 'border-cream-200 hover:border-terracotta-200'
              }`}
            >
              <img
                src={img}
                alt={`${title} - Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </button>
          ))}
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 md:p-8 animate-fade-in">
          {/* Header */}
          <div className="flex justify-between items-center text-white w-full">
            <span className="text-sm font-medium">
              {lightboxIndex + 1} / {images.length} — {title}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Main Stage */}
          <div className="flex-grow flex items-center justify-center relative my-4">
            {/* Prev Trigger */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-10 p-2.5 bg-black/45 hover:bg-black/75 rounded-full text-white transition-colors focus:outline-none border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Displayed Image */}
            <img
              src={images[lightboxIndex]}
              alt={`${title} - Zoomed View ${lightboxIndex + 1}`}
              className="max-h-[75vh] max-w-[90vw] md:max-h-[80vh] md:max-w-[80vw] object-contain select-none rounded-lg"
            />

            {/* Next Trigger */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-10 p-2.5 bg-black/45 hover:bg-black/75 rounded-full text-white transition-colors focus:outline-none border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails */}
          {images.length > 1 && (
            <div className="flex justify-center space-x-2 py-4 overflow-x-auto max-w-full">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    lightboxIndex === idx 
                      ? 'border-terracotta-500 scale-105' 
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
