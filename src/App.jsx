import React, { useState } from 'react'; // Import React and the useState hook for managing state in functional components
import './styles.css'; // Import the stylesheet for styling the application
import backgroundImage from './images/one.jpg'; // Import a background image for use in the hero section

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State variable to track if the modal is open
  const [currentImage, setCurrentImage] = useState(''); // State variable to hold the currently displayed image

  const openModal = (image) => { // Function to open the modal and set the current image
    setCurrentImage(image); // Set the current image to the one clicked
    setIsModalOpen(true); // Change the state to open the modal
  };

  const closeModal = () => { // Function to close the modal
    setIsModalOpen(false); // Change the state to close the modal
    setCurrentImage(''); // Reset the current image
  };

  return (
    <div className="container"> {/* Main container for the app */}
      {/* Header Section */}
      <header className="header"> {/* Header for navigation and branding */}
        <img src="/images/lg.jpg" alt="Lance" /> {/* Logo/Image in the header */}
        <nav className="nav"> {/* Navigation section */}
          <ul> {/* Unordered list for navigation links */}
            <li><a href="#home">HOME</a></li> {/* Home link */}
            <li><a href="#about">ABOUT</a></li> {/* About link */}
            <li><a href="#portfolio">PORTFOLIO</a></li> {/* Portfolio link */}
            <li><a href="#contact">CONTACT</a></li> {/* Contact link */}
          </ul>
        </nav>
      </header>

      {/* Hero Section with dynamic background */}
      <section
        id="home" 
        className="hero" // Class for styling hero section
        style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image dynamically
      >
        <div className="overlay"></div> {/* Optional overlay for better text visibility */}
        <div className="hero-text"> {/* Text and buttons in the hero section */}
          <h2>MY PORTFOLIO</h2> {/* Title of the portfolio */}
          <img src="/images/lg.jpg" alt="Lance" /> {/* Another image of Lance */}
          <h3>Welcome to My Portfolio! {/* Introduction text */}
            Hello! I’m Lance Burgos, a third-year Information Technology student exploring the exciting world of technology. While I’m relatively new to UI/UX design, I’m eager to grow and improve as I gain more experience. This portfolio showcases my current projects and skills in web development, design, and more.

            I may not be an expert just yet, but I’m constantly learning and refining my craft. Feel free to explore my work and join me on this journey of growth!

            Let’s connect and turn ideas into reality!
          </h3>
          <a href="#about" className="btn">LEARN MORE</a> {/* Button to learn more about Lance */}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about"> {/* Section to introduce Lance */}
        <div className="about-container"> {/* Container for the about section */}
          {/* Left Side: Image */}
          <div className="about-image">
            <img src="/images/lance.jpg" alt="Lance" /> {/* Image of Lance */}
          </div>
          
          {/* Right Side: Text */}
          <div className="about-text"> {/* Text introduction */}
            <h3>Who am I?</h3> {/* Subheading */}
            <h1>Hello</h1> {/* Main heading */}
            <p>
              I am a UI/UX developer. Although my passion for IT was not immediate, I pursued this field because of its high demand and potential for growth. Currently, I am a third-year BSIT student at Western Technology Institute, where I am consistently learning new skills, such as React.js, and refining my portfolio.

              I have a strong foundation in Java, HTML, Python, and React. My Java skills enhance my understanding of object-oriented programming, while my HTML expertise allows me to create well-structured web pages. I can handle backend development with Python and build dynamic user interfaces using React, enabling me to contribute effectively to both frontend and backend projects.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio"> {/* Section to showcase projects */}
        <h2>MY PROJECTS</h2> {/* Title for projects */}
        <div className="portfolio-container"> {/* Container for project items */}
          <div className="portfolio-item" onClick={() => openModal('/images/project1.jpg')}> {/* Project item that opens a modal on click */}
            <img src="/images/project1.jpg" alt="Project 1" /> {/* Image for project 1 */}
            <div className="portfolio-description"> {/* Description for project 1 */}
              <h3>Awesome ToDos: My First MERN Project</h3> {/* Project title */}
              <p>Awesome ToDos is my first full-stack web application built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This project allows users to create, read, update, and delete their to-do items through an interactive user interface.</p>
            </div>
          </div>
          <div className="portfolio-item" onClick={() => openModal('/images/project2.jpg')}> {/* Project item for project 2 */}
            <img src="/images/project2.jpg" alt="Project 2" /> {/* Image for project 2 */}
            <div className="portfolio-description"> {/* Description for project 2 */}
              <h3>My Portfolio</h3> {/* Project title */}
              <p>As an IT student, I created this portfolio using React.js to showcase my skills and projects. This application demonstrates my ability to build interactive and dynamic user interfaces while employing best practices in modern web development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && ( // Conditional rendering of modal if isModalOpen is true
        <div className="modal-overlay" onClick={closeModal}> {/* Overlay to close modal on click */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Content of the modal */}
            <img src={currentImage} alt="Project" /> {/* Image displayed in modal */}
            <button className="close-modal" onClick={closeModal}>Close</button> {/* Button to close modal */}
          </div>
        </div>
      )}
      
      {/* Contact Section */}
      <section id="contact" className="contact"> {/* Section for contact information */}
        <h2>CONTACT ME</h2> {/* Title for contact section */}
        <div className="contact-description">
          <p>
            Hello! I'm Lance Burgos, a passionate IT student with a keen interest in technology and programming. 
            Feel free to reach out to me through any of the platforms below.
          </p>
        </div>
        <div className="socials"> {/* Container for social links */}
          <a href="https://www.facebook.com/itsmelanceburgos22.igoooooooop/" target="_blank" rel="noopener noreferrer"> {/* Facebook link */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Icon" /> {/* Facebook icon */}
            Lance Burgos
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> {/* WhatsApp link */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" /> {/* WhatsApp icon */}
            +63 948 633 2730
          </a>
          <a href="https://www.instagram.com/damnitslanxx/" target="_blank" rel="noopener noreferrer"> {/* Instagram link */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Icon" /> {/* Instagram icon */}
            @damnitslanxx
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer> {/* Footer for copyright and additional info */}
        <div className="container">
          <p>&copy; 2024 My Portfolio</p> {/* Copyright notice */}
        </div>
      </footer>
    </div>
  );
};

export default App; // Exporting the App component for use in other parts of the application
