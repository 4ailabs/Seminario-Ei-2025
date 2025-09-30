import React, { useState, useEffect, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error) => void;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  children, 
  fallback, 
  onError 
}) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('ErrorBoundary caught an error:', event.error);
      setHasError(true);
      setError(event.error);
      onError?.(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('ErrorBoundary caught an unhandled promise rejection:', event.reason);
      setHasError(true);
      setError(new Error(event.reason));
      onError?.(new Error(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [onError]);

  const handleRetry = () => {
    setHasError(false);
    setError(null);
  };

  if (hasError) {
    return fallback || (
      <div className="w-full h-48 sm:h-56 bg-slate-800 rounded-lg flex flex-col items-center justify-center text-slate-400">
        <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <span className="text-sm">Error al cargar contenido</span>
        <button 
          onClick={handleRetry}
          className="mt-2 px-3 py-1 bg-cyan-500 text-white text-xs rounded hover:bg-cyan-600 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
