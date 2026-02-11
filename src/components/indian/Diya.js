import React from "react";
import styled, { keyframes } from "styled-components";

const flicker = keyframes`
  0%, 100% {
    transform: scaleY(1) scaleX(1);
    opacity: 1;
  }
  25% {
    transform: scaleY(1.1) scaleX(0.9);
    opacity: 0.9;
  }
  50% {
    transform: scaleY(0.9) scaleX(1.1);
    opacity: 1;
  }
  75% {
    transform: scaleY(1.05) scaleX(0.95);
    opacity: 0.95;
  }
`;

const glow = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
`;

const DiyaContainer = styled.div`
  position: absolute;
  bottom: 15%;
  ${(props) => (props.position === "left" ? "left: 10%;" : "right: 10%;")}
  width: 80px;
  height: 100px;
  z-index: 9;
  opacity: ${(props) => (props.lit ? 1 : 0.3)};
  transition: opacity 1s ease;

  @media (max-width: 768px) {
    width: 50px;
    height: 60px;
    bottom: 10%;
    ${(props) => (props.position === "left" ? "left: 5%;" : "right: 5%;")}
  }
`;

const DiyaSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Flame = styled.g`
  transform-origin: center bottom;
  animation: ${flicker} 0.5s ease-in-out infinite;
  opacity: ${(props) => (props.lit ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const GlowCircle = styled.circle`
  animation: ${glow} 2s ease-in-out infinite;
  opacity: ${(props) => (props.lit ? 0.5 : 0)};
  transition: opacity 0.5s ease;
`;

const Diya = ({ theme, lit, position = "left" }) => {
  return (
    <DiyaContainer position={position} lit={lit}>
      <DiyaSVG viewBox="0 0 80 100">
        {/* Glow effect */}
        <GlowCircle cx="40" cy="30" r="35" fill={theme.diyaGlow} lit={lit} />

        {/* Flame */}
        <Flame lit={lit}>
          {/* Outer flame */}
          <ellipse
            cx="40"
            cy="25"
            rx="8"
            ry="20"
            fill={theme.accent}
            opacity="0.8"
          />
          {/* Inner flame */}
          <ellipse cx="40" cy="28" rx="4" ry="12" fill="#fff3e0" />
          {/* Core */}
          <ellipse cx="40" cy="32" rx="2" ry="6" fill="white" />
        </Flame>

        {/* Wick */}
        <rect x="38" y="42" width="4" height="8" fill="#4a4a4a" rx="1" />

        {/* Diya bowl - terracotta style */}
        <ellipse cx="40" cy="55" rx="25" ry="8" fill="#bf360c" />
        <ellipse cx="40" cy="50" rx="25" ry="8" fill="#d84315" />

        {/* Oil surface */}
        <ellipse
          cx="40"
          cy="48"
          rx="20"
          ry="5"
          fill={lit ? "#ffb74d" : "#8d6e63"}
        />

        {/* Bowl rim highlight */}
        <path
          d="M15,52 Q40,45 65,52"
          fill="none"
          stroke="#ff8a65"
          strokeWidth="2"
        />

        {/* Diya base */}
        <ellipse cx="40" cy="60" rx="28" ry="10" fill="#a1887f" />
        <ellipse cx="40" cy="65" rx="22" ry="6" fill="#8d6e63" />

        {/* Decorative pattern */}
        <path
          d="M20,55 Q25,58 30,55"
          fill="none"
          stroke="#ffcc80"
          strokeWidth="1"
        />
        <path
          d="M50,55 Q55,58 60,55"
          fill="none"
          stroke="#ffcc80"
          strokeWidth="1"
        />

        {/* Light reflection on base */}
        {lit && (
          <ellipse
            cx="40"
            cy="70"
            rx="30"
            ry="15"
            fill={theme.diyaGlow}
            opacity="0.3"
          />
        )}
      </DiyaSVG>
    </DiyaContainer>
  );
};

export default Diya;
