import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, title = 'Vídeo', className = '' }: VideoPlayerProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleError = () => {
    setVideoFailed(true);
  };

  const handleCanPlay = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100 ${className}`}>
      {videoFailed ? (
        // Mostrar "Novidade em Breve"
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
          <Play size={64} className="text-slate-400 mb-4" />
          <p className="text-slate-600 font-semibold text-lg">Novidade em Breve</p>
          <p className="text-slate-500 text-sm mt-2">Vídeo sendo preparado</p>
        </div>
      ) : (
        // Mostrar vídeo
        <video
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onError={handleError}
          onCanPlay={handleCanPlay}
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      )}

      {/* Loading indicator */}
      {!videoFailed && !videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
}
