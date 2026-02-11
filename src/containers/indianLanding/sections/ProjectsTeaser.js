import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { projectsHeader, publications } from "../../../portfolio";

gsap.registerPlugin(ScrollTrigger);

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${(props) => props.theme.accent};
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.secondaryText};
  text-align: center;
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.a`
  background: rgba(26, 35, 126, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 111, 0, 0.15);
  border-radius: 20px;
  padding: 2rem;
  text-decoration: none;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    border-color: ${(props) => props.theme.accent};
    box-shadow: 0 20px 40px rgba(255, 111, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.secondaryText};
  line-height: 1.6;
  flex-grow: 1;
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.accent};
`;

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.accent},
    #ff8f00
  );
  color: ${(props) => props.theme.body};
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px ${(props) => props.theme.accent}55;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const DecorationLine = styled.div`
  width: 100px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    ${(props) => props.theme.accent},
    transparent
  );
  margin: 2rem auto;
`;

const ProjectsTeaser = ({ theme }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".view-all-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".view-all-btn",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Get featured publications/projects
  const featuredProjects = publications.data.slice(0, 3);

  return (
    <ProjectsContainer ref={containerRef}>
      <SectionTitle className="projects-title" theme={theme}>
        Featured Work
      </SectionTitle>

      <SectionSubtitle theme={theme}>
        {projectsHeader.description}
      </SectionSubtitle>

      <DecorationLine theme={theme} />

      <ProjectsGrid className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            theme={theme}
          >
            <ProjectTitle theme={theme}>{project.name}</ProjectTitle>
            <ProjectDescription theme={theme}>
              {project.description}
            </ProjectDescription>
            <ProjectMeta theme={theme}>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              View Project
            </ProjectMeta>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <ViewAllButton to="/projects" className="view-all-btn" theme={theme}>
        Explore All Projects
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </ViewAllButton>
    </ProjectsContainer>
  );
};

export default ProjectsTeaser;
