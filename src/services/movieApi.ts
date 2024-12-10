import axios from 'axios';
import { Movie, StreamingInfo } from '../types/movie';

const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c'; // This is a public API key for demo purposes
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=es-ES`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getStreamingProviders = async (movieId: number): Promise<StreamingInfo[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`
    );
    const results = response.data.results.ES?.flatrate || [];
    return results.map((provider: any) => ({
      provider_name: provider.provider_name,
      logo_path: provider.logo_path,
      provider_id: provider.provider_id
    }));
  } catch (error) {
    console.error('Error fetching streaming providers:', error);
    return [];
  }
};