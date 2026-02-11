import React from "react";
import styled, { keyframes, css } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(1deg); }
`;

const ripple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const LotusContainer = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  z-index: 7;
  animation: ${float} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    bottom: 25%;
  }
`;

const WaterRipple = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.rain};
  border-radius: 50%;
  opacity: 0;
  animation: ${ripple} 3s ease-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const LotusSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Petal = styled.path`
  transform-origin: 75px 120px;
  transition: transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${(props) =>
    props.blooming
      ? css`
          transform: rotate(${props.rotation}deg)
            translateY(${props.translateY}px);
        `
      : css`
          transform: rotate(0deg) translateY(0);
        `}
`;

const InnerPetal = styled.path`
  transform-origin: 75px 100px;
  transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.3s;

  ${(props) =>
    props.blooming
      ? css`
          transform: rotate(${props.rotation}deg) scale(1);
        `
      : css`
          transform: rotate(0deg) scale(0.5);
        `}
`;

const Lotus = ({ theme, blooming }) => {
  const outerPetals = [
    { rotation: -40, translateY: -5 },
    { rotation: -25, translateY: -8 },
    { rotation: -10, translateY: -10 },
    { rotation: 10, translateY: -10 },
    { rotation: 25, translateY: -8 },
    { rotation: 40, translateY: -5 },
  ];

  const innerPetals = [{ rotation: -20 }, { rotation: 0 }, { rotation: 20 }];

  return (
    <LotusContainer>
      {/* Water ripples */}
      <WaterRipple theme={theme} delay={0} />
      <WaterRipple theme={theme} delay={1} />
      <WaterRipple theme={theme} delay={2} />

      <LotusSVG viewBox="0 0 150 150">
        {/* Leaf pads */}
        <ellipse
          cx="40"
          cy="130"
          rx="35"
          ry="15"
          fill={theme.lotusLeaf}
          opacity="0.7"
        />
        <ellipse
          cx="110"
          cy="130"
          rx="35"
          ry="15"
          fill={theme.lotusLeaf}
          opacity="0.7"
        />

        {/* Outer petals */}
        {outerPetals.map((petal, i) => (
          <Petal
            key={`outer-${i}`}
            d="M75,120 Q55,80 65,50 Q75,30 85,50 Q95,80 75,120"
            fill={theme.lotusPink}
            opacity="0.9"
            blooming={blooming}
            rotation={petal.rotation}
            translateY={petal.translateY}
          />
        ))}

        {/* Inner petals */}
        {innerPetals.map((petal, i) => (
          <InnerPetal
            key={`inner-${i}`}
            d="M75,100 Q65,70 72,50 Q75,40 78,50 Q85,70 75,100"
            fill="#f48fb1"
            blooming={blooming}
            rotation={petal.rotation}
          />
        ))}

        {/* Center */}
        <circle cx="75" cy="90" r="12" fill="#fce4ec" />
        <circle cx="75" cy="90" r="8" fill={theme.peacockGold} />

        {/* Center dots */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx={75 + Math.cos((i * 72 * Math.PI) / 180) * 5}
            cy={90 + Math.sin((i * 72 * Math.PI) / 180) * 5}
            r="2"
            fill="#795548"
          />
        ))}

        {/* Stem */}
        <path
          d="M75,120 Q73,140 75,150"
          fill="none"
          stroke={theme.lotusLeaf}
          strokeWidth="4"
        />
      </LotusSVG>
    </LotusContainer>
  );
};

export default Lotus;
