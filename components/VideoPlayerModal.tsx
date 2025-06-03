
import React, { useEffect } from 'react';
import { VideoData } from '../constants';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoData | null;
}

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ isOpen, onClose, video }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-out"
      onClick={onClose} // Close on clicking the backdrop
      role="dialog"
      aria-modal="true"
      aria-labelledby="videoPlayerTitle"
    >
      <div 
        className="bg-slate-900 p-4 sm:p-6 rounded-lg shadow-2xl w-full max-w-3xl relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-appear"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="videoPlayerTitle" className="text-xl font-semibold text-white truncate pr-8">
            {video.title}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Fermer le lecteur vidéo"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="aspect-video"> {/* Maintain 16:9 aspect ratio */}
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.youtubeVideoId}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
         <style>{`
          @keyframes modal-appear {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-modal-appear {
            animation: modal-appear 0.3s forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default VideoPlayerModal;
    