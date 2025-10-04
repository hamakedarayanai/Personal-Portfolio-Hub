
import React, { useState, useRef, useCallback } from 'react';
import PageWrapper from '../components/PageWrapper';

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1H8zm3 0a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1h-1z" clipRule="evenodd" />
    </svg>
);


const RadioPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState('Ready to play');
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
            console.error("Audio play failed:", e);
            setStatus('Error: Could not play audio.');
        });
      }
    }
  }, [isPlaying]);

  return (
    <PageWrapper title="Streaming Radio" subtitle="Listen to Radio Al-Fatah Trangkil Temboro live">
      <div className="max-w-xl mx-auto p-6 bg-surface rounded-lg shadow-xl text-center">
        <audio
          ref={audioRef}
          src="https://i.klikhost.com/8228/;stream.mp3"
          onPlay={() => { setIsPlaying(true); setStatus('Playing...'); }}
          onPause={() => { setIsPlaying(false); setStatus('Paused'); }}
          onError={() => setStatus('Error loading stream.')}
          onWaiting={() => setStatus('Buffering...')}
          onStalled={() => setStatus('Stream stalled. Check connection.')}
          className="hidden"
          preload="none"
        />
        
        <h3 className="text-xl font-semibold mb-2">Radio Al-Fatah</h3>
        <p className="text-text-secondary mb-6 h-6">{status}</p>

        <button
          onClick={togglePlayPause}
          className="bg-primary text-white rounded-full p-4 hover:bg-primary-hover transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </PageWrapper>
  );
};

export default RadioPage;
