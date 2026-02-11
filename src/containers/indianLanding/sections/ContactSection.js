import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { contactPageData, socialMediaLinks } from "../../../portfolio";

gsap.registerPlugin(ScrollTrigger);

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 111, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 111, 0, 0.6), 0 0 60px rgba(255, 111, 0, 0.3);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  min-height: 80vh;
`;

const GoldenDivider = styled.div`
  width: 150px;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent,
    ${(props) => props.theme.accent},
    transparent
  );
  margin-bottom: 2rem;
  animation: ${glow} 2s ease-in-out infinite;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  text-shadow: 0 0 30px ${(props) => props.theme.accent}44;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondaryText};
  max-width: 500px;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactCard = styled.div`
  background: rgba(26, 35, 126, 0.25);
  backdrop-filter: blur(15px);
  border: 2px solid ${(props) => props.theme.accent}44;
  border-radius: 30px;
  padding: 3rem;
  margin-bottom: 2rem;
  animation: ${(props) => (props.lit ? glow : "none")} 3s ease-in-out infinite;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.accent},
    #ff8f00
  );
  color: ${(props) => props.theme.body};
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  animation: ${pulse} 2s ease-in-out infinite;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 15px 50px ${(props) => props.theme.accent}66;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const SocialGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor || props.theme.primary};
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px) rotate(360deg);
    border-color: ${(props) => props.theme.accent};
    box-shadow: 0 15px 35px ${(props) => props.bgColor}66;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

const LocationText = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText};
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme.accent};
  }
`;

const FooterText = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme.secondaryText};
  margin-top: 3rem;
  opacity: 0.7;
`;

const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.accent}88;
  color: ${(props) => props.theme.accent};
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 30px;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent}22;
    border-color: ${(props) => props.theme.accent};
  }
`;

const ContactSection = ({ theme, diyasLit }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".social-link", {
        scale: 0,
        rotation: -180,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".social-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const emailLink = socialMediaLinks.find((link) => link.name === "Gmail");

  return (
    <ContactContainer ref={containerRef} className="contact-content">
      <GoldenDivider theme={theme} />

      <SectionTitle theme={theme}>Let's Connect</SectionTitle>

      <Subtitle theme={theme}>
        {contactPageData.contactSection.description}
      </Subtitle>

      <ContactCard theme={theme} lit={diyasLit}>
        <ContactButton
          href={emailLink?.link || "mailto:contact@example.com"}
          theme={theme}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          Get In Touch
        </ContactButton>

        <SocialGrid className="social-grid">
          {socialMediaLinks.map((social) => (
            <SocialLink
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              bgColor={social.backgroundColor}
              theme={theme}
              className="social-link"
              aria-label={social.name}
            >
              <i className={`fab ${social.fontAwesomeIcon}`}></i>
            </SocialLink>
          ))}
        </SocialGrid>

        <LocationText theme={theme}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {contactPageData.addressSection.subtitle}
        </LocationText>
      </ContactCard>

      <ExploreButton to="/home" theme={theme}>
        Explore Full Portfolio
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </ExploreButton>

      <FooterText theme={theme}>Crafted with passion from India</FooterText>
    </ContactContainer>
  );
};

export default ContactSection;
