import React from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies }) => {
  if (!movies.length) return <p style={styles.noMovies}>No movies found.</p>;

  return (
    <div style={styles.container}>
      {movies.map((movie) => (
        <MovieDetails key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  noMovies: {
    fontSize: '18px',
    color: '#555555',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default MovieList;
