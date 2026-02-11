import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../../../portfolio";

gsap.registerPlugin(ScrollTrigger);

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${(props) => props.theme.accent};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.accent},
      transparent
    );
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCard = styled.div`
  background: rgba(26, 35, 126, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 111, 0, 0.15);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: ${(props) => props.theme.accent};
    box-shadow: 0 20px 40px rgba(255, 111, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillIcon = styled.span`
  font-size: 1.5rem;
`;

const SkillDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const SkillPoint = styled.li`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: ">";
    position: absolute;
    left: 0;
    color: ${(props) => props.theme.accent};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
`;

const TechBadge = styled.span`
  padding: 0.4rem 0.8rem;
  font-size: 0.75rem;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.primary}44,
    ${(props) => props.theme.accent}22,
    ${(props) => props.theme.primary}44
  );
  background-size: 200% auto;
  color: ${(props) => props.theme.text};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.accent}33;
  animation: ${shimmer} 3s linear infinite;
  animation-delay: ${(props) => props.delay}s;

  &:hover {
    border-color: ${(props) => props.theme.accent};
    transform: scale(1.05);
  }
`;

const RangoliDivider = styled.div`
  width: 100%;
  height: 60px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 200px;
    height: 60px;
    opacity: 0.5;
  }
`;

const SkillsSection = ({ theme }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".skills-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".skills-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Skill cards staggered animation
      gsap.from(".skill-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const skillIcons = {
    "Data Science & AI": "AI",
    "Full Stack Development": "Full Stack",
    "Cloud Infra-Architecture": "Cloud Infra",
    "UI/UX Design": "UI/UX",
  };

  return (
    <SkillsContainer ref={containerRef}>
      <SectionTitle className="skills-title" theme={theme}>
        Skills & Expertise
      </SectionTitle>

      <RangoliDivider>
        <svg viewBox="0 0 200 60">
          <path
            d="M0,30 Q50,0 100,30 T200,30"
            fill="none"
            stroke={theme.accent}
            strokeWidth="2"
            opacity="0.5"
          />
          <circle cx="100" cy="30" r="8" fill={theme.accent} opacity="0.5" />
          <circle cx="50" cy="15" r="4" fill={theme.accent} opacity="0.3" />
          <circle cx="150" cy="15" r="4" fill={theme.accent} opacity="0.3" />
        </svg>
      </RangoliDivider>

      <SkillsGrid className="skills-grid">
        {skills.data.map((skill, index) => (
          <SkillCard
            key={skill.title}
            className="skill-card skill-item"
            theme={theme}
          >
            <SkillTitle theme={theme}>
              <SkillIcon>
                {skillIcons[skill.title] || skill.title.split(" ")[0]}
              </SkillIcon>
              {skill.title}
            </SkillTitle>

            <SkillDescription>
              {skill.skills.slice(0, 3).map((point, i) => (
                <SkillPoint key={i} theme={theme}>
                  {point.replace("", "").trim()}
                </SkillPoint>
              ))}
            </SkillDescription>

            <TechStack>
              {skill.softwareSkills.slice(0, 6).map((tech, i) => (
                <TechBadge key={tech.skillName} theme={theme} delay={i * 0.2}>
                  {tech.skillName}
                </TechBadge>
              ))}
            </TechStack>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default SkillsSection;
