import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import { Movie } from './types/movie';
import { searchMovies } from './services/movieApi';
import { Film } from 'lucide-react';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blur rounded-xl px-6 py-3 flex items-center">
              <Film className="text-blue-600 mr-2" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">Buscador de Películas</h1>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-blur rounded-xl p-4 w-full max-w-2xl">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          <div className="bg-blur rounded-xl p-6">
            {isLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : movies.length > 0 ? (
              <MovieGrid movies={movies} />
            ) : (
              <div className="text-center text-gray-600">
                <p>Busca tus películas favoritas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;