import React, { useState } from 'react';
import toppic from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/about.jpeg'; // Adjust the path as needed
import christopher from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/ChristopherNguyen.jpeg'; // Adjust the path as needed
import salva from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/Yurista_Salva.jpeg'; // Adjust the path as needed
import mehdi from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/Sadighi_Mehdi.png'; // Adjust the path as needed
import matthew from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/Mai_Dingheng.jpeg'; // Adjust the path as needed
import lily from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/Chen_Lily.jpeg'; // Adjust the path as needed
import ashmita from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/AshmitaDeb.png'; // Adjust the path as needed
import tassia from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/TassiaMoura.jpeg'; // Adjust the path as needed
import mary from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/MaryRobakowski.jpeg'; // Adjust the path as needed
import robert from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/chris_lab/RobertEder.png'; // Adjust the path as needed
import david from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/david_lab/DavidChen(1).png'; // Adjust the path as needed
import makiya from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/david_lab/Nakashima_Makiya.jpeg'; // Adjust the path as needed
import jaehyun from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/david_lab/JuhuyenLee.jpeg'; // Adjust the path as needed
import ishan from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/david_lab/IshanSharma.jpeg'; // Adjust the path as needed
import lifu from '/Users/arohimehta/Documents/clinic/circ-website/src/pictures/david_lab/LifuDeng.png'; // Adjust the path as needed


const AboutUs = () => {
    const [activeLab, setActiveLab] = useState('Chris'); // Default to Chris's Lab

    const labMembers = {
        Chris: [
          { name: 'Christopher Nguyen', photo: christopher },
          { name: 'Salva Yurista', photo: salva },
          { name: 'Mehdi Sadighi, PhD', photo: mehdi },
          { name: 'Dingheng (Matthew) Mai, MS', photo: matthew },
          { name: 'Shi (Lily) Chen', photo: lily },
          { name: 'Ashmita Deb', photo: ashmita },
          { name: 'Tassia Riberio Salles Moura', photo: tassia },
          { name: 'Mary Robakowski', photo: mary },
          { name: 'Robert Eder', photo: robert },

        ],
        David: [
          { name: 'David Chen', photo: david },
          { name: 'Makiya Nakashima, MS', photo: makiya },
          { name: 'Ashmita Deb', photo: ashmita },
          { name: 'Jaehyun Lee', photo: jaehyun},
          { name: 'Ishan Sharma', photo: ishan },
          { name: 'Lifu Deng', photo: lifu },
        ],
      };

      const handleLabClick = (labName) => {
        setActiveLab(labName);
      };
  return (
    <div style={styles.homeContainer}>
      <div style={styles.imageContainer}>
        <img src={toppic} alt="Topic Image" style={styles.image} />

        <div style={styles.textContainer}>
          <h1 style={styles.mainText}>About Us</h1>
          <hr style={styles.divider} />
          <h1 style={styles.mainText}>We enable global innovation through collaboration</h1>
        </div>
      </div>

      <div style={styles.infoBox}>
        <p style={styles.infoText}>
          Lead by our director, Dr. Christopher Nguyen, Ph.D., we foster a highly collaborative
          environment between engineers, scientists, physicians, and patients to enable rapid
          translation of these innovations to transform clinical practice across the globe.
        </p>
        <p style={styles.infoText}>
          Our goals are achieved for the community through many next-generation methods including
          advanced multidimensional imaging, artificial intelligence/machine learning, 3D printing,
          bio-inspired robotics, biosensors, computer simulation, and bioinformatics.
        </p>
      </div>
    
      <div style={styles.teamSection}>
        <h1 style={styles.teamText}>Meet Our Team</h1>
        <div style={styles.buttonsContainer}>
          <button style={styles.button} onClick={() => handleLabClick('Chris')}>
            Chris's Lab
          </button>
          <button style={styles.button} onClick={() => handleLabClick('David')}>
            David's Lab
          </button>
        </div>
      </div>

      {/* Lab Members */}
      <div style={styles.labMembersContainer}>
  {labMembers[activeLab].map((member, index) => (
    <div key={index} style={styles.profileContainer}>
      <img src={member.photo} alt={member.name} style={styles.profileImage} />
      <p style={styles.profileName}>{member.name}</p>
    </div>
  ))}
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
    height: '55vh',
    position: 'relative',
    marginBottom: '20px', // Add space between the image and the info box
  },
  textContainer: {
    position: 'absolute',
    left: '5%',
    top: '50%',
    transform: 'translateY(-50%)', // Center text vertically within the image
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
  divider: {
    border: 'none',
    borderTop: '2px solid #000000',
    margin: '10px 0',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    opacity: 0.4,
  },
  infoBox: {
    backgroundColor: '#D9D9D9',
    padding: '20px',
    maxWidth: '80%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px', // Add space between the info box and the footer
    marginTop: '20px', // Add space between the info box and the footer

  },
  infoText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600, // Semi-Bold
    fontSize: '24px',
    margin: '10px 0',
    lineHeight: '1.5', // Better readability
    color: '#000000',
    marginBottom: '20px',
    marginTop: '20px',
  },
  teamSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%', // Align with the info box width
    marginTop: '30px',
  },
  teamText: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 800, // Extra Bold
    fontSize: '30px',
    margin: 0,
    color: '#000000',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '20px', // Add spacing between buttons
  },
  button: {
    backgroundColor: '#CE2F2F',
    color: '#FFFFFF',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#B02828', // Slightly darker red for hover
  },
  labMembersContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allows wrapping to the next row
    justifyContent: 'center', // Centers the rows
    gap: '20px', // Adds spacing between items
    marginTop: '30px',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px', // Ensure consistent sizing
  },
  profileImage: {
    width: '175px', // Diameter of the circle
    height: '175px', // Diameter of the circle
    borderRadius: '50%', // Makes the image circular
    objectFit: 'cover', // Ensures the image fits well within the circle
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Adds some shadow for better visual
  },
  profileName: {
    marginTop: '10px',
    marginBottom: '10px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600, // Semi-Bold
    fontSize: '16px',
    textAlign: 'center',
    color: '#000000',
  },
};

export default AboutUs;
