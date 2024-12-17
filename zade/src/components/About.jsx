import React from 'react';
import './styles/About.css';
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <div className="about">
      {/* Top Section */}
      <div className="about-top" style={{ height: '70vh' }}>
        <h1>ABOUT ME</h1>
      </div>

      {/* Bottom Section */}
      <div className="about-bottom">
        {/* Left Side */}
        <div className="about-left">
          <img 
            src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734460084/zade/808261537711239964_tdx9fo.png" 
            alt="About Me" 
          />
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h1>Hi, I'm Zade Meadows</h1>
          <h3>
            And I'm a {""}
            <span>
              <Typewriter
                options={{
                  strings: ['Protector', 'Antagonist', 'Antihero' ,'Manipulator' , 'Lover'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>
          <p>
          A man shaped by darkness and driven by desire, I present a cold and calculating exterior, but beneath it lies 
          a complex mind unafraid to confront life’s shadows. My world is defined by control, obsession, and loyalty—qualities 
          that guide my every action. I thrive in the tension between dominance and vulnerability, always deliberate in my choices.
           Though my methods may be unconventional, my devotion to those I care for is unwavering. In a world where trust is rare, 
           I stand firm in my convictions, ready to face whatever comes my way.
          </p>
          <a href="/V.E. Hettiarachchi_Resume.pdf" download className="download-cv-button">Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default About;