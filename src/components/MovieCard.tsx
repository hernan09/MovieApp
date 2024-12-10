import React, { useEffect, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Movie, StreamingInfo, PROVIDER_URLS } from '../types/movie';
import { getStreamingProviders } from '../services/movieApi';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [streamingProviders, setStreamingProviders] = useState<StreamingInfo[]>([]);

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getStreamingProviders(movie.id);
      setStreamingProviders(providers);
    };
    fetchProviders();
  }, [movie.id]);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative pt-[150%] w-full">
        <img
          src={imageUrl}
          alt={movie.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {new Date(movie.release_date).getFullYear()}
        </p>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span className="text-sm">{movie.vote_average.toFixed(1)}</span>
        </div>
        <p className="text-gray-700 text-sm line-clamp-2 mb-3">{movie.overview}</p>
        
        {streamingProviders.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-semibold mb-1">Disponible en:</p>
            <div className="flex flex-wrap gap-2">
              {streamingProviders.map((provider) => {
                const providerUrl = PROVIDER_URLS[provider.provider_id];
                return (
                  <a
                    key={provider.provider_name}
                    href={providerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-100 rounded-full px-2 py-1 hover:bg-gray-200 transition-colors group"
                    title={`Ver en ${provider.provider_name}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                      alt={provider.provider_name}
                      className="w-4 h-4 rounded-full mr-1"
                    />
                    <span className="text-xs">{provider.provider_name}</span>
                    <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};