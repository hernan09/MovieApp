import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      <div className="absolute inset-0 grid grid-cols-6 gap-1 p-4 opacity-40">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="aspect-[2/3] bg-cover bg-center rounded-sm transform hover:scale-105 transition-transform"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w500${getMoviePoster(index)}')`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Function to return popular 2024 movie posters
function getMoviePoster(index: number): string {
  const posters = [
    '/xhk4GEFwwzL1npWzlD22fKZP5JD.jpg', // Dune: Part Two
    '/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg', // Madame Web
    '/kUZ0ZzXZrVxww2c5fHXW84RXs7.jpg', // Bob Marley: One Love
    '/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg', // Anyone But You
    '/bVU6B8P3kfqHrAMVwQEJtqbhQUw.jpg', // Argylle
    '/bMUGNkPaHOurcBK9g3XpJx3fxuO.jpg', // Migration
    '/7tlMvkC2kIWPowfRpVrwuYcxLZg.jpg', // Mean Girls
    '/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg', // The Beekeeper
    '/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg', // Drive-Away Dolls
    '/hVAZYhNaAD8fCCKVQAXJxYvOBAI.jpg', // Wonka
    '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', // Ghostbusters: Frozen Empire
    '/4woSOUD0equAYzvwhWBHIJDCM88.jpg', // Poor Things
    '/7vCSrzwqS5PEm0i5mHlkDfNDyN.jpg', // Mickey 17
    '/qhb1qOilapbapxWQn9jtRCMwXJF.jpg', // Furiosa
    '/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg', // Civil War
    '/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg', // Challengers
    '/2jR1JmDCvoZQUxqfqNz2CzyqFUv.jpg', // Inside Out 2
    '/kUmyf36HsKDkOyYDUuGxLBoqLJk.jpg', // Kingdom of the Planet of the Apes
    '/h0oBqUpax591vOacUxKjgt1NYtX.jpg', // Deadpool 3
    '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg', // Kung Fu Panda 4
    '/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg', // Drive-Away Dolls
    '/mhvqoO5UkUYJQZJsNUhXlGF0KZi.jpg', // Back to Black
    '/vXqk4Qdb40zrBJqwHJhqiid3hQp.jpg', // Joker: Folie à Deux
    '/d4oypQqM6B3wG8uLIn1fj2k5GkM.jpg'  // Godzilla x Kong: The New Empire
  ];
  
  return posters[index % posters.length];
}