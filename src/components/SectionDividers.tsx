// Componentes de divisores e conectores entre seções

interface DividerProps {
  className?: string;
  fillColor?: string;
}

export function WaveDivider({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function WaveDividerFlipped({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function CurveDivider({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,0 C240,100 480,100 720,50 C960,0 1200,0 1440,50 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function CurveDividerFlipped({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,50 C240,0 480,0 720,50 C960,100 1200,100 1440,50 L1440,0 L0,0 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function SlantDivider({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path d="M0,80 L1440,0 L1440,80 Z" fill={fillColor} />
      </svg>
    </div>
  );
}

export function SlantDividerFlipped({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path d="M0,0 L1440,80 L0,80 Z" fill={fillColor} />
      </svg>
    </div>
  );
}

export function CircleDivider({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,100 Q360,0 720,50 T1440,100 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function CircleDividerFlipped({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,0 Q360,100 720,50 T1440,0 L1440,0 L0,0 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// Divisor com folhas tropicais (temática GENKI)
export function TropicalDivider({ className = "", fillColor = "currentColor" }: DividerProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          fill={fillColor}
          opacity="0.8"
        />
        <path
          d="M0,80L60,74.7C120,69,240,59,360,64C480,69,600,91,720,96C840,101,960,91,1080,85.3C1200,80,1320,80,1380,80L1440,80L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
