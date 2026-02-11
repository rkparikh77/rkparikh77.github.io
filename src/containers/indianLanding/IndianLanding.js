import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import components
import RainCanvas from "../../components/indian/RainCanvas";
import CloudLayer from "../../components/indian/CloudLayer";
import LandscapeSVG from "../../components/indian/LandscapeSVG";
import Mandala from "../../components/indian/Mandala";
import Peacock from "../../components/indian/Peacock";
import Diya from "../../components/indian/Diya";
import Lotus from "../../components/indian/Lotus";
import SoundToggle from "../../components/indian/SoundToggle";

// Import sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsTeaser from "./sections/ProjectsTeaser";
import ContactSection from "./sections/ContactSection";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.body};
  overflow-x: hidden;
`;

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
`;

const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  transition: background 0.5s ease;
`;

const SkyGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.gradient};
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const Scene = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100svh;
  }
`;

const LightningFlash = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.lightning};
  opacity: 0;
  z-index: 100;
  pointer-events: none;
`;

const GrainOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  z-index: 1000;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
`;

const IndianLanding = ({ theme }) => {
  const containerRef = useRef(null);
  const lightningRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const [isRaining, setIsRaining] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [peacockExpanded, setPeacockExpanded] = useState(false);
  const [diyasLit, setDiyasLit] = useState(false);

  // Get current sky gradient based on scroll progress
  const getSkyGradient = () => {
    if (scrollProgress < 0.2) return theme.preMonsoonSky;
    if (scrollProgress < 0.5) return theme.monsoonSky;
    if (scrollProgress < 0.8) return theme.monsoonSky;
    return theme.afterRainSky;
  };

  // Lightning flash effect
  const triggerLightning = () => {
    if (lightningRef.current) {
      gsap
        .timeline()
        .to(lightningRef.current, { opacity: 0.8, duration: 0.05 })
        .to(lightningRef.current, { opacity: 0, duration: 0.1 })
        .to(lightningRef.current, { opacity: 0.5, duration: 0.05, delay: 0.1 })
        .to(lightningRef.current, { opacity: 0, duration: 0.2 });
    }
  };

  useEffect(() => {
    // Set up scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Update current scene
      if (progress < 0.2) setCurrentScene(0);
      else if (progress < 0.5) setCurrentScene(1);
      else if (progress < 0.8) setCurrentScene(2);
      else setCurrentScene(3);

      // Control rain based on scroll
      setIsRaining(progress >= 0.2 && progress < 0.85);

      // Peacock expands during rain dance
      setPeacockExpanded(progress >= 0.5 && progress < 0.8);

      // Diyas light up in final scene
      setDiyasLit(progress >= 0.75);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize

    // Random lightning during monsoon scene
    let lightningInterval;
    if (currentScene === 1 || currentScene === 2) {
      lightningInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          triggerLightning();
        }
      }, 3000);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lightningInterval) clearInterval(lightningInterval);
    };
  }, [currentScene]);

  // GSAP animations setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section entrance
      gsap.from(".hero-title", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".scene-1",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // About section
      gsap.from(".about-content", {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: ".scene-2",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

      // Skills section
      gsap.from(".skill-item", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".scene-3",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

      // Contact section
      gsap.from(".contact-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".scene-4",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <LandingContainer ref={containerRef} theme={theme}>
      {/* Fixed background layers */}
      <FixedBackground>
        <SkyGradient gradient={getSkyGradient()} opacity={1} />
        <CloudLayer
          scrollProgress={scrollProgress}
          theme={theme}
          intensity={currentScene === 1 || currentScene === 2 ? 1 : 0.3}
        />
        <LandscapeSVG theme={theme} scrollProgress={scrollProgress} />
        <Mandala
          theme={theme}
          visible={currentScene === 0}
          scrollProgress={scrollProgress}
        />
      </FixedBackground>

      {/* Rain overlay */}
      <RainCanvas
        isRaining={isRaining}
        theme={theme}
        intensity={currentScene === 2 ? 1 : 0.5}
      />

      {/* Lightning flash */}
      <LightningFlash ref={lightningRef} theme={theme} />

      {/* Animated elements */}
      <Peacock
        theme={theme}
        expanded={peacockExpanded}
        visible={currentScene >= 2}
      />

      {/* Scrollable content */}
      <ScrollContainer>
        <ContentWrapper>
          {/* Scene 1: Pre-Monsoon - Hero */}
          <Scene className="scene-1">
            <HeroSection theme={theme} />
          </Scene>

          {/* Scene 2: Monsoon Arrives - About */}
          <Scene className="scene-2">
            <AboutSection theme={theme} />
          </Scene>

          {/* Scene 3: Rain Dance - Skills & Projects */}
          <Scene className="scene-3">
            <SkillsSection theme={theme} />
          </Scene>

          {/* Scene 3.5: Projects Teaser */}
          <Scene className="scene-3-5">
            <ProjectsTeaser theme={theme} />
          </Scene>

          {/* Scene 4: After Rain - Contact */}
          <Scene className="scene-4">
            <Lotus theme={theme} blooming={currentScene === 3} />
            <Diya theme={theme} lit={diyasLit} position="left" />
            <Diya theme={theme} lit={diyasLit} position="right" />
            <ContactSection theme={theme} diyasLit={diyasLit} />
          </Scene>
        </ContentWrapper>
      </ScrollContainer>

      {/* UI Controls */}
      <SoundToggle
        enabled={soundEnabled}
        onToggle={() => setSoundEnabled(!soundEnabled)}
        theme={theme}
      />

      {/* Grain texture overlay */}
      <GrainOverlay />
    </LandingContainer>
  );
};

export default IndianLanding;
