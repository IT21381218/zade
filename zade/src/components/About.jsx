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
            src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734070521/eehanee/Untitled-1_qk1pxt.png" 
            alt="About Me" 
          />
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h1>Hi, I'm Zade Hettiarachchi</h1>
          <h3>
            And I'm a {""}
            <span>
              <Typewriter
                options={{
                  strings: ['Quality Assurance Tester', 'Customer Service Officer', 'Project Manager' ,'UI/UX Designer' , 'Business Analyst'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h3>
          <p>
            I'm an undergraduate at the Sri Lanka Institute of Information Technology (SLIIT) who is
            enthusiastic, self-motivated, reliable, responsible, and hardworking with a solid
            foundation in programming languages. I am seeking a challenging role to apply my
            technical expertise and contribute to the innovation and efficiency of the organization.
          </p>
          <a href="/V.E. Hettiarachchi_Resume.pdf" download className="download-cv-button">Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default About;