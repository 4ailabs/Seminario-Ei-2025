import React from 'react';
import { useLazyImage } from '../useLazyImage';

interface LazyGalleryImageProps {
  src: string;
  index: number;
  alt?: string;
}

const LazyGalleryImage: React.FC<LazyGalleryImageProps> = ({ 
  src, 
  index, 
  alt = `Seminario anterior ${index + 1}` 
}) => {
  // Optimizar URL de Squarespace para diferentes tamaños
  const getOptimizedSrc = (originalSrc: string, width: number = 400) => {
    // Reemplazar el parámetro format con un tamaño específico
    return originalSrc.replace(/format=\d+w/, `format=${width}w`);
  };

  const optimizedSrc = getOptimizedSrc(src, 400);
  const fallbackSrc = getOptimizedSrc(src, 200); // Imagen más pequeña como fallback

  const {
    imgRef,
    imageSrc,
    isLoaded,
    isError,
    isInView,
    handleLoad,
    handleError,
  } = useLazyImage(optimizedSrc, { 
    threshold: 0.1, 
    rootMargin: '100px',
    fallbackSrc 
  });

  return (
    <div className="relative overflow-hidden rounded-lg bg-slate-800 group">
      {/* Placeholder/Skeleton */}
      {!isLoaded && !isError && (
        <div className="w-full h-48 sm:h-56 bg-slate-700 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-slate-600 border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Imagen real */}
      {imageSrc && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          className={`w-full h-48 sm:h-56 object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-105`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Error state */}
      {isError && (
        <div className="w-full h-48 sm:h-56 bg-slate-700 flex flex-col items-center justify-center text-slate-400">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">Error al cargar</span>
        </div>
      )}

      {/* Overlay hover effect */}
      {isLoaded && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyGalleryImage;
