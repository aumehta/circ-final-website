import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      style={{
        ...styles.footer,
        display: isAtBottom ? 'block' : 'none',
      }}
    >
      <div style={styles.container}>
        <div style={styles.column}>
          <p style={styles.heading}>LOCATION</p>
          <p style={styles.text}>9500 Euclid Ave.<br />Cleveland, OH 44195</p>
        </div>
        <div style={{ ...styles.column, ...styles.centerColumn }}>
          <p style={styles.centerText}>Cardiovascular Innovation Research Center</p>
        </div>
        <div style={styles.column}>
          <p style={styles.heading}>CONTACT</p>
          <p style={styles.text}>CIRC@ccf.org</p>
          <p style={styles.text}>216-444-2200</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '10px 20px',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative', // Use relative positioning to avoid overlapping
    zIndex: 10,
    transition: 'opacity 0.3s ease-in-out',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    flex: '1 1 calc(33.33% - 20px)',
    margin: '0 10px',
    textAlign: 'center',
    minWidth: '200px',
  },
  centerColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '5px',
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    margin: 0,
  },
  centerText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    textAlign: 'center',
    margin: 0,
  },
};

export default Footer;
