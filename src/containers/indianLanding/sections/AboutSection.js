import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { greeting } from "../../../portfolio";

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${(props) => props.theme.accent};
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${(props) => props.theme.accent};
    border-radius: 2px;
  }
`;

const ContentCard = styled.div`
  background: rgba(26, 35, 126, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 111, 0, 0.2);
  border-radius: 20px;
  padding: 3rem;
  max-width: 700px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 15px;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.text};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const HighlightText = styled.span`
  color: ${(props) => props.theme.accent};
  font-weight: 600;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.accent};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accent};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.body};
    transform: translateY(-3px);
    box-shadow: 0 10px 30px ${(props) => props.theme.accent}44;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const AboutSection = ({ theme }) => {
  const containerRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Card animation
      gsap.from(".about-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".about-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats counter animation
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.from(stat, {
            textContent: 0,
            duration: 2,
            delay: 0.3 + index * 0.2,
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              stat.textContent = Math.ceil(this.targets()[0].textContent);
              if (stat.dataset.suffix) {
                stat.textContent += stat.dataset.suffix;
              }
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 5, label: "Years Experience", suffix: "+" },
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 10, label: "Technologies", suffix: "+" },
  ];

  return (
    <AboutContainer ref={containerRef} className="about-content">
      <SectionTitle className="about-title" theme={theme}>
        About Me
      </SectionTitle>

      <ContentCard className="about-card">
        <AboutText theme={theme}>
          I'm <HighlightText theme={theme}>{greeting.title}</HighlightText>, a
          passionate{" "}
          <HighlightText theme={theme}>
            Full Stack & Control Systems Engineer
          </HighlightText>{" "}
          with expertise in building scalable, high-performance systems.
        </AboutText>

        <AboutText theme={theme}>
          With a background spanning{" "}
          <HighlightText theme={theme}>robotics</HighlightText>,{" "}
          <HighlightText theme={theme}>machine learning</HighlightText>, and{" "}
          <HighlightText theme={theme}>distributed systems</HighlightText>, I
          thrive on creating end-to-end solutions that make a real impact.
        </AboutText>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatItem key={stat.label}>
              <StatNumber
                theme={theme}
                ref={(el) => (statsRef.current[index] = el)}
                data-value={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </StatNumber>
              <StatLabel theme={theme}>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsContainer>

        {greeting.resumeLink && (
          <ResumeButton
            href={greeting.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            View Resume
          </ResumeButton>
        )}
      </ContentCard>
    </AboutContainer>
  );
};

export default AboutSection;
