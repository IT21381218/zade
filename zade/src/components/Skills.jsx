import React, { useEffect, useRef } from 'react';
import { GiThink, GiStrong, GiKingJuMask, GiTeamIdea, GiCyberEye } from "react-icons/gi";
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

  const skills = [
    { icon: <GiThink className="skill-icon" />, name: "Strategic Thinking", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734599550/zade/808860509555242285_g9cxqw.png')" },
    { icon: <GiStrong className="skill-icon" />, name: "Combat Skills", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734599472/zade/808859998454125796_nrxxlv.png')" },
    { icon: <MdSpatialTracking className="skill-icon" />, name: "Surveillance", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734599600/zade/808860814497924841_yw1ujt.png')" },
    { icon: <FaChessKing className="skill-icon" />, name: "Leadership", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734600385/zade/808864061493255600_a1isyi.png')" },
    { icon: <GiKingJuMask className="skill-icon" />, name: "Charisma", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734599874/zade/808861789455517944_uboxep.png')" },
    { icon: <GiTeamIdea className="skill-icon" />, name: "Problem Solving", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734599928/zade/808862184592515677_vyptoq.png')" },
    { icon: <GiCyberEye className="skill-icon" />, name: "Tactical Planning", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734599993/zade/808862433700623049_mtxjod.png')" },
    { icon: <PiBrainFill className="skill-icon" />, name: "Intuition", bgImage: "url('https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734600119/zade/808862562549644376_w7h4md.png')" },
  ];

  return (
    <div className="skills">
      <div className="skill-box">
        <h1>My Skills</h1>
        <div className="skills-list-container">
          <div className="skills-list" ref={scrollRef}>
            {skills.map((skill, index) => (
              <div
                className="skill-item"
                key={index}
                style={{ backgroundImage: skill.bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
