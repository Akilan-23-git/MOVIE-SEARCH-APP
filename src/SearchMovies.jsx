import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=8e48c673&s=${query}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Search Movies</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          style={styles.input}
        />
        <button onClick={searchMovies} style={styles.button}>
          Search
        </button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28A745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default SearchMovies;
