
import React, { useState, useEffect, useRef } from 'react';
import { VIDEOS_DATA, VideoData } from '../constants';
import VideoCard from '../components/VideoCard';
import VideoPlayerModal from '../components/VideoPlayerModal';

const VideosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVideos, setFilteredVideos] = useState<VideoData[]>(VIDEOS_DATA);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInView(true); // Animation d'entrée pour la page
  }, []);

  useEffect(() => {
    const results = VIDEOS_DATA.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(results);
  }, [searchTerm]);

  const handlePlayVideo = (video: VideoData) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };
  
  const getDelayClass = (index: number): string => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-500'];
    return delays[index % delays.length];
  };

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-slate-100 min-h-[calc(100vh-4rem)] transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            Mes Vidéos
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Découvrez mes présentations, tutoriels et démonstrations en vidéo.
          </p>
        </div>

        <div className="mb-12 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Rechercher une vidéo par titre..."
            className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Rechercher une vidéo"
          />
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${getDelayClass(index)}`}
              >
                <VideoCard video={video} onPlay={() => handlePlayVideo(video)} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 text-lg">
            Aucune vidéo ne correspond à votre recherche.
          </p>
        )}
      </div>

      {selectedVideo && (
        <VideoPlayerModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          video={selectedVideo}
        />
      )}
    </section>
  );
};

export default VideosPage;
    