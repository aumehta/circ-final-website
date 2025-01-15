import React from 'react';
import toppic from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/news.png';
import NewsIcon from '@mui/icons-material/Article'; // Importing a news icon from MUI (you can replace it with your icon)

const NewsPage = () => {
  const newsArticles = [
    {
      text: "Groundbreaking cardiovascular research published in 2025.",
      link: "https://google.com",
    },
    {
      text: "CIC announces new partnership with global health leaders.",
      link: "https://google.com",
    },
    {
      text: "Innovation in heart disease treatment unveiled at CIC.",
      link: "https://google.com",
    },
  ];

  return (
    <div style={styles.homeContainer}>
      {/* Top Image Section */}
      <div style={styles.imageContainer}>
        <div style={styles.textContainer}>
          <h1 style={styles.mainText}>News&Updates</h1>
          <hr style={styles.divider} />
          <h1 style={styles.mainText}>Cardiovascular Innovation Center</h1>
        </div>
        <img src={toppic} alt="News Image" style={styles.image} />
      </div>

      {/* Featured News Section */}
      <div style={styles.contentContainer}>
        <h2 style={styles.featuredText}>Featured News</h2>
        <div style={styles.newsList}>
          {newsArticles.map((article, index) => (
            <div key={index} style={styles.newsBox}>
              <NewsIcon style={styles.newsIcon} />
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.newsLink}
              >
                {article.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

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
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '80%',
    marginTop: '20px',
  },
  featuredText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '32px',
    color: '#000',
    marginBottom: '20px',
  },
  newsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },
  newsBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px 20px',
    borderRadius: '8px',
    width: '100%',
  },
  newsIcon: {
    fontSize: '28px',
    marginRight: '15px',
  },
  newsLink: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
  },
  newsLinkHover: {
    textDecoration: 'underline',
  },
};
