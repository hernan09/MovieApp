export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface StreamingInfo {
  provider_name: string;
  logo_path: string;
  provider_id: number;
}

export const PROVIDER_URLS: Record<number, string> = {
  8: 'https://www.netflix.com',
  119: 'https://www.amazon.com/Prime-Video',
  337: 'https://www.disneyplus.com',
  2: 'https://www.apple.com/apple-tv-plus',
  384: 'https://www.hbomax.com',
  149: 'https://www.primevideo.com',
  531: 'https://www.paramountplus.com',
  // Add more providers as needed
};