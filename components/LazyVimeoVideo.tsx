import React, { useState, useRef, useEffect } from 'react';

interface LazyVimeoVideoProps {
  videoUrl: string;
  title: string;
  className?: string;
}

const LazyVimeoVideo: React.FC<LazyVimeoVideoProps> = ({ 
  videoUrl, 
  title, 
  className = "relative w-full rounded-lg overflow-hidden mb-4" 
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  // Extract video ID and hash from Vimeo URL
  const getVimeoEmbedUrl = (url: string) => {
    const parts = url.split('/');
    const videoId = parts[parts.length - 2];
    const hash = parts[parts.length - 1];
    return `https://player.vimeo.com/video/${videoId}?h=${hash}&badge=0&autopause=0&player_id=0&app_id=58479`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={videoRef} className={className} style={{padding: '56.25% 0 0 0', position: 'relative'}}>
      {/* Placeholder/Skeleton */}
      {!isInView && (
        <div className="absolute inset-0 bg-slate-800 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-slate-400 text-sm">Cargando video...</p>
          </div>
        </div>
      )}

      {/* Video real */}
      {isInView && (
        <iframe 
          src={getVimeoEmbedUrl(videoUrl)} 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          style={{
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          title={title}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

export default LazyVimeoVideo;
