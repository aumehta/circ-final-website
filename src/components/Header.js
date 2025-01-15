import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header style={styles.header}>
        <Link to="/">
        <img src='/pictures/header_logo.png' alt="Logo" style={styles.logo} />
        </Link>
        <nav>
          <ul style={styles.navList}>
            <li><Link to="/research" style={styles.link}>Research</Link></li>
            <li><Link to="/about-us" style={styles.link}>About Us</Link></li>
            <li><Link to="/news" style={styles.link}>News</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
const styles = {
        header: {
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1%', // 5% padding on left and right for responsiveness
          paddingBottom: '1%', // 5% padding on left and right for responsiveness
        },
  logo: {
    width: 'auto', // Maintain aspect ratio of the image
    height: '70px'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '20px', // Optional: add space between image and nav
    padding: 0
  },
  link: {
    textDecoration: 'none', // Ensures no underlines on links
    color: '#ffffff', // White text color for links
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600, // Semi Bold
    fontSize: '24px',
    padding:40
  }
};

export default Header;
