import React from 'react';

interface VideoPlayerProps{
    url: string;
    thumb: string;
}

export const VerticalVideoPlayer = ({ url, thumb} : VideoPlayerProps) => {
  return (
    <div style={{
      maxHeight: '90%',
      margin: '0 auto',
      marginTop:'2rem'
    }}>
      <video
        src={url}
        controls
        preload="metadata"
        playsInline
        poster={thumb}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.3)',
        }}
        autoPlay
        loop
      >
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>
  );
};
