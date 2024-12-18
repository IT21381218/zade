import React, { useEffect, useRef, useState } from "react"; 
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './styles/Projects.css';

const SECTION_HEIGHT = 1500;

const Projects = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
        <video autoPlay loop muted className="background-video">
        <source 
          src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1734544185/zade/x_c6e9br.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      <CustomCursor />
      <HomeNavigation />
      <Hero />
      <ProjectsDetails />
    </div>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? "hovering" : ""}`}
    >
      <span className={`cursor-text ${hovering ? "visible" : ""}`}>
        Scroll Down
      </span>
    </div>
  );
};

const HomeNavigation = () => {
  const navigate = useNavigate();
  const [hovering, setHovering] = useState(false); // Add state for hovering

  return (
    <div
      className="home-navigation"
      onMouseEnter={() => setHovering(true)} // Set hovering state to true on mouse enter
      onMouseLeave={() => setHovering(false)} // Set hovering state to false on mouse leave
      onClick={() => navigate("/")}
    >
      <p>Home</p>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="hero-section"
      onMouseEnter={() => document.querySelector(".custom-cursor").classList.add("hovering")}
      onMouseLeave={() => document.querySelector(".custom-cursor").classList.remove("hovering")}
    >
      <CenterImage />
      <ParallaxImages />
      <div className="gradient-overlay" />
    </div>
  );
};
const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <>
      {/* Desktop Center Image */}
      <motion.div
        className="center-image center-image-desktop"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage:
            "url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734549625/zade/808495471694795085_2_2_mmdvme.png)",
        }}
      />
      {/* Mobile Center Image */}
      <motion.div
        className="center-image center-image-mobile"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage:
            "url(https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734549813/zade/808495471694795085_2_vlyvbz.png)", // Replace with mobile-specific image
        }}
      />
    </>
  );
};

const ParallaxImages = () => {
  return (
    <div className="parallax-images">
      <ParallaxImg
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734463939/zade/808278120579776760_myyvy5.png"
        alt="Space launch"
        start={0}
        end={200}
        className="parallax-img img-left"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734464358/zade/808279907286205610_oayzce.png"
        alt="Spacecraft"
        start={200}
        end={-250}
        className="parallax-img img-center"
      />
      <ParallaxImg
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734464194/zade/808279198616588441_wjvzdf.png"
        alt="Satellite"
        start={-200}
        end={200}
        className="parallax-img img-right"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const ProjectsDetails = () => {
  const projects = [
    {
      title: "Surveillance of Adeline",
      description: "I’ve been watching her for some time now. At first, it was just to ensure she was safe, but soon, I needed to know more—her routines, her habits, the way she thinks. Every detail matters. I stay in the shadows, observing, always a step ahead, making sure no one can touch her.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734462872/zade/808273159892713961_vq2q06.png",
      link: "https://example.com/project-one",
    },
    {
      title: "Protecting My Identity",
      description: "I’ve spent years building a wall around who I am. People think they know me, but they don’t. They see the cold exterior, the silence, the control—but that's not the whole picture. I don’t let anyone close enough to see the real me, and I never will.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734463306/zade/808274353893645171_vrx47x.png",
      link: "https://example.com/project-two",
    },
    {
      title: "Forming Alliances in the Underworld",
      description: "In my world, power is everything, and trust is a rare commodity. I don’t work alone—I’ve built alliances with those who thrive in the shadows. These connections aren’t about friendship; they’re about leverage and results.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734463605/zade/808276484197203227_znorep.png",
      link: "https://example.com/project-three",
    },
  ];

  return (
    <div className="projects-details">
      {projects.map((project, index) => (
        <motion.div
          className="project-card"
          key={index}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <motion.button
              className="project-link-button"
              whileHover={{ backgroundColor: "#474747" , color:"#ffff"}}
              transition={{ duration: 0.1 }}
            >
              Visit Project
            </motion.button>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;