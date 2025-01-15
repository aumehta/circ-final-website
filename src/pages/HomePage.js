import React from 'react';
import toppic from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/header_top_photo.png';  // Adjust the path as needed
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import the arrow icon
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Carousel settings
const settings = {
  dots: true, // Show navigation dots
  infinite: true, // Loop the carousel
  speed: 500, // Transition speed
  slidesToShow: 1, // Show one image at a time
  slidesToScroll: 1, // Scroll one image at a time
  autoplay: true, // Enable auto play
  autoplaySpeed: 3000, // Speed between image transitions
};

const HomePage = () => {
  // List of images to display in the carousel
  const imagePaths = [
    '/home_carousel/0E7B5C55-3F38-41E7-92D4-2649895BFE4E.jpeg',
    '/home_carousel/01D24D60-21D5-4659-A772-4C4745CA249E.jpeg', 
    '/home_carousel/2CD1B471-19FD-4AB2-8B7D-2A175B16C695.jpeg', 
  ];

  return (
    <div style={styles.homeContainer}>
      <div style={styles.imageContainer}>
        <div style={styles.textContainer}>
          <h1 style={styles.mainText}>Using cutting-edge technology to combat cardiovascular disease</h1>
          <button style={styles.learnMoreButton}>
            Learn More
            <ArrowForwardIcon style={styles.arrowIcon} />
          </button>
        </div>
        <img src={toppic} alt="Topic Image" style={styles.image} />
      </div>

      {/* Red box with text below the image */}
      <div style={styles.redBox}>
        <p style={styles.redBoxText}>
          Across the globe, people are reaching the era of Industry 4.0, in which technology has the capacity to push the boundaries of scientific knowledge as they are currently known.
        </p>
      </div>

      <div style={styles.circBox}>
        <div style={styles.circInsideBox}> 
          <p style={styles.circText}>CIRC</p>
        </div>
        <div style={styles.line}></div>  {/* White line */}
        <p style={styles.longText}>
          Cardiovascular Innovation Research Center (CIRC) aims to improve the quality and efficiency of care given to patients through the development of cutting-edge technology and techniques to combat cardiovascular disease.
        </p>
      </div>

      {/* Image Carousel */}
      <div style={styles.carouselContainer}>
        <Slider {...settings}>
          {imagePaths.map((imagePath, index) => (
            <div key={index} style={styles.carouselItem}>
              <img src={process.env.PUBLIC_URL + imagePath} alt={`carousel-image-${index}`} style={styles.carouselImage} />
            </div>
          ))}
        </Slider>
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
    paddingBottom: '50px', // Added some space at the bottom for scrolling
    overflowY: 'auto', // Ensures the content scrolls
  },
  imageContainer: {
    display: 'flex',
    width: '100%',
    height: '55vh', // Removed fixed height, allowing image to take its natural size
    position: 'relative',
    marginBottom: '20px', // Add some space between the image and the content below
  },
  textContainer: {
    position: 'absolute',
    left: '5%',
    top: '50%',
    transform: 'translateY(-50%)',  // Center text vertically within the image
    color: '#000000',
    maxWidth: '50%', // Limit the width to the left half of the image
    textAlign: 'left',
  },
  mainText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600, // Extra Bold
    fontSize: '45px',
    margin: 0,
  },
  learnMoreButton: {
    marginTop: '20px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600, // Semi-Bold
    fontSize: '22px',
    color: 'red',
    border: '2px solid black',
    background: 'transparent',
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  arrowIcon: {
    marginLeft: '10px',
    fontSize: '24px',
  },
  image: {
    width: '100%',
    height: 'auto',  // Adjusted this to keep the image proportionate
    objectFit: 'cover',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    width: '100%',
    flex: 1,
  },

  // Styles for the red box below the image
  redBox: {
    backgroundColor: '#CE2F2F',
    width: '80%',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%', // Added space between the image and red box
  },

  circBox: {
    width: '80%',
    padding: '20px',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    marginTop: '5%', // Added space between the image and red box
    alignItems: 'center',
  },

  circInsideBox: {
    backgroundColor: '#D9D9D9',
    width: 'auto', 
    padding: '0% 5%',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',  
    borderRadius: '20px',
    marginRight: '20px', 
  },
  circText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400, // Semi-Bold
    fontSize: '70px',
    color: 'black',
    textAlign: 'center',
    maxWidth: '1000%', // Optionally, limit the text width for better readability
    marginRight: '2%',
  },
  line: {
    height: '5px', // Line thickness
    backgroundColor: 'white', // Line color
    width: '30%', // Make the line 30% of the container width
    marginRight: '20px', // Add some space between the line and text on the right
  },
  longText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400, // Regular weight
    fontSize: '24px', // Font size for the long text
    color: 'black',
    textAlign: 'left',
    width: '100%', // Ensures the text takes the remaining space
  },
  redBoxText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400, // Semi-Bold
    fontSize: '24px',
    color: 'white',
    textAlign: 'center',
    maxWidth: '80%', // Optionally, limit the text width for better readability
  },

  carouselContainer: {
    width: '100%',
    maxWidth: '1200px', // Optional: limit max width
    margin: '0 auto', // Center carousel
    padding: '20px 0',
  },

  carouselItem: {
    display: 'flex',
    justifyContent: 'center', // Horizontally center the image
    alignItems: 'center', // Vertically center the image
    height: '500px', // Fix the height of the carousel item to maintain consistency
    width: '100%', // Ensure the carousel item takes up the full width
  },

  carouselImage: {
    maxWidth: '80%', // Limits the width of the image (80% of the carousel container)
    height: 'auto', // Maintain aspect ratio
    maxHeight: '50%', // Limits the height of the image relative to the carousel item height
    objectFit: 'contain', // Ensures the image scales properly without distortion
    borderRadius: '10px', // Optional: rounded corners for aesthetics
    margin: '0 auto', // Horizontally center the image in the container
  },
  
};

export default HomePage;
