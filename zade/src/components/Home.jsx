import React, { useEffect, useState } from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Top from './Top';
import FollowMe from './FollowMe';  // Import FollowMe component
import './styles/Home.css';

function Home() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const [currentSection, setCurrentSection] = useState('top');

  // Handle Scroll
  const handleScroll = () => {
    const sections = ['top', 'about', 'skills', 'follow-me', 'contact'];
    let current = null;

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) { // Check if the section exists
        const rect = section.getBoundingClientRect();

        // Check if the section is in the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
          current = id;
        }
      }
    });

    if (current !== currentSection) {
      setCurrentSection(current);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="home">
      {/* Add Header at the top */}
      <Header />

      <video autoPlay loop muted className="background-video">
        <source 
          src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1734452525/zade/videoplayback_2__1_vt3dx1.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      <section 
        id="top" 
        className={currentSection === 'top' ? 'slide-in' : ''}>
        <Top />
      </section>
      <section 
        id="about" 
        className={currentSection === 'about' ? 'slide-in' : ''}>
        <About />
      </section>
      <section 
        id="skills" 
        className={currentSection === 'skills' ? 'slide-in' : ''}>
        <Skills />
      </section>
      <section 
        id="contact" 
        className={currentSection === 'contact' ? 'slide-in' : ''}>
        <Contact />
      </section>

      <section 
        id="follow-me" 
        className={currentSection === 'follow-me' ? 'slide-in' : ''}>
        <FollowMe />
      </section>
    </div>
  );
}

export default Home;
