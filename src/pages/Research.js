import React from 'react';
import toppic from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/news.png';

const Research = () => {
  return (
        <div style={styles.homeContainer}>
          {/* Top Image Section */}
          <div style={styles.imageContainer}>
            <div style={styles.textContainer}>
              <h1 style={styles.mainText}>Research</h1>
              <hr style={styles.divider} />
              <h1 style={styles.mainText}>Cardiovascular Innovation Center</h1>
            </div>
            <img src={toppic} alt="News Image" style={styles.image} />
          </div>
          </div>
  );
};

const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E5E6E7',
    paddingBottom: '50px',
    overflowY: 'auto',
  },
  divider: {
    border: 'none',
    borderTop: '2px solid #000000',
    margin: '10px 0',
  },
  imageContainer: {
    display: 'flex',
    width: '100%',
    height: '55vh',
    position: 'relative',
    marginBottom: '20px',
  },
  textContainer: {
    position: 'absolute',
    left: '5%',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#000000',
    maxWidth: '50%',
    textAlign: 'left',
  },
  mainText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '45px',
    margin: 0,
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
};

export default Research;
