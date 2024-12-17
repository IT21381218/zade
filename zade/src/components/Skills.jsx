import React, { useEffect, useRef } from 'react';
import { GiThink, GiStrong ,GiKingJuMask, GiTeamIdea ,GiCyberEye } from "react-icons/gi";
import { MdSpatialTracking } from "react-icons/md";
import { FaChessKing } from "react-icons/fa";
import { PiBrainFill } from "react-icons/pi";

import './styles/Skills.css';

function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', onWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', onWheel);
      }
    };
  }, []);

  return (
    <div className="skills">
      <div className="skill-box">
        <h1>My Skills</h1>
        <div className="skills-list-container">
          <div className="skills-list" ref={scrollRef}>
            <div className="skill-item">
              <GiThink className="skill-icon" />
              <span>Strategic Thinking</span>
            </div>
            <div className="skill-item">
              <GiStrong className="skill-icon" />
              <span>Combat Skills</span>
            </div>
            <div className="skill-item">
              <MdSpatialTracking className="skill-icon" />
              <span>Surveillance</span>
            </div>
            <div className="skill-item">
              <FaChessKing className="skill-icon" />
              <span>Leadership</span>
            </div>
            <div className="skill-item">
              <GiKingJuMask className="skill-icon" />
              <span>Charisma</span>
            </div>
            <div className="skill-item">
              <GiTeamIdea  className="skill-icon" />
              <span>Problem Solving</span>
            </div>
            <div className="skill-item">
              <GiCyberEye  className="skill-icon" />
              <span>Tactical Planning</span>
            </div>
            <div className="skill-item">
              <PiBrainFill className="skill-icon" />
              <span>Intuition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
