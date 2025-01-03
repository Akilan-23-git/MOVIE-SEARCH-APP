import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Search Movies</Link>
      <Link to="/favorites" style={styles.link}>Favorites</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#333',
    color: '#fff',
    padding: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
