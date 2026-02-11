import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const drift = keyframes`
  0% { transform: translateX(-10%); }
  50% { transform: translateX(10%); }
  100% { transform: translateX(-10%); }
`;

const CloudContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  overflow: hidden;
  z-index: 1;
`;

const Cloud = styled.div`
  position: absolute;
  background: ${(props) => props.color};
  border-radius: 50%;
  filter: blur(${(props) => props.blur}px);
  opacity: ${(props) => props.opacity};
  animation: ${drift} ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  transform: translateX(${(props) => props.offsetX}px);
`;

const CloudGroup = styled.div`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  transform: translateY(${(props) => props.translateY}px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

const generateClouds = (count, intensity) => {
  const clouds = [];
  for (let i = 0; i < count; i++) {
    const baseWidth = Math.random() * 300 + 200;
    const baseHeight = Math.random() * 100 + 80;
    clouds.push({
      id: i,
      width: baseWidth,
      height: baseHeight,
      left: Math.random() * 120 - 10,
      top: Math.random() * 40,
      puffs: generatePuffs(Math.floor(Math.random() * 5 + 3), intensity),
    });
  }
  return clouds;
};

const generatePuffs = (count, intensity) => {
  const puffs = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 80 + 40;
    puffs.push({
      id: i,
      size,
      x: Math.random() * 100,
      y: Math.random() * 60,
      blur: Math.random() * 30 + 20,
      opacity: (Math.random() * 0.3 + 0.2) * intensity,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * -20,
    });
  }
  return puffs;
};

const CloudLayer = ({ scrollProgress, theme, intensity = 1 }) => {
  const cloudsRef = useRef(generateClouds(8, intensity));
  const intensityLevel = Math.round(intensity * 2);

  // Recalculate clouds when intensity changes significantly
  useEffect(() => {
    cloudsRef.current = generateClouds(8, intensity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intensityLevel]);

  // Calculate cloud movement based on scroll
  const getCloudTranslateY = (baseTop) => {
    const parallaxFactor = 0.3;
    return (
      scrollProgress * window.innerHeight * parallaxFactor * (1 - baseTop / 100)
    );
  };

  // Cloud color based on scene
  const getCloudColor = () => {
    if (scrollProgress < 0.2) {
      return "rgba(49, 27, 146, 0.6)"; // Purple tint for pre-monsoon
    } else if (scrollProgress < 0.8) {
      return "rgba(55, 71, 79, 0.8)"; // Dark grey for monsoon
    }
    return "rgba(255, 143, 0, 0.3)"; // Orange tint for after rain
  };

  return (
    <CloudContainer>
      {cloudsRef.current.map((cloud) => (
        <CloudGroup
          key={cloud.id}
          width={cloud.width}
          height={cloud.height}
          left={cloud.left}
          top={cloud.top}
          translateY={getCloudTranslateY(cloud.top)}
          visible={intensity > 0.1}
        >
          {cloud.puffs.map((puff) => (
            <Cloud
              key={puff.id}
              color={getCloudColor()}
              style={{
                width: puff.size,
                height: puff.size,
                left: `${puff.x}%`,
                top: `${puff.y}%`,
              }}
              blur={puff.blur}
              opacity={puff.opacity}
              duration={puff.duration}
              delay={puff.delay}
            />
          ))}
        </CloudGroup>
      ))}
    </CloudContainer>
  );
};

export default CloudLayer;
