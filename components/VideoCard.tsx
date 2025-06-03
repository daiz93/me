
import React from 'react';
import { VideoData } from '../constants';

interface VideoCardProps {
  video: VideoData;
  onPlay: () => void;
}

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
    <path d="M8 5v14l11-7z"></path>
  </svg>
);

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      onClick={onPlay}
      onKeyPress={(e) => e.key === 'Enter' && onPlay()}
      tabIndex={0}
      role="button"
      aria-label={`Lire la vidéo ${video.title}`}
    >
      <div className="relative w-full aspect-video overflow-hidden"> {/* Aspect ratio 16:9 */}
        <img
          src={video.thumbnailUrl}
          alt={`Miniature de ${video.title}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <PlayIcon />
          </div>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-md font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
          {video.title}
        </h3>
        {/* Vous pouvez ajouter une description courte ici si nécessaire */}
        {/* <p className="text-xs text-slate-500 mt-1">{video.description?.substring(0, 50)}...</p> */}
      </div>
    </div>
  );
};

export default VideoCard;
    