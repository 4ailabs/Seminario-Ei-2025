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
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  // Extract video ID and hash from Vimeo URL
  const getVimeoEmbedUrl = (url: string) => {
    if (!url || typeof url !== 'string') {
      console.error('Invalid video URL:', url);
      setHasError(true);
      return '';
    }
    
    try {
      const parts = url.split('/');
      const videoId = parts[parts.length - 2];
      const hash = parts[parts.length - 1];
      
      console.log('Vimeo URL parts:', { url, videoId, hash });
      
      if (!videoId || !hash) {
        console.error('Missing video ID or hash:', { videoId, hash });
        setHasError(true);
        return '';
      }
      
      const embedUrl = `https://player.vimeo.com/video/${videoId}?h=${hash}&badge=0&autopause=0&player_id=0&app_id=58479`;
      console.log('Generated embed URL:', embedUrl);
      return embedUrl;
    } catch (error) {
      console.error('Error parsing Vimeo URL:', error);
      setHasError(true);
      return '';
    }
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

  // Early return for invalid URLs
  if (!videoUrl) {
    return (
      <div className={className} style={{padding: '56.25% 0 0 0', position: 'relative'}}>
        <div className="absolute inset-0 bg-slate-800 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-slate-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <p className="text-slate-400 text-sm">Cargando video...</p>
          </div>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={className} style={{padding: '56.25% 0 0 0', position: 'relative'}}>
        <div className="absolute inset-0 bg-slate-800 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-slate-400 text-sm">Error al cargar video</p>
            <p className="text-slate-500 text-xs mt-1">URL no válida</p>
          </div>
        </div>
      </div>
    );
  }

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
