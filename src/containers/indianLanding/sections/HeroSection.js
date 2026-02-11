import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { greeting, socialMediaLinks } from "../../../portfolio";

const glowPulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px rgba(255, 111, 0, 0.5);
  }
  50% {
    text-shadow: 0 0 40px rgba(255, 111, 0, 0.8), 0 0 60px rgba(255, 111, 0, 0.4);
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const NameWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 700;
  color: ${(props) => props.theme.text};
  margin: 0;
  letter-spacing: 0.05em;
  animation: ${glowPulse} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }
`;

const TitleWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Title = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: ${(props) => props.theme.secondaryText};
  margin: 0;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor || props.theme.primary};
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px ${(props) => props.bgColor}66;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
`;

const ScrollText = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.secondaryText};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const ScrollArrow = styled.div`
  width: 20px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: ${(props) => props.theme.accent};
    border-radius: 2px;
    animation: scroll 1.5s ease-in-out infinite;
  }

  @keyframes scroll {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-50%) translateY(8px);
      opacity: 0.5;
    }
  }
`;

const HeroSection = ({ theme }) => {
  const containerRef = useRef(null);
  const socialRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name animation
      gsap.from(".hero-name", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Title animation
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      // Social links staggered animation
      gsap.to(socialRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1.2,
      });

      // Set initial state for social links
      gsap.set(socialRefs.current, {
        y: 30,
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <HeroContainer ref={containerRef}>
      <NameWrapper>
        <Name className="hero-name" theme={theme}>
          {greeting.title}
        </Name>
      </NameWrapper>

      <TitleWrapper>
        <Title className="hero-title" theme={theme}>
          {greeting.subTitle}
        </Title>
      </TitleWrapper>

      <SocialLinks>
        {socialMediaLinks.slice(0, 5).map((social, index) => (
          <SocialLink
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            bgColor={social.backgroundColor}
            theme={theme}
            ref={(el) => (socialRefs.current[index] = el)}
            aria-label={social.name}
          >
            <i className={`fab ${social.fontAwesomeIcon}`}></i>
          </SocialLink>
        ))}
      </SocialLinks>

      <ScrollIndicator>
        <ScrollText theme={theme}>Scroll to explore</ScrollText>
        <ScrollArrow theme={theme} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
