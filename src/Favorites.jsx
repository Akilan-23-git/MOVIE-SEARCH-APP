import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    setFavorites(saved ? JSON.parse(saved) : []);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Favorites</h1>
      {favorites.length === 0 ? (
        <p style={styles.noFavorites}>No favorites yet.</p>
      ) : (
        <div style={styles.grid}>
          {favorites.map((movie) => (
            <div key={movie.imdbID} style={styles.card}>
              <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
              <h3 style={styles.title}>{movie.Title}</h3>
              <p style={styles.year}>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  noFavorites: {
    fontSize: '18px',
    color: '#555',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#F9F9F9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  poster: {
    width: '150px',
    height: '220px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  year: {
    fontSize: '14px',
    color: '#777',
  },
};

export default Favorites;
