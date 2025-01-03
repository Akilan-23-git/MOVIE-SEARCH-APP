import React, { useState } from 'react';

const MovieDetails = ({ movie }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdded, setIsAdded] = useState(false);

  const addToFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000); // Reset animation
  };

  return (
    <div style={styles.card}>
      <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
      <div style={styles.info}>
        <h3 style={styles.title}>{movie.Title}</h3>
        <p style={styles.year}>{movie.Year}</p>
        <button style={styles.button} onClick={() => addToFavorites(movie)}>
          Add to Favorites
        </button>
      </div>
      {isAdded && <div style={styles.heartAnimation}>❤️</div>}
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    padding: '15px',
    margin: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  poster: {
    width: '150px',
    height: '220px',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  info: {
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333',
  },
  year: {
    fontSize: '14px',
    color: '#777777',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
  },
  heartAnimation: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '30px',
    color: '#FF4444',
    animation: 'pop 0.5s ease-out',
  },
  '@keyframes pop': {
    '0%': { transform: 'translate(-50%, -50%) scale(0)' },
    '100%': { transform: 'translate(-50%, -50%) scale(1)' },
  },
};

export default MovieDetails;
